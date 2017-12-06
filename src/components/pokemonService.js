import axios from 'axios'

const PokemonService = {
  getPokemons: async () => {
    return await axios
      .get('https://pokeapi.co/api/v2/pokedex/1/')
      .then(res => res.data)
      .then(({ pokemon_entries }) => {
        return pokemon_entries.map(pokemon => ({
          id: pokemon.entry_number,
          name: pokemon.pokemon_species.name,
        }));
      });
  },

  getPokemon: async (id) => {
    return await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.data);
  }
};

export default PokemonService;
