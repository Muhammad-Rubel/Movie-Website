<template>
  <section>
    <h2>Top Billed Cast</h2>

    <div>
      <div v-for="(item, i) in data" :key="i">
        <div>
          <img
            :src="
              getImage(
                configuration &&
                  configuration.images &&
                  configuration.images.secure_base_url,
                configuration &&
                  configuration.images &&
                  configuration.images.poster_sizes[1],
                item.profile_path
              )
            "
          />
          <p>{{ item.original_name }}</p>
          <p>{{ item.character }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getImageMixin from '~/mixins/getImageMixin.js'

export default {
  mixins: [getImageMixin],

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    apiKey() {
      return this.$store.state.apiKey
    },

    apiUrl() {
      return this.$store.state.apiUrl
    },

    configuration() {
      return this.$store.state.configuration
    },
  },
}
</script>

<style></style>
