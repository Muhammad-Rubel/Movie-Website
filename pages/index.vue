<template>
  <div class="p-4 pt-10 overflow-hidden">
    <h3 class="heading-1">Most Popular Movies</h3>

    <!-- most popular movies -->
    <div class="mt-6">
      <div class="grid grid-cols-5 gap-8">
        <div v-for="(item, i) in nowPlayingMovies" :key="i">
          <movie-card :data="item"></movie-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'

export default {
  components: { MovieCard },

  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },

  // async fetch() {
  //   // const apiKey = 'k_5os0ixxf' imdb
  //   // const apiKey = 'e2fd338f1c16bc07f7e1e3b885357d42'
  //   // const baseUrl = 'https://api.themoviedb.org/3'

  //   // const url = 'https://api.themoviedb.org/3/movie?api_key=e2fd338f1c16bc07f7e1e3b885357d42'

  //   try {
  //     // imdb
  //     // const resPopular = await this.$axios.$get(
  //     //   `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
  //     // )
  //     const resPopular = await this.$axios.$get(
  //       `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
  //     )

  //     console.log(resPopular)

  //     if (!resPopular.errorMessage) {
  //       // this.mostPopularMovies = resPopular.results
  //       this.$store.commit('setPopularMovies', resPopular.results)
  //     } else {
  //       // eslint-disable-next-line unicorn/throw-new-error
  //       throw Error(resPopular.errorMessage)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },

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

    getImage() {
      return (baseUrl, fileSize, filePath) => {
        return `${baseUrl}${fileSize}${filePath}`
      }
    },
  },

  mounted() {
    console.log(
      'Test',
      this.imgConfig,
      this.popularMovies,
      this.nowPlayingMovies
    )
  },
}
</script>
