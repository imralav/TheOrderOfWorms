<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { SortingAlgorithmOption } from "../../sorting-algorithms/sorting-algorithms";

  const dispatcher = createEventDispatcher();
  export let algorithms: SortingAlgorithmOption[];
  let selectedAlgorithm: SortingAlgorithmOption;
</script>

<main>
  <p>Select sorting method:</p>
  <select bind:value={selectedAlgorithm}>
    {#each algorithms as algorithm}
      <option value={algorithm}>{algorithm.name}</option>
    {/each}
  </select>
  <button on:click={() => dispatcher("sorting", selectedAlgorithm)}>
    Sort worms with {selectedAlgorithm?.name}
  </button>
</main>

<style>
  main {
    color: rgb(187, 136, 95);
    font-size: 25px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 25px;
    text-transform: uppercase;
    background-color: rgb(83, 47, 17);
    border-radius: 25px;
  }

  main select {
    color: rgb(187, 136, 95);
    font-size: 25px;
    background-color: rgb(54, 29, 8);
    text-transform: uppercase;
    border-radius: 15px;
    padding: 15px;
  }

  main button {
    color: rgb(54, 29, 8);
    font-size: 25px;
    background-color: rgb(187, 136, 95);
    border-radius: 15px;
    padding: 15px;
    text-transform: uppercase;
  }
</style>
