<template>
  <div>
    <general-info :data="details" :cast-n-crews="castNCrews"></general-info>
  </div>
</template>

<script>
import GeneralInfo from '../../components/movie/GeneralInfo.vue'
export default {
  components: { GeneralInfo },
  data() {
    return {
      details: null,
      castNCrews: null,
    }
  },

  async fetch() {
    const id = this.$route.params.id

    try {
      const details = await this.$axios.$get(
        `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
      )

      const castNCrews = await this.$axios.$get(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      )

      console.log(details, castNCrews)
      this.details = details
      this.castNCrews = castNCrews
    } catch (err) {
      console.log(err)
    }
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

  mounted() {
    console.log(this.$route.params.id)
  },
}
</script>

<style></style>
