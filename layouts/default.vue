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

  async fetch() {
    try {
      if (!this.imgConfig) {
        const imgConfigRes = await this.$axios.$get(
          `${this.apiUrl}/configuration?api_key=${this.apiKey}`
        )

        console.log(imgConfigRes.images)
        this.$store.commit('SET_IMAGE_CONFIG', imgConfigRes.images)
      }
      if (this.popularMovies.length === 0) {
        const popularMoviesRes = await this.$axios.$get(
          `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
        )

        console.log(popularMoviesRes)
        this.$store.commit('SET_POPULAR_MOVIES', popularMoviesRes.results)
      }
      if (this.nowPlayingMovies.length === 0) {
        const nowPlayingMoviesRes = await this.$axios.$get(
          `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`
        )

        console.log(nowPlayingMoviesRes)
        this.$store.commit(
          'SET_NOW_PLAYING_MOVIES',
          nowPlayingMoviesRes.results
        )
      }
    } catch (err) {
      console.log(err)
    }

    // if (!this.popularMovies.length) {
    //   this.$store.dispatch('getPopularMovies')
    // }

    // if (!this.nowPlayingMovies.length) {
    //   this.$store.dispatch('getNowPlayingMovies')
    // }

    // if (!this.imgConfig) {
    //   this.$store.dispatch('getImgConfig')
    // }
  },

  computed: {
    apiKey() {
      return this.$store.state.apiKey
    },

    apiUrl() {
      return this.$store.state.apiUrl
    },

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
