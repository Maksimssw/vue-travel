<template>
  <section class="hero">
    <MainHero />
    <div v-if="isValid" class="hero-error">
      <h2>Произошла ошибка!</h2>
      <p>Возможно вы ввели некорректные данные</p>
    </div>
    <form @submit.prevent class="form grid-row">
      <div class="form__content grid-row">
        <MyInput
            @onFrom="onFromHandler"
            class="form__item"
            type="text"
            text="From">
          Откуда
        </MyInput>

        <MyInput
            @onTo="onToHandler"
            type="text"
            text="To">
          Куда
        </MyInput>

        <MyInput
            @onWhen="onWhenHandler"
            type="date"
            text="When">
          Дата
        </MyInput>

        <MainSelect @onValueSelect="valueSelect" class="form__item" />
      </div>

      <MyButton
          @click="changeTicket"
          class="form__button">
        Найти билеты
      </MyButton>
    </form>
  </section>
</template>

<script>
import './main-form.css'
import MainSelect from "@/components/Main/MainForm/MainSelect.vue";
import MainHero from "@/components/Main/MainForm/MainHero.vue";
import {ref} from "vue";
import {server} from "@/api/server";

export default {
  components: {MainHero, MainSelect},
  setup() {
    const isValid = ref(false)
    const data = ref({
      from: '',
      to: '',
      date: '',
      class: 0
    })

    const valueSelect = (key) => data.value.class = key
    const onFromHandler = (text) => data.value.from = text
    const onToHandler = (text) => data.value.to = text
    const onWhenHandler = (text) => data.value.date = text

    const changeTicket = () => {
      isValid.value = true
      server()
          .getCodeCity(data.value.from, data.value.to)
          .then((data) => {
            isValid.value  = Object.entries(data).length === 0
          })
          .catch(isValid.value = true)
    }

    return {
      data,
      isValid,
      valueSelect,
      onFromHandler,
      onToHandler,
      onWhenHandler,
      changeTicket
    }
  }
}
</script>