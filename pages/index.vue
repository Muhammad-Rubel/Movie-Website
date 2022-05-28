<template>
  <div class="p-4">
    <h3>Most Popular Movies</h3>

    <!-- most popular movies -->
    <div v-if="popularMovies.length" class="space-y-4 mt-6">
      <div v-for="(item, i) in popularMovies" :key="i">
        <div>
          <img :src="item.image || ''" alt="" />
        </div>

        <div>
          <h4>{{ item.title || '' }}</h4>
          <p>{{ item.overview || '' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {}
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
  //       `/movie/popular?api_key=${process.env.API_KEY}`
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

  mounted() {
    console.log('Test', this.mostPopularMovies)
    console.log(process.env.API_KEY)
  },
}
</script>
