<template>
  <label tabindex="1" class="label">
    <span class="label__text">
      <slot></slot>
    </span>

    <input
        :placeholder="text"
        :type="type"
        @input="onInput"
        class="label__input"
    />
  </label>
</template>

<script>
import './input.css'

export default {
  name: 'MyInput',
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    type: {
      type: [String],
      required: true
    },

  },

  setup(props, contex) {
    const onInput = (event) => {
      contex.emit(`on${props.text}`, event.target.value)
    }

    return {onInput}
  }
}
</script>
