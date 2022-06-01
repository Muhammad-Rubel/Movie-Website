<template>
  <section v-if="trendingMoviesToday && trendingMviesWeek" class="pt-6 pb-12">
    <div class="flex justify-start items-center space-x-8">
      <h2 class="heading-1">Trending</h2>

      <div class="border rounded-3xl border-darkBlue">
        <button
          class="tab-button"
          :class="activeTab === 'today' && 'bg-darkBlue text-white'"
          @click="activeTab = 'today'"
        >
          Today
        </button>

        <button
          class="tab-button"
          :class="activeTab === 'week' && 'bg-darkBlue text-white'"
          @click="activeTab = 'week'"
        >
          Week
        </button>
      </div>
    </div>

    <slider
      :data="
        activeTab === 'today'
          ? (trendingMoviesToday && trendingMoviesToday) || []
          : (trendingMviesWeek && trendingMviesWeek) || []
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
      activeTab: 'today', // today or week
    }
  },

  computed: {
    trendingMoviesToday() {
      return this.$store.state.trendingMoviesToday
    },

    trendingMviesWeek() {
      return this.$store.state.trendingMviesWeek
    },
  },
}
</script>

<style></style>
