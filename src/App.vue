<template>
  <MyHeader />
  <main>
    <router-view>
      <MainPage />
    </router-view>
  </main>
</template>

<script>
import './assets/styles/global.css'
import MainPage from "@/pages/MainPage.vue";

export default {
  name: 'App',
  components: {MainPage},
}
</script>