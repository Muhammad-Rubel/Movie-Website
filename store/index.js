export const state = () => {
  return {
    imgConfig: null,
    popularMovies: [],
    nowPlayingMovies: [],
  }
}

export const mutations = {
  SET_IMAGE_CONFIG(state, val) {
    state.imgConfig = val
  },

  SET_POPULAR_MOVIES(state, val) {
    state.popularMovies = val
  },

  SET_NOW_PLAYING_MOVIES(state, val) {
    state.nowPlayingMovies = val
  },
}

export const actions = {
  async getImgConfig({ commit }) {
    try {
      console.log(process.env.API_URL)
      const res = await this.$axios.$get(
        `${process.env.API_URL}/imgConfig?api_key=${process.env.API_KEY}`
      )

      commit('SET_IMAGE_CONFIG', res)
    } catch (err) {
      console.log(err)
    }
  },

  async getPopularMovies({ commit }) {
    try {
      const res = await this.$axios.$get(
        `${process.env.API_URL}/movie/popular?api_key=${process.env.API_KEY}`
      )

      commit('SET_POPULAR_MOVIES', res.results)
    } catch (err) {
      console.log(err)
    }
  },

  async getNowPlayingMovies({ commit }) {
    try {
      const res = await this.$axios.$get(
        `${process.env.API_URL}/movie/now_playing?api_key=${process.env.API_KEY}`
      )

      commit('SET_NOW_PLAYING_MOVIES', res)
    } catch (err) {
      console.log(err)
    }
  },
}
