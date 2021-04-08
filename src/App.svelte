<script lang="ts">
  import "normalize.css";
  import Sky from "./background/Sky.svelte";
  import Ground from "./ground/Ground.svelte";
  import AlgorithmSelector from "./input/algorithm-selector/AlgorithmSelector.svelte";

  const algorithms = ["bubble sort", "merge sort", "quick sort"];

  function sortWithAlgorithm(algorithm: string) {
    console.log("Sorting with", algorithm);
  }
</script>

<Sky />
<Ground>
  <AlgorithmSelector
    {algorithms}
    on:sorting={(event) => sortWithAlgorithm(event.detail)}
  />
</Ground>
