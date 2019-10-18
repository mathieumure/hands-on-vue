# TP4 - Router

> Pour obtenir une solution à l'exercice précédent, vous pouvez exécuter la commande git suivante `git checkout PW3`.

Nous allons maintenant utiliser [vue-router](https://router.vuejs.org) afin d'afficher le détail d'un pokemon.

## Initialisation

- Déplacer la logique de `App` dans un composant `Home`.
- Importer et initialiser `vue-router` pour qu'il rende le composant `Home` quand il match `/`.
- Modifier `App` pour qu'il puisse afficher les composants matchés par `vue-router`.

## Pokemon

- Créer un composant `Pokemon` qui affiche une `Card` d'un pokemon et un lien pour retourner sur `Home`.
- Créer une route `/pokemon/:id` qui va rendre le composant Pokemon.
- Modifier le composant `Result` pour ajouter un lien autour de chaque résultat qui va router sur le détail du pokemon associé.
- Ajouter une méthode asynchrone `getPokemon` dans `pokemonService` qui va récupérer les données depuis l'API `https://pokeapi.co/api/v2/pokemon/${id}`.
- Dynamiser le composant `Pokemon`, en récupérant les données depuis l'API lorsqu'il est créé.
- Afficher ainsi la taille, le poids et la liste des types à partir des détails de ce pokemon.
- Ajouter une indication de chargement pendant la récupération des détails.
- Découpler le router et le composant, en passant les paramètres de routage en tant que propriété de composant.
