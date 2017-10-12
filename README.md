# Introduction

Pendant ce codelab, nous allons créer un Pokedex avec la bibliothèque VueJS. 

## Prérequis

Pour faire ce codelab, vous avez besoin des outils suivants :

* GIT
* [NodeJS 8.x](https://nodejs.org/en/download/)
* un IDE (WebStorm, Visual Studio Code, Vim, ...)

Pour vous aider, nous vous conseillons d'utiliser l'extention [**Vue-devtools**](https://github.com/vuejs/vue-devtools) disponible pour:
- [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

> Pour les utilisateurs de VS Code, nous vous conseillons d'utiliser l'extension [**vetur**](https://vuejs.github.io/vetur/)

## Présentation

La présentation accompagnant ce code labs est disponible [ici](https://docs.google.com/presentation/d/1tk_6xn5FNG0VB_nT-NWxga8gqoo9LT6R0wjiLMBopak/edit?usp=sharing)

## Exercices

> Chaques exercice pourra partir d'un code propre:
>- `git checkout PW0`: un site statique que nous allons vuetifier
>- `git checkout PW1`: projet tel qu'attendu après l'exercice 1
>- `git checkout PW2`: projet tel qu'attendu après l'exercice 2
>- etc...

### PW0 - Statique website

Tout au long de ce codelab, nous allons faire évoluer un site statique. Vous pouvez récupérer ce site [ici](https://github.com/mathieumure/hands-on-vue/archive/PW0.zip) et le lancer directement depuis votre navigateur.

Vous êtes maintenant prêt à démarrer.

### PW1 - Getting started

Afin d'intégrer ces fichiers statiques, nous allons générer un template de base permettant de développer une application *VueJS*.

- Installez `vue-cli`
```
npm i -g vue-cli
```

- Créer un nouveau dossier qui va contenir notre application
```
mkdir <folder> && cd <folder>
```

- Générer un squelette d'application, pour cela nous allons utiliser le template officiel `webpack-simple`
```
vue init webpack-simple
```

- Installez les dépendances
```
npm install
```

Votre application est maintenant générée et fonctionnelle. Vous pouvez la lancer avec la commande suivante
```
npm run dev
```

### PW2 - Composants

#### Intégration dans App.vue
Nous sommes maintenant prêt pour intégrer notre site statique dans l'application qui vient d'être générée.

Vous allez tout d'abord intégrer le site statique dans l'application:
    - les éléments à l'extérieur de `<body>` doivent se trouver dans le fichier index.html
    - le contenu de `<body>` doit être inséré dans le composant App.vue
    - (optionnel) vous pouvez déplacer le style du fichier `style.css` dans le composant `App.vue`

#### Création des premiers composants

Vous allez maintenant créer vos premiers composants Vue.

- Créer un composant `search.vue` qui va contenir le formulaire de recherche. Mettre à jour App.vue pour définir ce composant de manière local.

- Créer un composant `result.vue` qui va contenir le résultat de la recherche. Ce composant aura comme données une liste statique d'éléments. Ce composant affichera une card pour chaque élément en accédant directement au tableau via l'index.
```javascript
pokemons: [{
    name: 'Bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
}, {
    name: 'Ivysaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
}, {
    name: 'Venusaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
}, {
    name: 'Charmander',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
}, {
    name: 'Charmeleon',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
}, {
    name: 'Charizard',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
}, {
    name: 'Squirtle',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
}, {
    name: 'Wartortle',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
}, {
    name: 'Blastoise',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
}, {
    name: 'Caterpie',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
}]
```
```html
{{ pokemons[0].name }}
```
N'oubliez pas de mettre à jour App.vue pour importer ce nouveau composant.

- On va maintenant extraire les cards de chaque pokemon dans un composant dédié `card.vue`. Ce composant prendra deux propriétés:
    - `name` qui sera le nom du pokemon
    - `image`qui sera l'URL de l'image à affichée
Ré-écrire le composant `result.vue` pour utiliser ce nouveau composant `card`

- *(bonus)* inscrire le composant `result.vue` de manière globale.


### PW3 - Directives


Le composant `search.vue` n'est actuellement qu'un simple champ de formulaire. Nous allons le rendre un peu plus intéractif en lui ajoutant certains comportements:
- Utilisez la directive `v-model` pour binder le champ `input` à une variable du composant
- Ajouter un handler sur l'événement `keyup` qui va permettre au composant d'émettre un événement `onSearchChange` utilisable par un composant parent
- *(bonus)* Ajouter lodash pour que l'événément onSearchChange ne soit émit qu'après un certain délai de saisi (`debounce`)

Maintenant, nous allons mettre à jour le composant `result.vue` pour qu'il affiche une liste filtrée:
- Afficher la liste des pokemons en utilisant la directive `v-for`
- Ajouter une propriété `criteria` qui sera la chaîne de caractères qui permettra de filtrer nos pokemons
- Ajouter une condition de rendu du composant en utilisant la directive `v-if`. La méthode de filtre sera la suivante
```javascript
const lowerSearch = this.criteria.toLowerCase();
const lowerPokemon = pokemon.name.toLowerCase();
return lowerPokemon.includes(lowerSearch);
```

Nous allons à présent lier les deux composants via `App.vue`.
- Ajouter un handler de l'événement `onSearchChange` qui va récupérer la valeur de recherche et la stocker.
- Passer cette donnée dans le composant result via la nouvelle propriété `criteria`.

### PW4 - Filtres

Mettre à jour la liste des pokemons avec le code suivant :
```javascript
pokemons: [{
    id: 1,
    name: 'bulbasaur',
}, {
    id: 2,
    name: 'ivysaur',
}, {
    id: 3,
    name: 'venusaur',
}, {
    id: 4,
    name: 'charmander',
}, {
    id: 5,
    name: 'charmeleon',
}, {
    id: 6,
    name: 'charizard',
}, {
    id: 8,
    name: 'squirtle',
}, {
    id: 9,
    name: 'wartortle',
}, {
    id: 10,
    name: 'blastoise',
}, {
    id: 11,
    name: 'caterpie',
}]
```
- Créer un filtre custom pour permettre d'afficher la première lettre du nom du Pokemon en majuscule
- Créer une computed property pour calculer l'URL de l'image du pokemon à partir de son ID.

### PW5 - Ressources

Nous allons maintenant récupérer la liste des pokemons depuis une API: https://pokeapi.co

- Installer la librairie axios
```
npm install axios
```

- Dans le composant `result.vue`, récupérer au mountage du composant la liste des pokemons depuis l'API http://pokeapi.co/api/v2/pokedex/1/. L'API va retourner les données sous le format suivant:
```javascript
{
    ...
    pokemon_entries: [
        {
        entry_number: 1,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/1/",
            name: "bulbasaur"
        }
    },
    ...
}
```

### PW6 - Routeur

- *(bonus)* Implémenter le composant favorites et ajouter un bouton dans le composant `card.vue` pour ajouter un pokemon aux favoris

- Importer vue-router
```
npm install vue-router
```

Créer deux composants:
    - `home.vue`: qui va contenir la page que nous avons développé jusqu'à présent.
    - `favorites.vue`: qui ne va contenir qu'un titre pour le moment

Créer un objet router avec les conditions suivantes:
    - la route `/` doit afficher le composant home
    - la route `/favorites` doit afficher le composant favorites

Ajouter un composant  `router-view` fichier App.vue et deux `router-link` pour créer des liens vers vos deux routes. 


### PW7 - VueX

Pour terminer ce hands on, nous allons maintenant implémenter la gestion des favoris en utilisant vuex.

- Importez le module `vuex`
- Créez le store qui va permettre de stocker la liste des favoris, vide au démarrage de l'application.
- Dans le composant `card.vue`:
    - ajoutez une propriété `favorite` qui indique si le pokemon est un favoris ou non.
    - ajoutez un bouton qui va émettre un événement `addToFavorites` si le pokemon est favoris, ou qui va émettre un événement `removeFromFavorites` sinon.
- Mettez à jour le composant `result.vue` pour passer le nouveau paramètre et effectuer une mutation du store. 

- *(bonus)* Créer un module vuex, qui va permettre de récupérer la liste des pokemons. Mettez à jour le composant `result` pour utiliser vuex afin de récupérer la liste des pokémons.

