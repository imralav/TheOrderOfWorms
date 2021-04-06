<script lang="ts">
  import { interval, Subject } from "rxjs";
  import { takeUntil, startWith } from "rxjs/operators";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { tweened } from "svelte/motion";
  export let x: number, y: number, size: number, skyWidth: number;
  export const CLOUD_MOVEMENT_TICK_INTERVAL = 4000;
  export const CLOUD_MOVEMENT_SPEED_PER_TICK = 100;

  const dispatcher = createEventDispatcher();

  const destroy = new Subject();

  let animatedY = tweened(y, {
    duration: CLOUD_MOVEMENT_TICK_INTERVAL,
  });
  animatedY.subscribe((newY) => (y = newY));

  onMount(() => {
    //start animation of clouds by moving them in one direction
    interval(CLOUD_MOVEMENT_TICK_INTERVAL)
      .pipe(takeUntil(destroy), startWith(0))
      .subscribe(() => {
        y -= CLOUD_MOVEMENT_SPEED_PER_TICK;
        if (y < -2 * size) {
          console.log("Cloud out of bound", y, size);
          dispatcher("cloud-left-the-sky");
          y = skyWidth;
        }
        animatedY.set(y);
      });
  });

  onDestroy(() => {
    destroy.next();
    destroy.complete();
  });
</script>

<div
  style="top: {x}px; left: {$animatedY}px; width: {size}px; height: {size /
    2}px"
/>

<style>
  div {
    box-sizing: border-box;
    position: absolute;
    background-color: #fff;
    border-radius: 15px;
  }
</style>
