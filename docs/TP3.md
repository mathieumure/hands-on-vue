# TP3 - Services and données asynchrones

> Pour obtenir une solution à l'exercice précédent, vous pouvez exécuter la commande git suivante `git checkout PW2`.

Le composant `Result` affiche les pokemons depuis une liste interne. Nous allons à présent récupérer cette liste depuis une API.

- Externaliser la récupération des pokemons depuis un fichier de service `pokemonService.js` via une méthode `getPokemons`.
- Récupérer la liste des pokemons lors de la création du composant `Result`.
- Rendre la méthode `getPokemons` asynchrone par l'utilisation de `Promise`.
- Appeler l'API pokemon `https://pokeapi.co/api/v2/pokedex/1/` pour récupérer l'ensemble des pokemons. L'API va retourner les pokemons sous le format suivant:
```json
{
  ...
  "pokemon_entries": [
    { "entry_number": 1, "pokemon_species": {"name": "Bulbasaur", ...}, ...},
    ...
  ]
}
```
- Utiliser `babel` pour utiliser la syntaxe `async/await`
- Ajouter une indication de chargement dans le composant `Result`
