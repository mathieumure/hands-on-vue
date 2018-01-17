# TP6 - Server Side Rendering

> Pour obtenir une solution à l'exercice précédent, vous pouvez exécuter la commande git suivante `git checkout PW5`.

Pour utiliser le server side rendering (SSR), nous allons migrer notre projet sur [nuxt.js](https://fr.nuxtjs.org).

Le SSR permet de générer votre page côté server au lieu d'être généré côté client. Cela est très utile pour le référencement ou pour avoir un chargement initial très rapide car le serveur va pré-charger les données et ainsi générer la page telle qu'elle doit être.

![SSR](https://fr.nuxtjs.org/nuxt-schema.png)

[Plus d'information ici.](https://fr.nuxtjs.org/guide)

## Initialisation de nuxt

Initialiser un nouveau projet `nuxt` dans votre répertoire courant
```
vue init nuxt-community/starter-template .
```

## Migration

- Déplacer le dossier `src/assets/sprites` dans `static/sprites`.
- Déplacer le reste des assets dans `assets/`.
- Modifier `nuxt.config.js` pour charger nos css `@/assets/bulma.css` et `@/assets/style.css`.
- Déplacer les composants `Card`, `Result` et `Search` dans `components`.
- Déplacer le composant `Home` dans `pages/index.vue`.
- Déplacer le composant `Pokemon` dans `pages/pokemon/_id.vue`.
- Modifier le composant `Pokemon` pour utiliser de nouveau `$route.params.id` au lieu d'une propriété.
- Déplacer le store dans `store/index.js` et modifier légèrement l'export:
```js
export default () => new Vuex.Store({ 
  state: initialState, 
  getters, 
  actions, 
  mutations 
})
```
- Supprimer les fichiers inutiles résiduels: `index.html`, `App.vue` et `Logo.vue`.

## Pre-fetching des données

Utiliser la puissance de `nuxt` pour pré-fétcher vos données dans vos pages. 

> Pour obtenir une solution à cet exercice, vous pouvez exécuter la commande git suivante `git checkout PW6`
