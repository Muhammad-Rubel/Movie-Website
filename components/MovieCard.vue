<template>
  <div>
    <nuxt-link :to="`/movies/${data.id}`">
      <!-- Image -->
      <div>
        <img
          :src="
            getImage(
              configuration.images.secure_base_url,
              configuration.images.poster_sizes[2],
              data.poster_path
            ) || ''
          "
          alt=""
          class="w-full"
        />
      </div>

      <!-- text -->
      <div class="mt-2">
        <div class="text-sm flex justify-between items-center">
          <span>Rating: {{ data.vote_average || '' }}</span>
          <span>{{ data.release_date || '' }}</span>
        </div>
        <h4 class="mt-1 text-primary line-clamp-2 text-lg">
          {{ data.title || '' }}
        </h4>
      </div>
    </nuxt-link>
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
