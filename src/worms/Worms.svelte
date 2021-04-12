<script lang="ts">
  import Worm from "./Worm.svelte";
  export let wormHeights: number[];

  let maxHeight; //compute worm height according to max container height
</script>

<main bind:clientHeight={maxHeight}>
  {#each wormHeights as height}
    <Worm {height} />
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
</style>
