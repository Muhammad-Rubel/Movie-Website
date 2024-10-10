<template>
  <div>
    <general-info :data="details" :cast-n-crews="castNCrews"></general-info>

    <cast :data="castNCrews.cast || []"></cast>
  </div>
</template>

<script>
import Cast from '../../components/movie/Cast.vue'
import GeneralInfo from '../../components/movie/GeneralInfo.vue'
export default {
  components: { GeneralInfo, Cast },

  data() {
    return {
      details: {},
      castNCrews: {},
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

      this.details = details
      this.castNCrews = castNCrews

      console.log('details', this.details)
      console.log('castNCrews', this.castNCrews)
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
