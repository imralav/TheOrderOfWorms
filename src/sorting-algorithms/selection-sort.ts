import {
  SortingAlgorithm,
    swap,
  withSortingEvents,
} from "./sorting-algorithms";

class SelectionSort implements SortingAlgorithm {
    private data: number[];
    constructor(data: number[]) {
      this.data = [...data];
    }
  
    sort() {
        const eventsStream = withSortingEvents((inspected, swapped) => {
            //can I do it using rxjs reactive operators?
            for(let i = 0; i<this.data.length; i++) {
                let minIndex = i
                let min = this.data[minIndex]
                for(let j = i; j<this.data.length; j++) {
                    inspected([min])
                    if(min > this.data[j]) {
                        min = this.data[j]
                        minIndex = j
                    }
                }
                swap(this.data, i, minIndex)
                swapped([i, minIndex])
            }
        });
      return {
        result: this.data,
        eventsStream,
      };
    }
  }
}

export { SelectionSort}
