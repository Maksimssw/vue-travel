<template>
  <MainForm />
  <div class="main">

  </div>
</template>

<script>
import MainForm from "@/components/Main/MainForm/MainForm.vue";

export default {
  components: {MainForm}
}
</script>

<style>
.main {
  grid-template-columns: 300px 1fr;
}
</style>