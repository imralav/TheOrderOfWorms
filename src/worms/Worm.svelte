<script lang="ts">
  import { slide } from "svelte/transition";
  import { elasticInOut, elasticOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import WormFace from "./WormFace.svelte";
  export let height: number = 0;
  const tweenedHeight = tweened(undefined, {
    duration: 1000,
    easing: elasticOut,
  });
  $: tweenedHeight.set(height);
</script>

<main
  style="height: {100 + $tweenedHeight}px;"
  transition:slide={{
    duration: 2000,
    easing: elasticInOut,
  }}
>
  <WormFace />
</main>

<style>
  main {
    display: inline-block;
    background-color: rgb(243, 190, 155);
    width: 50px;
    border-radius: 10px 5px 0 0;
  }
</style>
