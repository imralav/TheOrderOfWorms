<script lang="ts">
  import type { Observable, Subscription } from "rxjs";
  import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
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
    console.log("Worms after update: ", $$props);
    console.log("Current unsub: ", unsub);
    if (events && unsub == undefined) {
      //can do it better, subscribing only once?
      console.log("Events available and unsub undefined", events);
      unsub = events
        .pipe(
          finalize(() => {
            console.log("finalizing events in worms");
            inspectedIndices = [];
            unsub.unsubscribe();
            unsub = undefined;
          })
        )
        .subscribe((e) => {
          if (e.type === "inspected") {
            inspectedIndices = [];
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
    <Worm {height} inspected={inspectedIndices.indexOf(index) >= 0} />
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
