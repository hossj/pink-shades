export interface MasonryEntry<T> {
  item: T;
  index: number;
}

export function packMasonryColumns<T>(
  items: readonly T[],
  columnCount: number,
  ratio: (item: T) => number,
  batchSize = items.length,
): MasonryEntry<T>[][] {
  const buckets = Array.from(
    { length: columnCount },
    () => [] as MasonryEntry<T>[],
  );
  const heights = new Array<number>(columnCount).fill(0);
  const entryRatio = (entry: MasonryEntry<T>) => ratio(entry.item);
  const spreadOf = (values: number[]) =>
    Math.max(...values) - Math.min(...values);

  const packBatch = (batch: MasonryEntry<T>[]) => {
    const frozen = buckets.map((bucket) => bucket.length);

    for (const entry of batch) {
      const shortest = heights.indexOf(Math.min(...heights));
      buckets[shortest].push(entry);
      heights[shortest] += entryRatio(entry);
    }

    for (let pass = 0; pass < 60; pass++) {
      const tallest = heights.indexOf(Math.max(...heights));
      const shortest = heights.indexOf(Math.min(...heights));
      if (tallest === shortest) break;
      const current = spreadOf(heights);

      let best = current;
      let action: { tallIndex: number; shortIndex: number | null } | null =
        null;

      for (let i = frozen[tallest]; i < buckets[tallest].length; i++) {
        const delta = entryRatio(buckets[tallest][i]);
        const moved = [...heights];
        moved[tallest] -= delta;
        moved[shortest] += delta;
        if (spreadOf(moved) < best) {
          best = spreadOf(moved);
          action = { tallIndex: i, shortIndex: null };
        }
        for (let j = frozen[shortest]; j < buckets[shortest].length; j++) {
          const swapDelta = delta - entryRatio(buckets[shortest][j]);
          const swapped = [...heights];
          swapped[tallest] -= swapDelta;
          swapped[shortest] += swapDelta;
          if (spreadOf(swapped) < best) {
            best = spreadOf(swapped);
            action = { tallIndex: i, shortIndex: j };
          }
        }
      }

      if (!action) break;

      const [tallItem] = buckets[tallest].splice(action.tallIndex, 1);
      if (action.shortIndex === null) {
        buckets[shortest].push(tallItem);
        heights[tallest] -= entryRatio(tallItem);
        heights[shortest] += entryRatio(tallItem);
      } else {
        const [shortItem] = buckets[shortest].splice(action.shortIndex, 1);
        buckets[tallest].splice(action.tallIndex, 0, shortItem);
        buckets[shortest].splice(action.shortIndex, 0, tallItem);
        heights[tallest] += entryRatio(shortItem) - entryRatio(tallItem);
        heights[shortest] += entryRatio(tallItem) - entryRatio(shortItem);
      }
    }
  };

  const entries = items.map((item, index) => ({ item, index }));
  for (let start = 0; start < entries.length; start += batchSize) {
    packBatch(entries.slice(start, start + batchSize));
  }

  return buckets;
}
