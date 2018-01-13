# Hands on Vue

Pendant cet atelier, nous allons créer un Pokedex avec la bibliothèque VueJS.

## Prérequis

Pour effectuer l'ensemble de ces exercices, vous avez besoin des outils suivants :

* GIT
* [NodeJS 8.x](https://nodejs.org/en/download/)
* un IDE (WebStorm, Visual Studio Code, Vim, ...)

Pour vous aider, nous vous conseillons d'utiliser l'extention [**Vue-devtools**](https://github.com/vuejs/vue-devtools) disponible pour:
- [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

> Pour les utilisateurs de VS Code, nous vous conseillons d'utiliser l'extension [**vetur**](https://vuejs.github.io/vetur/)

## Présentation

La présentation accompagnant ce code labs est disponible [sur github](https://mathieumure.github.io/hands-on-vue/)

## Par où commencer ?

Tout au long de ce codelab, nous allons faire évoluer un site statique.

Vous pouvez récupérer ce site à partir de github
```
git clone --branch PW0 https://github.com/mathieumure/hands-on-vue
```

Puis installez ses dépendances
```
npm install
```

Et enfin, démarrez le server
```
npm run dev
```

Et accéder à votre site depuis votre navigateur sur [http://localhost:8080/](http://localhost:8080/).

Vous êtes maintenant prêt à démarrer.

- [TP1 - Composants (Départ débutant)](./TP1.md)
- [TP2 - Recherche filtrée](./TP2.md)
- [TP3 - Services and données asynchrones (Départ expérimenté)](./TP3.md)
- [TP4 - Router](./TP4.md)
- [TP5 - Vuex](./TP5.md)
- [TP6 - SSR](./TP6.md)