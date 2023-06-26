<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style>
  .button {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    line-height: 20px;
    font-size: 18px;
    font-weight: 700;
    color: var(--color-white);
    border-radius: var(--border-rd-lg);
  }
</style>