<script lang="ts">
  import "normalize.css";
  import Sky from "./background/Sky.svelte";
  import Ground from "./ground/Ground.svelte";
  import AlgorithmSelector from "./input/algorithm-selector/AlgorithmSelector.svelte";
  import { availableAlgorithms } from "./sorting-algorithms/sorting-algorithms";
  import type { SortingEvent } from "./sorting-algorithms/sorting-algorithms";
  import type { SortingAlgorithmOption } from "./sorting-algorithms/sorting-algorithms";
  import { Observable, of } from "rxjs";
  import NumbersCollector from "./input/numbers-collector/NumbersCollector.svelte";
  import { nextInts, nextInt } from "./randomizer/Randomizer";
  import Worms from "./worms/Worms.svelte";
  import { onDestroy } from "svelte";
  import { concatMap, delay, map, tap } from "rxjs/operators";

  const MIN_VALUE = 0;
  const MAX_VALUE = 300;
  const MIN_LENGTH = 1;
  const MAX_LENGTH = 10;
  const INITIAL_LENGTH = 3;

  const algorithms = availableAlgorithms;
  let values = nextInts(MIN_VALUE, MAX_VALUE, INITIAL_LENGTH);
  let events: Observable<SortingEvent>;
  let unsub;

  function sortWithAlgorithm(algorithm: SortingAlgorithmOption) {
    const sortingResult = algorithm.sort(values);
    events = sortingResult.eventsStream.pipe(
      concatMap((e) => of(e).pipe(delay(250)))
    );
    unsub = events.subscribe((e) => {
      console.log("event in App: ", e);
      if (e.type === "swapped") {
        const [first, second] = e.indices;
        const temp = values[first];
        values[first] = values[second];
        values[second] = temp;
      }
    });
  }

  function randomizeAll() {
    values = nextInts(MIN_VALUE, MAX_VALUE, values.length);
  }

  function addValue() {
    const newAmount = values.length + 1;
    if (newAmount <= MAX_LENGTH) {
      values = [...values, nextInt(MIN_VALUE, MAX_VALUE)];
    }
  }

  function removeValue() {
    const newAmount = values.length - 1;
    if (newAmount >= MIN_LENGTH) {
      values = values.slice(0, newAmount);
    }
  }

  onDestroy(() => {
    unsub();
  });
</script>

<Sky>
  <Ground>
    <Worms slot="above-ground" wormHeights={values} {events} />
    <NumbersCollector
      slot="grass"
      {values}
      {events}
      on:value-added={() => addValue()}
      on:value-removed={() => removeValue()}
      on:values-randomized={() => randomizeAll()}
    />
    <AlgorithmSelector
      slot="earth"
      {algorithms}
      on:sorting={(event) => sortWithAlgorithm(event.detail)}
    />
  </Ground>
</Sky>
