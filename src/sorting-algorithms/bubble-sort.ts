import { ReplaySubject } from "rxjs";
import type {
  SortingAlgorithm,
  SortingAlgorithmResult,
  SortingEvent,
  ValuesInspectedEvent,
  ValuesSwappedEvent,
} from "./sorting-algorithms";

class BubbleSort implements SortingAlgorithm {
  private data: number[];
  constructor(data: number[]) {
    this.data = [...data];
  }

  sort() {
    const eventsStream = new ReplaySubject<SortingEvent>();
    for (let i = 0; i < this.data.length - 1; i++) {
      for (let j = i + 1; j < this.data.length; j++) {
        eventsStream.next({ indices: [i, j] } as ValuesInspectedEvent);
        if (this.data[i] > this.data[j]) {
          eventsStream.next({ indices: [i, j] } as ValuesSwappedEvent);
          const temp = this.data[i];
          this.data[i] = this.data[j];
          this.data[j] = temp;
        }
      }
    }
    eventsStream.complete();
    return {
      result: this.data,
      eventsStream,
    };
  }
}

export { BubbleSort };
