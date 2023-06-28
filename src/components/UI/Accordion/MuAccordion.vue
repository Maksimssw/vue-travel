<template>
  <div class="accordion">
    <div class="accordion__content">
      <span>Сортировка</span>

      <img src="" alt="">
    </div>

    <div class="accordion__list">
      <label
        class="accordion__item"
        v-for="item in accordionItem"
        :key="item"
      >
        <input type="radio" class="accordion__radio"/>
        <div class="accordion__circle"></div>
        <span class="accordion__text">{{ item }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import './accordion.css'

export default {
  props: {
    accordionText: {
      type: String,
      required: true
    },
    accordionItem: {
      type: Array,
      required: true
    }
  }
}
</script>