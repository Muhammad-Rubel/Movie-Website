<template>
  <div class="p-4 md:pt-10 width-1200">
    <div class="space-y-6 md:space-y-8">
      <!-- <slider :data="nowPlayingMovies || []" title="In Theaters"></slider> -->
      <!-- <slider :data="popularMovies || []" title="Popular Movies"></slider> -->
      <!-- <slider :data="upcomingMovies || []" title="Upcoming Movies"></slider> -->
      <!-- <slider :data="latestTvShows || []" title="Latest Tv Shows"></slider> -->
    </div>
  </div>
</template>

<script>
// import Slider from '../components/Slider.vue'
export default {
  // components: { Slider },

  async asyncData({ store }) {
    if (store.state.popularMovies.length === 0) {
      await store.dispatch('getPopularMovies')
    }

    if (store.state.nowPlayingMovies.length === 0) {
      await store.dispatch('getNowPlayingMovies')
    }

    if (store.state.latestMovieTrailers.length === 0) {
      await store.dispatch('getLatestMovieTrailers')
    }

    if (store.state.latestTvShowTrailers.length === 0) {
      await store.dispatch('getLatestTvShowTrailers')
    }

    if (store.state.upcomingMovies.length === 0) {
      await store.dispatch('getUpcomingMovies')
    }
  },

  data() {
    return {}
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

    upcomingMovies() {
      return this.$store.state.upcomingMovies
    },

    latestTvShows() {
      return this.$store.state.latestTvShows
    },

    getImage() {
      return (baseUrl, fileSize, filePath) => {
        return `${baseUrl}${fileSize}${filePath}`
      }
    },
  },

  mounted() {
    console.log('Test', this.configuration)
  },
}
</script>
