<script lang="ts">
  import { interval, Subject } from "rxjs";
  import { takeUntil, startWith } from "rxjs/operators";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { tweened } from "svelte/motion";
  export let x: number,
    y: number,
    size: number,
    speed: number,
    skyWidth: number;
  export const CLOUD_MOVEMENT_TICK_INTERVAL = 4000;
  let animatedY;
  let unsubscribeAnimation;

  function startAnimation() {
    //start animation of clouds by moving them in one direction

    animatedY = tweened(y, {
      duration: CLOUD_MOVEMENT_TICK_INTERVAL,
    });
    unsubscribeAnimation = animatedY.subscribe((newY) => (y = newY));
    interval(CLOUD_MOVEMENT_TICK_INTERVAL)
      .pipe(takeUntil(destroy), startWith(0))
      .subscribe(() => {
        y -= speed;
        if (y < -2 * size) {
          //stop the animation and register a new one
          console.log("Cloud out of bound", y, size);
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
