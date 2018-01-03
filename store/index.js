import Vue from 'vue'
import Vuex from 'vuex'
import PokemonService from '../services/pokemonService'

Vue.use(Vuex)

export const initialState = {
  loading: false,
  pokemons: [],
  pokemonDetail: {}
}

export const getters = {
  pokemons: (state) => state.pokemons,
  loading: (state) => state.loading,
  pokemonDetail: (state) => state.pokemonDetail
}

export const actions = {
  async LOAD_POKEMONS ({commit, state}) {
    if (state.pokemons.length === 0) {
      commit('START_LOAD_POKEMONS')
      const pokemons = await PokemonService.getPokemons()
      commit('SET_POKEMONS', pokemons)
    }
  },
  async LOAD_POKEMON_DETAIL ({commit, state}, {pokemonId}) {
    if (!state.pokemonDetail[pokemonId]) {
      commit('START_LOAD_POKEMON_DETAIL', {pokemonId})
      const pokemonDetail = await PokemonService.getPokemon(pokemonId)
      commit('SET_POKEMON_DETAIL', {pokemonId, pokemonDetail})
    }
  }
}

export const mutations = {
  START_LOAD_POKEMONS (state) {
    state.loading = true
    state.pokemons = []
  },
  START_LOAD_POKEMON_DETAIL (state, { pokemonId }) {
    Vue.set(state.pokemonDetail, pokemonId, null)
    state.loading = true
  },
  SET_POKEMONS (state, pokemons) {
    state.loading = false
    state.pokemons = pokemons
  },
  SET_POKEMON_DETAIL (state, { pokemonId, pokemonDetail }) {
    state.loading = false
    Vue.set(state.pokemonDetail, pokemonId, pokemonDetail)
  }
}

export default () => new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations
})
