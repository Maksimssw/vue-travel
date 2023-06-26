<template>
  <label
      class="label"
      :class="{'label_error': !isValid}"
  >
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
    isValid: {
      type: Boolean
    },
    text: {
      type: [String, Number],
      required: true
    },
    type: {
      type: [String],
      required: true
    },

  },

  setup(props, {emit}) {
    const onInput = (event) => emit(`on${props.text}`, event.target.value)
    return {onInput}
  }
}
</script>
