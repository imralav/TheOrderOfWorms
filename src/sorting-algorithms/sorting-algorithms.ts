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
  indices: number[];
}

interface ValuesInspectedEvent extends SortingEvent {}
interface ValuesSwappedEvent extends SortingEvent {}

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
  ValuesInspectedEvent,
  ValuesSwappedEvent,
};
