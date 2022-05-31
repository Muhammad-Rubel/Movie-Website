<template>
  <section>
    <div class="flex justify-start items-center space-x-8">
      <h2 class="heading-1">What's Popular</h2>

      <div class="border rounded-3xl border-primary">
        <button
          class="tab-button"
          :class="activeTab === 'tv' && 'bg-primary'"
          @click="activeTab = 'tv'"
        >
          On Tv
        </button>

        <button
          class="tab-button"
          :class="activeTab === 'movie' && 'bg-primary'"
          @click="activeTab = 'movie'"
        >
          On Theaters
        </button>
      </div>
    </div>

    <slider
      :data="
        activeTab === 'movie'
          ? (popularTvShows && popularTvShows) || []
          : (popularMovies && popularMovies) || []
      "
    ></slider>
  </section>
</template>

<script>
import Slider from '../Slider.vue'

export default {
  components: { Slider },
  data() {
    return {
      activeTab: 'tv', // tv or movie
    }
  },

  computed: {
    popularMovies() {
      return this.$store.state.popularMovies
    },

    popularTvShows() {
      return this.$store.state.popularTvShows
    },
  },
}
</script>

<style></style>
