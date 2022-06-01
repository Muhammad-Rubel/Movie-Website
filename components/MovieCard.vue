<template>
  <div class="rounded-lg relative z-0 h-full">
    <!-- Image -->
    <div class="relative">
      <nuxt-link :to="`/movies/${data.id}`">
        <img
          :src="
            getImage(
              configuration.images.secure_base_url,
              configuration.images.poster_sizes[2],
              data.poster_path
            ) || ''
          "
          alt=""
          class="w-full rounded-lg"
        />
      </nuxt-link>

      <!-- rating -->
      <span
        class="absolute -bottom-5 left-3 bg-darkBlue text-white h-10 w-10 rounded-full flex justify-center items-center"
      >
        <span
          class="border-2 rounded-full h-9 w-9 bg-transparent flex justify-center items-center"
          :class="{
            'border-green': data.vote_average >= 7,
            'border-[#d2d531]': data.vote_average >= 4 && data.vote_average < 7,
            'border-red': data.vote_average < 4,
          }"
        >
          <span class="text-sm">
            {{ getVotePercentage(data.vote_average) || ''
            }}<sup class="text-[8px]">%</sup></span
          >
        </span>
      </span>

      <!-- options -->
      <div class="absolute top-4 right-2 opacity-60">
        <button
          class="text-white hover:text-blue"
          @click="showOptions = !showOptions"
        >
          <Icons name="dots"></Icons>
        </button>
      </div>
    </div>

    <!-- text -->
    <div class="mt-7">
      <nuxt-link
        :to="`/movies/${data.id}`"
        class="mt-1 text-black font-semibold"
      >
        <span v-if="data.title">{{ data.title || '' }}</span>
        <span v-if="data.name">{{ data.name || '' }}</span>
      </nuxt-link>

      <p class="text-sm">
        {{ $moment(data.release_date).format('MMM DD, YYYY') || '' }}
      </p>
    </div>

    <!-- options -->
    <div
      v-if="showOptions"
      v-on-clickaway="onClickAwayCard"
      class="absolute top-12 right-2 bg-white w-36 divide-y rounded z-10 overflow-hidden"
    >
      <button
        class="flex justify-start items-center space-x-2 px-6 py-2.5 w-full hover:bg-darkBlue hover:text-white custom-transition"
      >
        <icons name="list" class-list="w-3"></icons>
        <span class="text-gray-500 text-sm">Add to list</span>
      </button>
      <button
        class="flex justify-start items-center space-x-2 px-6 py-2.5 w-full hover:bg-darkBlue hover:text-white custom-transition"
      >
        <icons name="heart" class-list="w-3"></icons>
        <span class="text-gray-500 text-sm">Favourite</span>
      </button>
      <button
        class="flex justify-start items-center space-x-2 px-6 py-2.5 w-full hover:bg-darkBlue hover:text-white custom-transition"
      >
        <icons name="bookmark" class-list="w-3"></icons>
        <span class="text-gray-500 text-sm">Watchlist</span>
      </button>
      <button
        class="flex justify-start items-center space-x-2 px-6 py-2.5 w-full hover:bg-darkBlue hover:text-white custom-transition"
      >
        <icons name="star" class-list="w-3"></icons>
        <span class="text-gray-500 text-sm">Your rating</span>
      </button>
    </div>

    <!-- placeholder -->
    <div
      v-if="showOptions"
      class="absolute top-0 left-0 right-0 h-full z-0 bg-black bg-opacity-60 filter backdrop-blur-xl rounded-lg"
    ></div>
  </div>
</template>

<script>
import Icons from './Icons.vue'
import getImageMixin from '~/mixins/getImageMixin'

export default {
  components: { Icons },
  mixins: [getImageMixin],

  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      showOptions: false,
    }
  },

  computed: {
    configuration() {
      return this.$store.state.configuration
    },

    getVotePercentage() {
      return (vote) => {
        return vote * 10
      }
    },
  },

  methods: {
    onClickAwayCard() {
      this.showOptions = false
      console.log(this.showOptions)
    },
  },
}
</script>

<style></style>
