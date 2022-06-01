<template>
  <div>
    <Header></Header>

    <main class="pt-16">
      <Nuxt />
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

export default {
  components: { Header, Footer },

  // async fetch() {
  //   try {
  //     if (!this.imgConfig) {
  //       const imgConfigRes = await this.$axios.$get(
  //         `${this.apiUrl}/configuration?api_key=${this.apiKey}`
  //       )

  //       console.log(imgConfigRes.images)
  //       this.$store.commit('SET_IMAGE_CONFIG', imgConfigRes.images)
  //     }

  //     if (this.popularMovies.length === 0) {
  //       const popularMoviesRes = await this.$axios.$get(
  //         `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
  //       )

  //       // console.log(popularMoviesRes)
  //       this.$store.commit('SET_POPULAR_MOVIES', popularMoviesRes.results)
  //     }

  //     if (this.nowPlayingMovies.length === 0) {
  //       const nowPlayingMoviesRes = await this.$axios.$get(
  //         `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`
  //       )

  //       // console.log(nowPlayingMoviesRes)
  //       this.$store.commit(
  //         'SET_NOW_PLAYING_MOVIES',
  //         nowPlayingMoviesRes.results
  //       )
  //     }

  //     if (this.upcomingMovies.length === 0) {
  //       const upcomingMoviesRes = await this.$axios.$get(
  //         `${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`
  //       )

  //       // console.log(upcomingMoviesRes)
  //       this.$store.commit('SET_UPCOMING_MOVIES', upcomingMoviesRes.results)
  //     }

  //     if (this.latestTvShows.length === 0) {
  //       const latestTvShowsRes = await this.$axios.$get(
  //         `${this.apiUrl}/tv/on_the_air?api_key=${this.apiKey}`
  //       )

  //       // console.log(latestTvShowsRes)
  //       this.$store.commit('SET_LATEST_TV_SHOWS', latestTvShowsRes.results)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },

  async fetch() {
    try {
      if (!this.configuration) {
        await this.$store.dispatch('getConfiguration')
      }
    } catch (err) {
      console.log(err)
    }
  },

  computed: {
    apiKey() {
      return this.$store.state.apiKey
    },

    apiUrl() {
      return this.$store.state.apiUrl
    },

    configuration() {
      return this.$store.state.configuration
    },

    popularMovies() {
      return this.$store.state.popularMovies
    },

    nowPlayingMovies() {
      return this.$store.state.nowPlayingMovies
    },

    latestTvShows() {
      return this.$store.state.latestTvShows
    },

    upcomingMovies() {
      return this.$store.state.upcomingMovies
    },
  },
}
</script>

<style></style>
