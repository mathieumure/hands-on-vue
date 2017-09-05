# Introduction

Pendant ce codelab, nous allons créer un Pokedex avec la bibliothèque VueJS. 
Nous allons pouvoir ajouter au favoris nos pokemons.

## Prérequis

Pour faire ce codelab, vous avez besoin des outils suivants :

* GIT
* NodeJS 8.x
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

- Créez un nouveau dossier qui va contenir notre application
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

Votre application est maintenant générée et fonctionnelle. Vous pouvez lancer l'application avec la commande suivante
```
npm run dev
```

### PW2 - Composants

#### Intégration dans App.vue
Nous sommes maintenant prêt pour intégrer notre site statique dans l'application qui vient d'être générée.

Vous allez tout d'abord intégré le site statique dans l'application:
    - les éléments à l'extérieur de `<body>` doivent se trouver dans le fichier index.html
    - le contenu de `<body>` doit être inséré dans le composant App.vue
    - (optionnel) vous pouvez déplacer le style du fichier `style.css` dans le composant `App.vue`

#### Création des premiers composants

Vous allez maintenant créer vos premiers composants Vue.

- Créer un composant `search.vue` qui va contenir le formulaire de recherche. Mettre à jour App.vue pour définir ce composant de manière local.

- Créer un composant `result.vue` qui va contenir le résultat de la recherche. Ce composant aura comme donnée une liste statique d'éléments et accéder directement au contenu du tableau.
```javascript
pokemons: [
    { name: 'Bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    ...
]
```
```html
{{ pokemons[0].name }}
```
N'oubliez pas de mettre à jour App.vue pour importer ce nouveau composant.

- On va maintenant extraire les cards de chaque pokemon dans un composant dédié `card.vue`. Ce composant prendre deux propriétées:
    - `name` qui sera le nom du pokemon
    - `image`qui sera l'URL de l'image à affichée
Ré-écriver le composant `result.vue` pour utiliser ce nouveau composant cards

- *(bonus)* inscrivez le composant `result.vue` de manière global.


### PW3 - Directives


Le composant `search.vue` est actuellement qu'un simple champ de formulaire. Nous allons le rendre un peu plus intéractif en lui ajoutant certains comportement:
- Utilisez la directive `v-model` pour binder le champ `input` à une variable du composant
- Ajouter un handler sur l'événement `keyup` qui va permettre au composant d'émettre un événement `onSearchChange` utilisable par un composant parent
- *(bonus)* Ajoutez lodash pour que l'événément onSearchChange ne soit émit qu'après un certain délai de saisi (`debounce`)

Maitenant, nous allons mettre à jour le composant `result.vue` pour qu'il affiche une liste filtrée:
- Affiche la liste des pokemons en utilisant la directive `v-for`
- Ajoutez une propriété `criteria` qui sera la chaîne de caractère qui permettra de filtrer nos pokemon
- Ajouter une condition de rendu du composant en utilisant la directive `v-if`. Le méthode de filtre sera la suivante
```javascript
const lowerSearch = this.criteria.toLowerCase();
const lowerPokemon = pokemon.name.toLowerCase();
return lowerPokemon.includes(lowerSearch);
```

Nous allons maitenant lier les deux composants via `App.vue`.
- Ajoutez un handler de l'événement `onSearchChange` qui va récupérer la valeur de recherche et la stocker.
- Passer cette donnée dans le composant result via la nouvelle propriété `criteria`.

### Exercice 4 - Filtres

Création d'un filter uppercase + date
Découverte de computed properties

### Exercice 5 - Ressources

Axios + fetch des données

### Exercice 6 - Routeur

vue-router pour les routes favoris et recherche

### Exercice 7 - VueX

favoris + recherche avec vuex

