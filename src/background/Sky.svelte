<script lang="ts">
  import Cloud from "./Cloud.svelte";
  import { onMount } from "svelte";
  import { nextInt as nextNumber } from "../randomizer/Randomizer";

  const CLOUDS_AMOUNT = 30;

  let skyWidth: number;
  let skyHeight: number;
  let clouds = [];

  interface Cloud {
    x: number;
    y: number;
    size: number;
    speed: number;
  }

  function generateCloud(y?: number): Cloud {
    return {
      y: y || nextNumber(0, skyWidth),
      x: nextNumber(0, window.innerHeight),
      size: nextNumber(20, 150),
      speed: nextNumber(80, 120),
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
