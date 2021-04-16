import { SortingAlgorithm, swap } from "./sorting-algorithms";
import { withSortingEvents } from "./sorting-algorithms";

class BubbleSort implements SortingAlgorithm {
  private data: number[];
  constructor(data: number[]) {
    this.data = [...data];
  }

  sort() {
    const eventsStream = withSortingEvents((inspected, swapped) => {
      for (let i = 0; i < this.data.length - 1; i++) {
        for (let j = 0; j < this.data.length - i - 1; j++) {
          inspected([j, j + 1]);
          if (this.data[j] > this.data[j + 1]) {
            swap(this.data, j, j + 1);
            swapped([j, j + 1]);
          }
        }
      }
    });
    return {
      result: this.data,
      eventsStream,
    };
  }
}

export { BubbleSort };
