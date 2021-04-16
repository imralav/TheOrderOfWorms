import { BubbleSort } from "./bubble-sort";
import { SelectionSort } from "./selection-sort";
import type { SortingAlgorithm } from "./sorting-algorithms";

describe.each([
  ["bubble sort", (numbers) => new BubbleSort(numbers)],
  ["selection sort", (numbers) => new SelectionSort(numbers)],
])("sorting with %s", (_, algorithm) => {
  it.each([
    [[], []],
    [[0], [0]],
    [
      [0, 1],
      [0, 1],
    ],
    [
      [1, 0],
      [0, 1],
    ],
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    [
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    [
      [1, 0, 2, 9, 3, 8, 4, 7, 5, 6],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
  ])("should sort %o to %o", (original, sorted) => {
    const sortingResult = algorithm(original).sort();
    expect(`${sortingResult.result}`).toEqual(`${sorted}`);
    //TODO: test using marble testing https://rxjs-dev.firebaseapp.com/guide/testing/marble-testing
  });
});
