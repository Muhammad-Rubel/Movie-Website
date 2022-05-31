<template>
  <div class="p-4 md:pt-10 width-1200">
    <div class="space-y-6 md:space-y-8">
      <whats-popular></whats-popular>
      <latest-trailers></latest-trailers>
      <trending></trending>
    </div>
  </div>
</template>

<script>
import LatestTrailers from '../components/homepage/LatestTrailers.vue'
import Trending from '../components/homepage/Trending.vue'
import WhatsPopular from '../components/homepage/WhatsPopular.vue'

export default {
  components: { WhatsPopular, LatestTrailers, Trending },

  async asyncData({ store }) {
    if (store.state.popularMovies.length === 0) {
      await store.dispatch('getPopularMovies')
    }

    if (store.state.popularTvShows.length === 0) {
      await store.dispatch('getPopularTvShows')
    }

    if (store.state.nowPlayingMovies.length === 0) {
      await store.dispatch('getNowPlayingMovies')
    }

    if (store.state.upcomingMovies.length === 0) {
      await store.dispatch('getUpcomingMovies')
    }

    if (!store.state.latestTvShows) {
      await store.dispatch('getLatestTvShows')
    }

    if (store.state.trendingMoviesToday.length === 0) {
      await store.dispatch('getTrendingMoviesToday')
    }

    if (store.state.trendingMviesWeek.length === 0) {
      await store.dispatch('getTrendingMoviesWeek')
    }

    if (store.state.trendingTvShowsToday.length === 0) {
      await store.dispatch('getTrendingTvShowsToday')
    }
    if (store.state.trendingTvShowsWeek.length === 0) {
      await store.dispatch('getTrendingTvShowsWeek')
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

    popularTvShows() {
      return this.$store.state.popularTvShows
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

    trendingMoviesToday() {
      return this.$store.state.trendingMoviesToday
    },

    trendingMviesWeek() {
      return this.$store.state.trendingMviesWeek
    },

    trendingTvShowsToday() {
      return this.$store.state.trendingTvShowsToday
    },

    trendingTvShowsWeek() {
      return this.$store.state.trendingTvShowsWeek
    },
  },

  mounted() {
    console.log('Test', this.configuration)
  },
}
</script>
