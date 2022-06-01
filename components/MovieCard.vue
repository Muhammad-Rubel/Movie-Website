<template>
  <div class="rounded-lg">
    <!-- Image -->
    <div>
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
    </div>

    <!-- text -->
    <div class="mt-2">
      <span>
        <span>{{ data.vote_average * 10 || '' }}%</span>
      </span>

      <nuxt-link
        :to="`/movies/${data.id}`"
        class="mt-1 text-primary line-clamp-2 text-lg"
      >
        <span v-if="data.title">{{ data.title || '' }}</span>
        <span v-if="data.name">{{ data.name || '' }}</span>
      </nuxt-link>

      <span>{{ data.release_date || '' }}</span>
    </div>
  </div>
</template>

<script>
import getImageMixin from '~/mixins/getImageMixin'

export default {
  mixins: [getImageMixin],

  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  computed: {
    configuration() {
      return this.$store.state.configuration
    },
  },
}
</script>

<style></style>
