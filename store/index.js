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
    trendingMoviesToday: [],
    trendingMviesWeek: [],
    trendingTvShowsToday: [],
    trendingTvShowsWeek: [],
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

  SET_TRENDING_MOVIES_TODAY(state, val) {
    state.trendingMoviesToday = val
  },

  SET_TRENDING_MOVIES_WEEK(state, val) {
    state.trendingMviesWeek = val
  },

  SET_TRENDING_TV_SHOWS_TODAY(state, val) {
    state.trendingTvShowsToday = val
  },

  SET_TRENDING_TV_SHOWS_WEEK(state, val) {
    state.trendingTvShowsWeek = val
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

  async getTrendingMoviesToday({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/trending/movie/day?api_key=${state.apiKey}`
      )

      commit('SET_TRENDING_MOVIES_TODAY', res.results)
    } catch (err) {
      console.log(err)
    }
  },

  async getTrendingMoviesWeek({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/trending/movie/week?api_key=${state.apiKey}`
      )

      commit('SET_TRENDING_MOVIES_WEEK', res.results)
    } catch (err) {
      console.log(err)
    }
  },

  async getTrendingTvShowsToday({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/trending/tv/day?api_key=${state.apiKey}`
      )

      commit('SET_TRENDING_TV_SHOWS_TODAY', res.results)
    } catch (err) {
      console.log(err)
    }
  },

  async getTrendingTvShowsWeek({ commit, state }) {
    try {
      const res = await this.$axios.$get(
        `${state.apiUrl}/trending/tv/week?api_key=${state.apiKey}`
      )

      commit('SET_TRENDING_TV_SHOWS_WEEK', res.results)
    } catch (err) {
      console.log(err)
    }
  },
}
