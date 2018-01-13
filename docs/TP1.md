# TP1 - Composants

Actuellement, l'ensemble du site est contenu dans notre `index.html`. Nous allons à présent utiliser la puissance de [Vue](https://vuejs.org/) pour rendre notre site dynamique à l'aide de composants.

## Premiers composants de rendu

- Déplacer depuis `index.html` l'ensemble du template `<div class="container">` dans le composant `App.vue`.
- Vérifier que le composant `App.vue` est bien rendu dans `<div id="app">`.
- Extraire le template de recherche dans un composant `Search.vue` et utiliser ce composant dans `App.vue`.
- Faire de même pour le template contenant les résultats dans un composant `Result.vue`.

## Dynamisation du composant result

Nous allons maintenant créer un composant card qui affichera l'image et le nom d'un pokemon.

- Ce composant aura comme `props` le nom du pokemon et son id
- Ce composant pourra utiliser une `computed` properties afin de calculer l'URL de l'image à charger.
- Mettre à jour le composant `Result` pour utiliser ce composant
- Ajouter une liste de pokemons en tant que donnée interne du composant `Result` et utiliser la directive `v-for` pour afficher l'ensemble de nos pokemons.  
