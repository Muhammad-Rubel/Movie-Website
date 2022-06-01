<template>
  <section class="relative overflow-hidden py-6">
    <!-- image -->
    <div class="absolute top-0 left-0 right-0 opacity-20 z-0">
      <img
        :src="
          getImage(
            configuration &&
              configuration.images &&
              configuration.images.secure_base_url,
            configuration &&
              configuration.images &&
              configuration.images.backdrop_sizes[3],
            getBackdropImage
          )
        "
        alt=""
      />
    </div>

    <!-- main content -->
    <div class="relative z-10 py-6 px-4">
      <!-- title and buttons -->
      <div class="flex justify-start items-center space-x-8">
        <h2 class="heading-1">Latest Trailer</h2>

        <div class="border rounded-3xl border-primary">
          <button
            class="tab-button"
            :class="activeTab === 'tv' && 'bg-primary'"
            @click="activeTab = 'tv'"
          >
            On Tv
          </button>

          <button
            class="tab-button"
            :class="activeTab === 'movie' && 'bg-primary'"
            @click="activeTab = 'movie'"
          >
            On Theaters
          </button>
        </div>
      </div>

      <div>
        <Splide :options="options">
          <splide-slide v-for="(item, i) in getCurrentData" :key="i">
            <a href="" class="py-6 block">
              <div
                class="relative w-full h-44 overflow-hidden rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <img
                  :src="
                    getImage(
                      configuration &&
                        configuration.images &&
                        configuration.images.secure_base_url,
                      configuration &&
                        configuration.images &&
                        configuration.images.poster_sizes[3],
                      item.poster_path
                    )
                  "
                  alt=""
                  class="w-full h-full object-cover object-center"
                />

                <!-- play btn -->
                <div
                  class="absolute top-0 left-0 h-full w-full flex justify-center items-center"
                >
                  <icons name="play" class-list="h-10 w-10 text-white"></icons>
                </div>
              </div>

              <div class="mt-2">
                <div class="text-white text-center">
                  <h3 class="text-xl font-bold">
                    <span v-if="item.title">{{ item.title }}</span>
                    <span v-if="item.name">{{ item.name }}</span>
                  </h3>
                </div>
              </div>
            </a>
          </splide-slide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script>
import Icons from '../Icons.vue'
import getImageMixin from '~/mixins/getImageMixin'

export default {
  components: { Icons },

  mixins: [getImageMixin],

  data() {
    return {
      activeTab: 'tv', // tv or movie
      options: {
        type: 'loop',
        perPage: 4,
        gap: '1.5rem',
        pagination: false,
        breakpoints: {
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          640: {
            perPage: 2,
          },
          450: {
            perPage: 1,
            gap: '1rem',
          },
        },
      },
    }
  },

  computed: {
    configuration() {
      return this.$store.state.configuration
    },

    latestTvShows() {
      return this.$store.state.popularTvShows
    },

    upcomingMovies() {
      return this.$store.state.upcomingMovies
    },

    getBackdropImage() {
      if (this.activeTab === 'movie') {
        return this.upcomingMovies[0].backdrop_path
      } else {
        return this.latestTvShows[0].backdrop_path
      }

      // return ''
    },

    getCurrentData() {
      if (this.activeTab === 'movie') {
        return this.upcomingMovies
      } else {
        return this.latestTvShows
      }
    },
  },

  mounted() {
    console.log(this.getCurrentData)
  },
}
</script>

<style></style>
