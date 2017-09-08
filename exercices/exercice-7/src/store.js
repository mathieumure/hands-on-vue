export default {
    state: {
        favorites: []
    },
    getters: {
        favorites: (state) => state.favorites,
        isFavorite: (state) => (pokemon) => state.favorites.findIndex(it => it.id === pokemon.id) !== -1
    },
    mutations: {
        ADD_TO_FAVORITES (state, pokemon) {
            state.favorites.push(pokemon)
        },
        REMOVE_FROM_FAVORITES (state, pokemon) {
            const pokemonIndex = state.favorites.findIndex(it => it.id === pokemon.id)
            state.favorites.splice(pokemonIndex, 1)
        }
    }
}