# TP5 - Vuex

> Pour obtenir une solution à l'exercice précédent, vous pouvez exécuter la commande git suivante `git checkout PW4`.

Nous allons maintenant gérer la récupération des pokemons en utilisant [vuex](https://vuex.vuejs.org/).

Vuex permet de renforcer la stratégie du `single way data flow` en délégant l'état global de l'application (ou `state`) dans un seul objet de configuration, qui ne peut être modifié que par l'intermédiaire d'actions.

![vuex-flow](https://vuex.vuejs.org/fr/images/flow.png)

Les composants vont ainsi réargir à chaque modification de l'état global de l'application et émettre des actions pour mettre à jour ce `state`. 

![vuex-flow](https://vuex.vuejs.org/fr/images/vuex.png)

[Plus d'information ici.](https://vuex.vuejs.org/fr/intro.html) 

## Liste des pokemons
- Importer le module `vuex`.
- Créer un `store` qui va permettre de stocker la liste des pokemons, vide au démarrage de l'application.
- Ajouter une action `LOAD_POKEMONS` qui va muter le `state` pour indiquer le début du chargement, récupérer les pokemons via l'API, et re-muter le `state` pour charger l'ensemble des pokemons.
- Optimiser le `store` pour ne charger les pokemons que lorsque le `store` est vide.
- Dans le composant `Result`:
  - utiliser `vuex` pour déclencher le chargement des pokemons lorsque le composant est créé.
  - utiliser les getters de `vuex` pour obtenir le statut de chargement et la liste des pokemons.

## Détail des pokemons

- Modifier le `store` pour qu'il contienne également une map `pokemonDetail` avec comme clé l'id du pokemon et en value le détail de ce dernier.
- Ajouter une action `LOAD_POKEMON_DETAIL` qui va muter le `state` pour indiquer le début du chargement, récupérer le détail du pokemon via l'API, et re-muter le `state` pour ajouter le détail du pokemon.
- Optimiser le `store` pour ne charger le détail du pokemon que lorsqu'il n'existe pas.
- Dans le composant `Pokemon`:
  - utiliser `vuex` pour déclencher le chargement du détail du pokemon lorsque le composant est créé.
  - utiliser les getters de `vuex` pour obtenir le statut de chargement et la liste des pokemons.
