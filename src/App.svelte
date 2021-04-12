<script lang="ts">
  import "normalize.css";
  import Sky from "./background/Sky.svelte";
  import Ground from "./ground/Ground.svelte";
  import AlgorithmSelector from "./input/algorithm-selector/AlgorithmSelector.svelte";
  import { availableAlgorithms } from "./sorting-algorithms/sorting-algorithms";
  import type { SortingAlgorithmOption } from "./sorting-algorithms/sorting-algorithms";
  import NumbersCollector from "./input/numbers-collector/NumbersCollector.svelte";
  import { nextInts, nextInt } from "./randomizer/Randomizer";
  import Worms from "./worms/Worms.svelte";

  const MIN_VALUE = 0;
  const MAX_VALUE = 300;
  const MIN_LENGTH = 1;
  const MAX_LENGTH = 10;
  const INITIAL_LENGTH = 3;

  const algorithms = availableAlgorithms;
  let values = nextInts(MIN_VALUE, MAX_VALUE, INITIAL_LENGTH);

  function sortWithAlgorithm(algorithm: SortingAlgorithmOption) {
    const sortedValues = algorithm.sort(values);
    console.log(sortedValues.result);
    values = sortedValues.result;
    //apply events to inputs in NumbersCollector and to worms
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
</script>

<Sky />
<Ground>
  <Worms slot="above-ground" wormHeights={values} />
  <NumbersCollector
    slot="grass"
    {values}
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
