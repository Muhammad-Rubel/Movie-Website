<template>
  <div>
    <Header></Header>

    <main class="pt-16 width-1200">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: { Header },
}
</script>

<style></style>
