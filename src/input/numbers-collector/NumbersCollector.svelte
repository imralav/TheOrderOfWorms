<script lang="ts">
  import type { Observable } from "rxjs";
  import { finalize } from "rxjs/operators";
  import { createEventDispatcher, afterUpdate, onDestroy } from "svelte";
  import { scale } from "svelte/transition";
  import type { SortingEvent } from "../../sorting-algorithms/sorting-algorithms";
  export let values: number[];
  export let events: Observable<SortingEvent>;
  let unsub;
  let inspectedIndices = [];

  let numbersCollectorEvents = createEventDispatcher();

  afterUpdate(() => {
    if (events && unsub == undefined) {
      unsub = events
        .pipe(finalize(() => (inspectedIndices = [])))
        .subscribe((e) => {
          console.log("event in Collector: ", e);
          if (e.type === "inspected") {
            inspectedIndices = [];
            inspectedIndices = e.indices;
          }
        });
    }
  });

  onDestroy(() => {
    unsub();
  });
</script>

<main>
  {#each values as value, index}
    <input
      bind:value
      readonly
      disabled
      class={inspectedIndices.indexOf(index) >= 0 ? "inspected" : ""}
      size="4"
      transition:scale={{ duration: 250 }}
    />
  {/each}
  <!-- //the buttons shouldnt move after adding/removing worms -->
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

  input.inspected {
    border: 1px solid var(--grass-lighter-color);
  }
</style>
