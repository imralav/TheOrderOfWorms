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
    color: var(--earth-lighter-color);
    font-size: 25px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 25px;
    text-transform: uppercase;
    background-color: var(--earth-darker-color);
    border-radius: 25px;
    box-shadow: inset 2px 2px 5px 0 var(--earth-darkest-color);
  }
  main > *:focus {
    outline: none;
    border: 1px solid var(--earth-lighter-color);
  }

  main select {
    color: var(--earth-lighter-color);
    font-size: 25px;
    background-color: var(--earth-color);
    text-transform: uppercase;
    border-radius: 15px;
    padding: 15px;
    border: 0;
    box-shadow: 5px 5px 5px 0 var(--earth-darkest-color);
  }

  main button {
    color: var(--earth-lighter-color);
    font-size: 25px;
    background-color: var(--earth-color);
    border: 0;
    border-radius: 15px;
    padding: 15px;
    text-transform: uppercase;
    box-shadow: 5px 5px 5px 0 var(--earth-darkest-color);
  }
</style>
