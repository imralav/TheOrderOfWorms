<script lang="ts">
  import "normalize.css";
  import Sky from "./background/Sky.svelte";
  import Ground from "./ground/Ground.svelte";
  import AlgorithmSelector from "./input/algorithm-selector/AlgorithmSelector.svelte";
  import { availableAlgorithms } from "./sorting-algorithms/sorting-algorithms";
  import type { SortingAlgorithmOption } from "./sorting-algorithms/sorting-algorithms";
  import NumbersCollector from "./input/numbers-collector/NumbersCollector.svelte";

  const algorithms = availableAlgorithms;

  function sortWithAlgorithm(algorithm: SortingAlgorithmOption) {
    console.log("Sorting with", algorithm.name);
    console.log(algorithm.sort([1, 2, 3, 4, 5, 6, 9, 0]));
  }
</script>

<Sky />
<Ground>
  <NumbersCollector
    slot="grass"
    on:values-changed={(newValues) =>
      console.log("New values: ", newValues.detail)}
  />
  <AlgorithmSelector
    slot="earth"
    {algorithms}
    on:sorting={(event) => sortWithAlgorithm(event.detail)}
  />
</Ground>
