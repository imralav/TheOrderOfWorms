<script lang="ts">
  import Cloud from "./Cloud.svelte";
  import { onMount } from "svelte";
  import { nextNumber, nextInt } from "../randomizer/Randomizer";

  const CLOUDS_AMOUNT = 30;

  let skyWidth: number;
  let skyHeight: number;
  let clouds = [];

  interface Cloud {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
  }

  function generateCloud(y?: number): Cloud {
    return {
      y: y || nextInt(0, skyWidth),
      x: nextInt(0, window.innerHeight),
      size: nextInt(20, 150),
      speed: nextInt(80, 120),
      opacity: Math.sqrt(nextNumber(0.25, 1)),
    };
  }

  function generateClouds(amount: number = 1): Cloud[] {
    return Array(amount)
      .fill(0)
      .map(() => generateCloud());
  }

  function replaceCloud(id: number) {
    console.log("Replacing cloud", id);
    clouds.splice(id, 1);
    clouds = [...clouds, generateCloud()];
  }

  onMount(() => {
    clouds = generateClouds(CLOUDS_AMOUNT);
  });
</script>

<main bind:clientWidth={skyWidth} bind:clientHeight={skyHeight}>
  {#each clouds as cloud, index}
    <!-- <Cloud {...cloud} on:cloud-left-the-sky={() => replaceCloud(index)} /> -->
    <Cloud {...cloud} {skyWidth} />
  {/each}
</main>

<style>
  :global(body) {
    background-color: rgb(87, 191, 240);
    overflow: hidden;
  }
  main {
    position: relative;
    width: 100vw;
    height: 70vh;
  }
</style>
