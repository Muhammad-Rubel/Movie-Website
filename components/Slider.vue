<template>
  <section>
    <div class="mt-6 custom-shadow">
      <div class="">
        <Splide :options="options" @splide:visible="onMoved">
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
        type: 'slide',
        perPage: 7,
        // perMove: 1,
        gap: '1rem',
        pagination: false,
        padding: {
          left: '1rem',
          right: '5rem',
        },
        breakpoints: {
          1100: {
            perPage: 5,
            padding: {
              right: '6rem',
            },
          },
          900: {
            perPage: 4,
            padding: {
              right: '3rem',
            },
          },
          640: {
            perPage: 3,
          },
          450: {
            perPage: 2,
            padding: {
              right: '5rem',
            },
          },
        },
      },
    }
  },

  methods: {
    onMoved(splide, prev) {
      // console.log(splide, prev)
      if (prev.index + 1 === this.data.length) {
        this.options.padding.right = '0rem'
      }

      console.log(this.options.padding.right)
    },
  },
}
</script>

<style scoped>
.custom-shadow {
  box-shadow: -29px -1px 49px -24px rgba(255, 254, 254, 0.75) inset;
  -webkit-box-shadow: -29px -1px 49px -24px rgba(255, 254, 254, 0.75) inset;
  -moz-box-shadow: -29px -1px 49px -24px rgba(255, 254, 254, 0.75) inset;
}
</style>
