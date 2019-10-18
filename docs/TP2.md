# TP2 - Recherche filtrée

> Pour obtenir une solution à l'exercice précédent, vous pouvez exécuter la commande git suivante `git checkout PW1`.

Nous allons à présent ajouter la logique de filtre dans notre site.

## Search.vue

- Dans le composant `Search`, ajouter un binding entre l'`input` et une donnée `searchValue`. Ne pas hésiter à afficher cette valeur directement dans le template.
- Notre composant va maintenant émettre un événement `onSearchChange`. Celui-ci sera émit à chaque changement de valeur de recherche (ou à chaque `keyup`) et contiendra la valeur saisie par l'utilisateur.

## Result.vue

Mettre à jour le composant `Result` pour qu'il n'affiche que les pokemons qui respectent notre recherche.
Pour cela:

- ajouter une propriété `criteria` qui contiendra notre critère de filtre.
- n'afficher que les pokemons qui respectent ce critère.
  Par exemple, pour un `pokemon` donné, la logique suivante retournera `true` s'il respecte le critère de recherche :

```javascript
const lowerSearch = this.criteria.toLowerCase();
const lowerPokemon = pokemon.name.toLowerCase();
return lowerPokemon.includes(lowerSearch);
```

## App.vue

Mettre à jour le composant `App` pour qu'il s'abonne à l'événement `onSearchChange` de `Search` et qu'il mette à jour le critère de recherche de `Result`.
