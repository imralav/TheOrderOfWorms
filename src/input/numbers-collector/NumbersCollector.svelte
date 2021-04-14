<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { scale } from "svelte/transition";
  export let values: number[];

  let numbersCollectorEvents = createEventDispatcher();
  //the buttons shouldnt move after adding/removing worms
</script>

<main>
  {#each values as value}
    <input
      bind:value
      readonly
      disabled
      size="4"
      transition:scale={{ duration: 250 }}
    />
  {/each}
  <button on:click={() => numbersCollectorEvents("value-added")}>+</button>
  <button on:click={() => numbersCollectorEvents("value-removed")}>-</button>
  <button on:click={() => numbersCollectorEvents("values-randomized")}>
    <img src="/icons/refresh.svg" alt="Randomize values" />
  </button>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  main > *:focus {
    outline: var(--grass-lighter-color) solid 1px;
  }

  button {
    display: inline-block;
    text-align: center;
    color: var(--grass-lighter-color);
    background-color: var(--grass-darker-color);
    font-size: 25px;
    font-weight: bolder;
    border: 0;
    padding: 0 10px;
    border-radius: 5px;
  }

  input {
    display: inline-block;
    text-align: center;
    color: var(--grass-lighter-color);
    background-color: var(--grass-darker-color);
    font-size: 25px;
    font-weight: bolder;
    padding: 5px;
    border: 0;
    border-radius: 5px;
  }
</style>
