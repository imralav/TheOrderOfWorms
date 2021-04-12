<script lang="ts">
  //differentiate between face types
  //different face type for idle and inspected state
</script>

<main>
  <div class="eye" />
  <div class="eye" />
  <div class="mouth" />
</main>

<style>
  main {
    width: 100%;
    height: 50px;
  }
  .eye {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: black;
    margin: 5px;
  }
  .mouth {
    display: block;
    width: 15px;
    height: 5px;
    background-color: black;
    margin: 5px;
  }
</style>
