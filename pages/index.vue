<template>
  <div>Hello World!</div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      movie: null,
    }
  },

  async fetch() {
    const apiKey = 'k_5os0ixxf'

    try {
      const res = await this.$axios.$get(
        `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
      )

      if (!res.errorMessage) {
        this.movie = res.items
      } else {
        // eslint-disable-next-line unicorn/throw-new-error
        throw Error(res.errorMessage)
      }
    } catch (err) {
      console.log(err)
    }
  },

  mounted() {
    console.log('Test', this.movie)
  },
}
</script>
