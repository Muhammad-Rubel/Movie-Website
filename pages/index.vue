<template>
  <div class="p-4 md:pt-10 width-1200">
    <div class="space-y-6 md:space-y-8">
      <slider :data="nowPlayingMovies || []" title="In Theaters"></slider>
      <!-- <slider :data="popularMovies || []" title="Popular Movies"></slider> -->
      <slider :data="upcomingMovies || []" title="Upcoming Movies"></slider>
      <slider :data="latestTvShows || []" title="Latest Tv Shows"></slider>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'
export default {
  components: { Slider },

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
    console.log('Test', this.imgConfig, this.popularMovies, this.latestTvShows)
  },
}
</script>
