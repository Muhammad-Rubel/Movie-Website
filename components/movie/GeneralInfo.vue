<template>
  <section v-if="data && castNCrews">
    <div class="relative">
      <!-- backdrop Image -->
      <img
        :src="
          getImage(
            configuration &&
              configuration.images &&
              configuration.images.secure_base_url,
            configuration &&
              configuration.images &&
              configuration.images.backdrop_sizes[3],
            data && data.backdrop_path
          )
        "
        alt=""
        class="absolute top-0 left-0 w-full h-full object-cover ovject-center z-0 opacity-10"
      />

      <!-- main content -->
      <div class="relative z-10 width-1200">
        <div>
          <img
            :src="
              getImage(
                configuration &&
                  configuration.images &&
                  configuration.images.secure_base_url,
                configuration &&
                  configuration.images &&
                  configuration.images.poster_sizes[3],
                data && data.poster_path
              )
            "
            alt=""
            class=""
          />
        </div>

        <div>
          <h2>
            {{ data.original_title || '' }} ({{
              $moment(data.release_date).year()
            }})
          </h2>
          <span>R</span>
          <span>{{ $moment(data.release_date).format('DD/MM/YYYY') }}</span>
          <span>.</span>
          <span>
            <span v-for="(item, i) in data.genres" :key="i"
              >{{ item.name
              }}<span v-if="i !== data.genres.length - 1">, </span></span
            >
          </span>
          <span>.</span>
          <span>{{ getRuntime(data.runtime) }}</span>

          <!-- rating -->
          <span>
            <span
              class="bg-darkBlue text-white h-10 w-10 rounded-full flex justify-center items-center"
            >
              <span
                class="border-2 rounded-full h-9 w-9 bg-transparent flex justify-center items-center"
                :class="{
                  'border-green': data.vote_average >= 7,
                  'border-[#d2d531]':
                    data.vote_average >= 4 && data.vote_average < 7,
                  'border-red': data.vote_average < 4,
                }"
              >
                <span class="text-sm">
                  {{ getVotePercentage(data.vote_average) || ''
                  }}<sup class="text-[8px]">%</sup></span
                >
              </span>
            </span>

            <span
              >User <br />
              Score</span
            >
          </span>

          <h4>{{ data.tagline }}</h4>
          <div>
            <h5>Overview</h5>
            <p>{{ data.overview || '' }}</p>
          </div>

          <div>
            <div>
              <p
                v-for="item in getCrewByJob(castNCrews.crew, 'Director')"
                :key="item.id"
              >
                {{ item.name }}
              </p>
              <p>Director</p>
            </div>

            <div>
              <p
                v-for="item in getCrewByJob(castNCrews.crew, 'Writer')"
                :key="item.id"
              >
                {{ item.name }}
              </p>
              <p>Writer</p>
            </div>
          </div>
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
      type: Object,
      default: null,
    },
    castNCrews: {
      type: Object,
      default: null,
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

    getVotePercentage() {
      return (vote) => {
        return vote * 10
      }
    },

    getRuntime() {
      return (runtime) => {
        const h = Math.floor(runtime / 60)
        const m = runtime % 60
        return `${h}h ${m}m`
      }
    },

    getCrewByJob() {
      return (crews, title) => {
        const obj = crews.filter((crew) => crew.job === title)

        return obj
      }
    },
  },
}
</script>

<style></style>
