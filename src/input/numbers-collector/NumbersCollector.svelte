<script lang="ts">
  import type { Observable } from "rxjs";
  import { finalize } from "rxjs/operators";
  import { createEventDispatcher, afterUpdate, onDestroy } from "svelte";
  import { scale } from "svelte/transition";
  import type { SortingEvent } from "../../sorting-algorithms/sorting-algorithms";
  export let values: number[];
  export let events: Observable<SortingEvent>;
  export let disabled = false;
  let unsub;
  let inspectedIndices = [];

  let numbersCollectorEvents = createEventDispatcher();

  afterUpdate(() => {
    if (events && unsub == undefined) {
      unsub = events
        .pipe(finalize(() => (inspectedIndices = [])))
        .subscribe((e) => {
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
  <section class="buttons">
    <button on:click={() => numbersCollectorEvents("value-added")} {disabled}
      >+</button
    >
    <button on:click={() => numbersCollectorEvents("value-removed")} {disabled}
      >-</button
    >
    <button
      on:click={() => numbersCollectorEvents("values-randomized")}
      {disabled}
    >
      <img src="/icons/refresh.svg" alt="Randomize values" />
    </button>
  </section>
  <section class="worm-heights">
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
  </section>
</main>

<style>
  main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  .worm-heights {
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  .worm-heights > *:focus {
    outline: var(--grass-lighter-color) solid 1px;
  }

  .buttons {
    flex-grow: 0;
    flex-shrink: 0;
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
