import axios from 'axios'
export default {
  state: {
  loading: false,
    pokemons: [],
  },
  getters: {
    pokemons: (state) => state.pokemons,
  },
  actions: {
    LOAD_POKEMONS ({commit, state}) {
      if (state.pokemons.length === 0) {
        commit('START_LOAD_POKEMONS');
        axios.get('http://pokeapi.co/api/v2/pokedex/1/')
          .then(res => res.data)
          .then(({ pokemon_entries }) => {
            let pokemons = pokemon_entries.map(pokemon => ({
              id: pokemon.entry_number,
              name: pokemon.pokemon_species.name,
            }));
            commit('SET_POKEMONS', pokemons);
          });
      }
    }
  },
  mutations: {
    START_LOAD_POKEMONS (state) {
      state.loading = true;
      state.pokemons = [];
    },
    SET_POKEMONS (state, pokemons) {
      state.loading = false;
      state.pokemons = pokemons;
    }
  }
}