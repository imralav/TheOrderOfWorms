import { ReplaySubject } from "rxjs";
import type { SortingAlgorithm, SortingEvent } from "./sorting-algorithms";

class BubbleSort implements SortingAlgorithm {
  private data: number[];
  constructor(data: number[]) {
    this.data = [...data];
  }

  sort() {
    const eventsStream = new ReplaySubject<SortingEvent>();
    for (let i = 0; i < this.data.length - 1; i++) {
      for (let j = 0; j < this.data.length - i - 1; j++) {
        eventsStream.next({ indices: [j, j + 1], type: "inspected" });
        if (this.data[j] > this.data[j + 1]) {
          eventsStream.next({ indices: [j, j + 1], type: "swapped" });
          const temp = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = temp;
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
