<script lang="ts">
  import Cloud from "./Cloud.svelte";
  import { onMount } from "svelte";
  import { nextNumber, nextInt } from "../randomizer/Randomizer";

  const CLOUDS_AMOUNT = 30;
  const CLOUD_MAX_SIZE = 150;
  const CLOUD_MAX_SPEED = 120;

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

  function generateCloud(): Cloud {
    return {
      y: nextInt(0, skyWidth),
      x: nextNumber(0, 1),
      size: nextInt(20, CLOUD_MAX_SIZE),
      speed: nextInt(80, CLOUD_MAX_SPEED),
      opacity: Math.sqrt(nextNumber(0.25, 1)),
    };
  }

  function generateClouds(amount: number = 1): Cloud[] {
    return Array(amount)
      .fill(0)
      .map(() => generateCloud());
  }

  onMount(() => {
    clouds = generateClouds(CLOUDS_AMOUNT);
  });
</script>

<main bind:clientWidth={skyWidth} bind:clientHeight={skyHeight}>
  <section class="clouds">
    {#each clouds as cloud}
      <Cloud {...cloud} {skyWidth} {skyHeight} />
    {/each}
  </section>
  <slot />
</main>

<style>
  :global(body) {
    background-color: rgb(87, 191, 240);
    overflow: hidden;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vw;
  }
  section.clouds {
    overflow: hidden;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vw;
    display: inline;
    position: relative;
  }
</style>
