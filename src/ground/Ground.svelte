<script lang="ts">
</script>

<main>
  <section class="grass" />
  <section class="earth">
    <slot>Algorithm input</slot>
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
    height: 25%;
    width: 100%;
  }

  .earth {
    height: 75%;
    width: 95%;
    margin: 0 auto;
    background-color: rgb(102, 55, 17);
    padding: 15px;
    box-sizing: border-box;
  }
</style>
