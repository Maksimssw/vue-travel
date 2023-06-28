<template>
  <section class="hero">
    <MainHero />
    <div class="grid-row justify-content-center">
      <MySpinner v-if="loading"/>
    </div>
    <form @submit.prevent class="form grid-row">
      <div class="form__content grid-row">
        <MyInput
            :isValid="data.from.isValid"
            @onFrom="onFromHandler"
            class="form__item"
            type="text"
            text="From">
          Откуда
        </MyInput>

        <MyInput
            :isValid="data.to.isValid"
            @onTo="onToHandler"
            type="text"
            text="To">
          Куда
        </MyInput>

        <MyInput
            :isValid="data.date.isValid"
            @onWhen="onWhenHandler"
            type="date"
            text="When">
          Дата
        </MyInput>

        <MainSelect @onValueSelect="valueSelect" class="form__item" />
      </div>

      <MyButton
          @click="changeCode"
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
    const data = ref({
      from: {name: '', isValid: true},
      to: {name: '', isValid: true},
      date: {name: '', isValid: true},
      tripClass: 0
    })
    const loading = ref(false)

    const valueSelect = (key) => data.value.tripClass = key
    const onFromHandler = (text) => {
      data.value.from.name = text
      data.value.from.isValid = true
    }
    const onToHandler = (text) => {
      data.value.to.name = text
      data.value.to.isValid = true
    }
    const onWhenHandler = (text) => {
      data.value.date.name = text
      data.value.date.isValid = true
    }

    const changeCode = () => {
      const {from, to, date, tripClass} = data.value

      if (new Date(date.name) < new Date() || date.name === '') date.isValid = false

      loading.value = true
      server()
        .getCodeCity(from.name, to.name)
        .then(data => {
          if(Object.entries(data).length !== 0) {
            changeTicket(
                data.origin.iata,
                data.destination.iata,
                date.name,
                tripClass
            )
          } else {
            from.isValid = false
            to.isValid = false
            loading.value = false
          }
        })
      }

    const changeTicket = (fromCode, toCode, date, tripClass) => {
      server()
          .getTickets(fromCode, toCode, date, tripClass)
          .then(data => {
            console.log(data);
            loading.value = false
          })
    }

    return {
      data,
      loading,
      valueSelect,
      onFromHandler,
      onToHandler,
      onWhenHandler,
      changeCode
    }
  }
}
</script>