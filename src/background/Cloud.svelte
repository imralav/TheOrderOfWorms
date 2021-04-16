<script lang="ts">
  import { interval, Subject } from "rxjs";
  import { takeUntil, startWith } from "rxjs/operators";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { tweened } from "svelte/motion";
  export let x: number,
    y: number,
    size: number,
    speed: number = 100,
    skyWidth: number,
    skyHeight: number,
    opacity: number = 1;
  export const CLOUD_MOVEMENT_TICK_INTERVAL = 4000;
  $: height = size / 2;
  $: top = (skyHeight - height) * x;
  let animatedY;
  let unsubscribeAnimation;

  function startAnimation() {
    animatedY = tweened(y, {
      duration: CLOUD_MOVEMENT_TICK_INTERVAL,
    });
    unsubscribeAnimation = animatedY.subscribe((newY) => (y = newY));
    interval(CLOUD_MOVEMENT_TICK_INTERVAL)
      .pipe(takeUntil(destroy), startWith(0))
      .subscribe(() => {
        y -= speed;
        if (y < -2 * size) {
          dispatcher("cloud-left-the-sky");
          y = skyWidth;
          destroy.next();
          startAnimation();
        }
        animatedY.set(y);
      });
  }

  const dispatcher = createEventDispatcher();

  const destroy = new Subject();
  destroy.subscribe(() => unsubscribeAnimation());

  onMount(() => {
    startAnimation();
  });

  onDestroy(() => {
    destroy.next();
    destroy.complete();
  });
</script>

<div
  style="top: {top}px; left: {$animatedY}px; width: {size}px; height: {height}px; opacity: {opacity};"
/>

<style>
  div {
    box-sizing: border-box;
    position: absolute;
    background-color: #fff;
    border-radius: 15px;
    z-index: -1;
  }
</style>
