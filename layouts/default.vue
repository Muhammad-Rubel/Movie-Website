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

  fetch() {
    if (!this.imgConfig) {
      this.$store.dispatch('getImgConfig')
    }
    if (!this.popularMovies.length) {
      this.$store.dispatch('getPopularMovies')
    }
    if (!this.nowPlayingMovies.length) {
      this.$store.dispatch('getNowPlayingMovies')
    }
  },

  computed: {
    imgConfig() {
      return this.$store.state.imgConfig
    },

    popularMovies() {
      return this.$store.state.popularMovies
    },

    nowPlayingMovies() {
      return this.$store.state.nowPlayingMovies
    },
  },
}
</script>

<style></style>
