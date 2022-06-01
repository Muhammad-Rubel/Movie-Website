<template>
  <div class="rounded-lg">
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
        <button class="text-white hover:text-blue">
          <Icons name="dots"></Icons>
        </button>

        <div></div>
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
}
</script>

<style></style>
