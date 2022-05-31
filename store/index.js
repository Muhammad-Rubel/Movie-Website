export const state = () => {
  return {
    apiKey: 'e2fd338f1c16bc07f7e1e3b885357d42',
    apiUrl: 'https://api.themoviedb.org/3',
    configuration: null,
    popularMovies: [],
    popularTvShows: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
    latestTvShows: [],
  }
}

export const mutations = {
  SET_CONFIGURATION(state, val) {
    state.configuration = val
  },

  SET_POPULAR_MOVIES(state, val) {
    state.popularMovies = val
  },

  SET_POPULAR_TV_SHOWS(state, val) {
    state.popularTvShows = val
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
  async getConfiguration({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/configuration?api_key=${state.apiKey}`
      )

      commit('SET_CONFIGURATION', res)
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
      console.log(state.popularMovies)
    } catch (err) {
      console.log(err)
    }
  },

  async getPopularTvShows({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/tv/popular?api_key=${state.apiKey}`
      )

      commit('SET_POPULAR_TV_SHOWS', res.results)
    } catch (err) {
      console.log(err)
    }
  },

  async getNowPlayingMovies({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/movie/now_playing?api_key=${state.apiKey}`
      )

      commit('SET_NOW_PLAYING_MOVIES', res.results)
    } catch (err) {
      console.log(err)
    }
  },

  async getUpcomingMovies({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/movie/upcoming?api_key=${state.apiKey}`
      )

      commit('SET_UPCOMING_MOVIES', res.results)
    } catch (err) {
      console.log(err)
    }
  },

  async getLatestTvShows({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/tv/latest?api_key=${state.apiKey}`
      )

      commit('SET_LATEST_TV_SHOWS', res.results)
    } catch (err) {
      console.log(err)
    }
  },
}
