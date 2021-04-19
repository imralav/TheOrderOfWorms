<script lang="ts">
  import type { Observable, Subscription } from "rxjs";
  import { finalize } from "rxjs/operators";
  import { afterUpdate, onDestroy } from "svelte";
  import type { SortingEvent } from "../sorting-algorithms/sorting-algorithms";
  import Worm from "./Worm.svelte";

  export let wormHeights: number[];
  export let events: Observable<SortingEvent>;
  let unsub: Subscription;
  let inspectedIndices: number[] = [];

  let maxHeight; //compute worm height according to max container height
  //how to make the worms move without jumping around after changing their amount?

  afterUpdate(() => {
    if (events && unsub == undefined) {
      //can do it better, subscribing only once?
      unsub = events
        .pipe(
          finalize(() => {
            inspectedIndices = [];
            unsub.unsubscribe();
            unsub = undefined;
          })
        )
        .subscribe((e) => {
          if (e.type === "inspected") {
            inspectedIndices = e.indices;
          }
        });
    }
  });

  onDestroy(() => {
    unsub?.unsubscribe();
  });
</script>

<main bind:clientHeight={maxHeight}>
  {#each wormHeights as height, index}
    <Worm {height} inspected={inspectedIndices.includes(index)} />
  {/each}
</main>

<style>
  main {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 100%;
  }
</style>
