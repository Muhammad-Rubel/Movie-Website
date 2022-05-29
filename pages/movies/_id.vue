<template>
  <div>
    <div class="relative">
      <img
        :src="
          getImage(
            imgConfig.secure_base_url,
            imgConfig.backdrop_sizes[3],
            data && data.backdrop_path
          )
        "
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover ovject-center z-0 opacity-10"
      />

      <!-- text -->
      <div class="relative z-10 width-1200">
        <img
          :src="
            getImage(
              imgConfig.secure_base_url,
              imgConfig.poster_sizes[3],
              data.poster_path
            )
          "
          alt=""
          class=""
        />

        <h2>{{ data.original_title || '' }}</h2>
        <p>{{ data.overview || '' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    }
  },

  async fetch() {
    const id = this.$route.params.id

    try {
      const res = await this.$axios.$get(
        `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
      )

      console.log(res)
      this.data = res
    } catch (err) {
      console.log(err)
    }
  },

  computed: {
    getImage() {
      return (baseUrl, fileSize, filePath) => {
        return `${baseUrl}${fileSize}${filePath}`
      }
    },

    apiKey() {
      return this.$store.state.apiKey
    },

    apiUrl() {
      return this.$store.state.apiUrl
    },

    imgConfig() {
      return this.$store.state.imgConfig
    },
  },

  mounted() {
    console.log(this.$route.params.id)
  },
}
</script>

<style></style>
