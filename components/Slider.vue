<template>
  <section>
    <div class="mt-6">
      <div class="">
        <Splide :options="options">
          <SplideSlide v-for="(item, i) in data" :key="i">
            <movie-card :data="item"></movie-card>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script>
import MovieCard from './MovieCard.vue'
export default {
  components: { MovieCard },

  props: {
    data: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      options: {
        type: 'loop',
        perPage: 5,
        gap: '2rem',
        pagination: false,
        padding: {
          left: '1rem',
          right: '1rem',
        },
        breakpoints: {
          1024: {
            perPage: 4,
          },
          768: {
            perPage: 3,
          },
          640: {
            perPage: 2,
          },
          450: {
            perPage: 2,
            gap: '1rem',
          },
        },
      },
    }
  },
}
</script>

<style></style>
