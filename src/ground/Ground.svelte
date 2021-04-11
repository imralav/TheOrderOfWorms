<script lang="ts">
  import { nextNumber } from "../randomizer/Randomizer";

  const GRASS_SECTIONS_AMOUNT = 31;
</script>

<main>
  <section class="above-ground">
    <slot name="above-ground">above ground</slot>
  </section>
  <section class="grass">
    <section class="grass-leaves">
      {#each Array(GRASS_SECTIONS_AMOUNT) as _}
        <div
          class="grass-leaf"
          style="width: {100 /
            (GRASS_SECTIONS_AMOUNT + 5)}%; animation-delay: {nextNumber(
            0,
            3
          )}s; animation-duration: {nextNumber(0.8, 1.5)}s"
        />
      {/each}
    </section>
    <slot name="grass">Values to sort</slot>
  </section>
  <section class="earth">
    <slot name="earth">Algorithm selection</slot>
  </section>
</main>
>

<style>
  main {
    position: fixed;
    bottom: 0;
    left: 10vw;
    height: auto;
    margin: 0 auto;
    width: 80vw;
    z-index: 1;
  }

  main > * {
    z-index: 1;
  }

  .above-ground {
    z-index: -3;
    width: 100%;
    height: 70vh;
    padding: 0 10px;
  }

  .grass {
    border-radius: 15px;
    background-color: var(--grass-color);
    width: 100%;
    padding: 10px;
  }

  .grass-leaves {
    z-index: -1;
    top: 68.7vh;
    position: absolute;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(0, 0, 0, 0);
  }

  @keyframes leaf-movement {
    to {
      transform: rotate(-10deg);
    }
  }

  .grass-leaf {
    display: inline-block;
    height: 20px;
    background-color: var(--grass-color);
    transform-origin: bottom left;
    animation: leaf-movement ease-out alternate infinite;
  }

  .earth {
    box-shadow: inset 0 10px 5px -5px var(--earth-darker-color);
    width: 95%;
    margin: 0 auto;
    background-color: var(--earth-color);
    padding: 15px;
    box-sizing: border-box;
  }
</style>
