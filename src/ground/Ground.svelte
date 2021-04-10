<script lang="ts">
</script>

<main>
  <section class="grass">
    <slot name="grass">Values to sort</slot>
  </section>
  <section class="earth">
    <slot name="earth">Algorithm selection</slot>
  </section>
</main>
>

<style>
  main {
    margin: 0 auto;
    width: 80vw;
    height: 30vh;
    z-index: 1;
  }

  main > * {
    z-index: 1;
  }

  .grass {
    border-radius: 15px;
    background-color: rgb(44, 102, 17);
    width: 100%;
    padding: 10px;
  }

  .earth {
    box-shadow: inset 0 10px 5px -5px var(--earth-darker-color);
    width: 95%;
    margin: 0 auto;
    background-color: var(--earth-color);
    padding: 15px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
</style>
