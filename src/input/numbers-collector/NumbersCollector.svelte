<script lang="ts">
  import { nextInt, nextInts } from "../../randomizer/Randomizer";
  import { createEventDispatcher, onMount } from "svelte";
  const MIN_VALUE = 0;
  const MAX_VALUE = 300;
  const MIN_LENGTH = 1;
  const MAX_LENGTH = 10;
  const INITIAL_LENGTH = 3;
  let valuesChangedDispatcher = createEventDispatcher();
  let values: number[] = [];

  onMount(() => {
    values = nextInts(MIN_VALUE, MAX_VALUE, INITIAL_LENGTH);
    dispatchValuesChangedEvent();
  });

  function dispatchValuesChangedEvent() {
    valuesChangedDispatcher("values-changed", values);
  }

  function randomizeAll() {
    values = nextInts(MIN_VALUE, MAX_VALUE, values.length);
    dispatchValuesChangedEvent();
  }

  function addValue() {
    const newAmount = values.length + 1;
    if (newAmount <= MAX_LENGTH) {
      values = [...values, nextInt(MIN_VALUE, MAX_VALUE)];
    }
    dispatchValuesChangedEvent();
  }

  function removeValue() {
    const newAmount = values.length - 1;
    if (newAmount >= MIN_LENGTH) {
      values = values.slice(0, newAmount);
    }
    dispatchValuesChangedEvent();
  }
</script>

<main>
  {#each values as value}
    <input bind:value readonly disabled size="4" />
  {/each}
  <button on:click={() => addValue()}>+</button>
  <button on:click={() => removeValue()}>-</button>
  <button on:click={() => randomizeAll()}
    ><img src="/icons/refresh.svg" alt="Randomize values" /></button
  >
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
