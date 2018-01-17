# TP1 - Composants

> Le code de base de l'application doit être celui correspondant au tag git `PW0`.
> Si ce n'est pas le cas, lancer la commande git suivante `git checkout PW0`.

Actuellement, l'ensemble du site est contenu dans notre `index.html`. Nous allons à présent utiliser la puissance de [Vue](https://vuejs.org/) pour rendre notre site dynamique à l'aide de composants.

## Premiers composants

- Déplacer depuis `index.html` l'ensemble du template `<div class="container">` dans le fichier `App.vue`.
- Vérifier que le composant `App` est bien rendu dans `<div id="app">`.
- Extraire le template de recherche dans un composant `Search` et utiliser ce composant dans `App`.
- Faire de même pour le template contenant les résultats dans un composant `Result`.

## Dynamisation du composant result

Nous allons maintenant créer un composant card qui affichera l'image et le nom d'un pokemon.

- Ce composant aura comme `props` le nom du pokemon et son id.
- Ce composant pourra utiliser une `computed property` afin de calculer l'URL de l'image à charger.
- Mettre à jour le composant `Result` pour utiliser ce composant.
- Ajouter une liste de pokemons en tant que donnée interne du composant `Result` et utiliser la directive `v-for` pour l'afficher.
