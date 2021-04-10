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
    width: 95%;
    margin: 0 auto;
    background-color: rgb(102, 55, 17);
    padding: 15px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
</style>
