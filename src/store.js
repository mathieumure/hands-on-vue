import Vue from 'vue'
import Vuex from 'vuex'
import PokemonService from './components/pokemonService'

Vue.use(Vuex)

export const initialState = {
  loading: false,
  pokemons: [],
}

export const getters = {
  pokemons: (state) => state.pokemons,
  loading: (state) => state.loading,
}

export const actions = {
  async LOAD_POKEMONS ({commit, state}) {
    if (state.pokemons.length === 0) {
      commit('START_LOAD_POKEMONS');
      const pokemons = await PokemonService.getPokemons()
      commit('SET_POKEMONS', pokemons);
    }
  }
}

export const mutations = {
  START_LOAD_POKEMONS (state) {
    state.loading = true;
    state.pokemons = [];
  },
  SET_POKEMONS (state, pokemons) {
    state.loading = false;
    state.pokemons = pokemons;
  }
}

export default new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations
})
