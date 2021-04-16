import { Observable, ReplaySubject } from "rxjs";
import { BubbleSort } from "./bubble-sort";
import { SelectionSort } from "./selection-sort";

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
  {
    name: "selection sort",
    sort: (nums: number[]) => new SelectionSort(nums).sort(),
  },
] as SortingAlgorithmOption[];

const withSortingEvents = (
  action: (
    inspected: (indices: number[]) => void,
    swapped: (indices: number[]) => void
  ) => void
) => {
  const stream = new ReplaySubject<SortingEvent>();
  action(
    (indices) => stream.next({ indices, type: "inspected" }),
    (indices) => stream.next({ indices, type: "swapped" })
  );
  stream.complete();
  return stream;
};

const swap = (data: number[], first: number, second: number) => {
  const temp = data[first];
  data[first] = data[second];
  data[second] = temp;
};

export {
  SortingAlgorithm,
  SortingAlgorithmResult,
  SortingAlgorithmOption,
  availableAlgorithms,
  SortingEvent,
  withSortingEvents,
  swap,
};
