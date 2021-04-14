<script lang="ts">
  export let hover = false;
  //differentiate between face types
  //different face type for idle and inspected state
</script>

<main class={hover ? "hover" : ""}>
  <div class="eye" />
  <div class="eye" />
  <div class="mouth" />
</main>

<style>
  :root {
    --worm-face-features-color: #7a4018;
  }
  main {
    width: 100%;
    padding: 5px;
  }
  .eye {
    border-radius: 50%;
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: var(--worm-face-features-color);
    margin: 5px;
  }
  .mouth {
    display: block;
    width: 25%;
    height: 3px;
    background-color: var(--worm-face-features-color);
    margin: 5px 10px;
  }

  main.hover .eye {
    width: 10px;
    height: 10px;
    margin-left: 0px;
  }

  main.hover .mouth {
    border-radius: 50%;
    height: 15px;
  }
</style>
