<template>
  <div>
    <!-- Image -->
    <div>
      <img
        :src="
          getImage(
            imgConfig.secure_base_url,
            imgConfig.poster_sizes[2],
            data.poster_path
          ) || ''
        "
        alt=""
        class="w-full"
      />
    </div>

    <!-- text -->
    <div class="mt-2">
      <div class="text-xs flex justify-between items-center">
        <span>Rating: {{ data.vote_average || '' }}</span>
        <span>{{ data.release_date || '' }}</span>
      </div>
      <h4 class="mt-1 text-primary">{{ data.title || '' }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  computed: {
    imgConfig() {
      return this.$store.state.imgConfig
    },

    getImage() {
      return (baseUrl, fileSize, filePath) => {
        return `${baseUrl}${fileSize}${filePath}`
      }
    },
  },
}
</script>

<style></style>
