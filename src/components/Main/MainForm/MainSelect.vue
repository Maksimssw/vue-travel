<template>
  <div @click.stop="closeList" class="select" :class="{'select_active': isList}">
    <span @click.stop @click="openList" class="select__text">{{ option.name }}</span>

    <ul @click.stop v-if="isList" class="select__list">
      <li @click="getOption" class="select__item" :key="0">Эконом</li>
      <li @click="getOption" class="select__item" :key="1">Комфорт</li>
      <li @click="getOption" class="select__item" :key="2">Бизнес</li>
      <li @click="getOption" class="select__item" :key="3">Первый класс</li>
    </ul>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup(_, {emit}) {
    const option = ref({
      name: 'Эконом',
      id: 0
    })
    const isList = ref(false)

    const getOption = (event) => {
      const key = event.target.__vnode.key

      option.value.name = event.target.textContent
      option.value.id = key

      emit('onValueSelect', key)
      isList.value = false
    }

    const openList = () => isList.value = true
    const closeList = () => isList.value = false

    return {option, isList, getOption, openList, closeList}
  }
}
</script>

<style scoped>
  .select {
    position: relative;
    display: grid;
    align-items: center;
    padding: 9px 20px;
    min-width: 147px;
    height: 100%;
    color: var(--color-white);
    background: var(--color-grey100);
  }

  .select_active {
    box-shadow: 0 0 2px var(--color-orange100);
    outline: solid var(--color-orange100);
  }

  .select__text {
    cursor: pointer;
  }

  .select__list {
    position: absolute;
    right: 0;
    bottom: -172px;
    display: grid;
    grid-row-gap: 12px;
    padding: 12px;
    width: 220px;
    background: var(--color-dark50);
    border-radius: var(--border-rd-lg);
  }

  .select__item {
    padding: 6px 0;
    cursor: pointer;
  }
</style>