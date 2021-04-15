import type { Observable } from "rxjs";
import { BubbleSort } from "./bubble-sort";

interface SortingAlgorithmResult {
  result: number[];
  eventsStream: Observable<SortingEvent>;
}

interface SortingAlgorithmOption {
  name: string;
  sort: (nums: number[]) => SortingAlgorithmResult;
}

interface SortingEvent {
  type: "inspected" | "swapped";
  indices: number[];
}

interface SortingAlgorithm {
  sort: (nums: number[]) => SortingAlgorithmResult;
}

const availableAlgorithms = [
  {
    name: "bubble sort",
    sort: (nums: number[]) => new BubbleSort(nums).sort(),
  },
] as SortingAlgorithmOption[];

export {
  SortingAlgorithm,
  SortingAlgorithmResult,
  SortingAlgorithmOption,
  availableAlgorithms,
  SortingEvent,
};
