<script lang="ts">
  import { slide } from "svelte/transition";
  import { elasticInOut, elasticOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import WormFace from "./WormFace.svelte";
  export let height: number = 0;
  export let inspected = false;
  const tweenedHeight = tweened(undefined, {
    duration: 1000,
    easing: elasticOut,
  });
  $: tweenedHeight.set(height);
  let hover = false;
</script>

<main
  on:mouseover={() => (hover = true)}
  on:mouseleave={() => (hover = false)}
  style="height: {100 + $tweenedHeight}px;"
  transition:slide={{
    duration: 2000,
    easing: elasticInOut,
  }}
>
  <WormFace hover={hover || inspected} />
</main>

<style>
  :root {
    --worm-body-color: #f3be9b;
  }
  main {
    display: inline-block;
    background-color: var(--worm-body-color);
    width: 50px;
    border-radius: 10px 5px 0 0;
  }
</style>
