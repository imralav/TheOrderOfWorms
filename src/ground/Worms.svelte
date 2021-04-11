<script lang="ts">
  import { slide } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";
  import { tweened, Tweened } from "svelte/motion";
  import { afterUpdate } from "svelte";
  export let values: number[];
  export let tweenedValues: Tweened<number>[];
  const TRANSITION_OPTIONS = {
    duration: 2000,
    easing: elasticInOut,
  };

  let maxHeight; //compute worm height according to max container height

  afterUpdate(() => {
    console.log("updated: ", values);
    tweenedValues = values.map((v) => tweened(v, TRANSITION_OPTIONS));
  });
</script>

<main bind:clientHeight={maxHeight}>
  {#each values as wormHeight}
    <div
      class="worm-body"
      style="height: {100 + wormHeight}px;"
      transition:slide={TRANSITION_OPTIONS}
    />
  {/each}
</main>

<style>
  main {
    z-index: -3;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 100%;
  }

  .worm-body {
    display: inline-block;
    background-color: rgb(243, 190, 155);
    width: 50px;
    border-radius: 10px 5px 0 0;
  }
</style>
