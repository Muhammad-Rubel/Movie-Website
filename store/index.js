export const state = () => {
  return {
    apiKey: 'e2fd338f1c16bc07f7e1e3b885357d42',
    apiUrl: 'https://api.themoviedb.org/3',
    imgConfig: null,
    popularMovies: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
    latestTvShows: [],
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

  SET_UPCOMING_MOVIES(state, val) {
    state.upcomingMovies = val
  },

  SET_LATEST_TV_SHOWS(state, val) {
    state.latestTvShows = val
  },
}

export const actions = {
  async getImgConfig({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/configuration?api_key=${state.apiKey}`
      )

      commit('SET_IMAGE_CONFIG', res)
    } catch (err) {
      console.log(err)
    }
  },

  async getPopularMovies({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/movie/popular?api_key=${state.apiKey}`
      )

      commit('SET_POPULAR_MOVIES', res.results)
    } catch (err) {
      console.log(err)
    }
  },

  async getNowPlayingMovies({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/movie/now_playing?api_key=${state.apiKey}`
      )

      commit('SET_NOW_PLAYING_MOVIES', res)
    } catch (err) {
      console.log(err)
    }
  },

  async getUpcomingMovies({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/movie/upcoming?api_key=${state.apiKey}`
      )

      commit('SET_UPCOMING_MOVIES', res)
    } catch (err) {
      console.log(err)
    }
  },
}
