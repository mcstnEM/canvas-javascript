# Plan du cours

1. **Introduction à JavaScript**
    - Historique et importance de JavaScript
    - Intégration de JavaScript dans une page HTML
    - Console du navigateur pour les tests

2. **Introduction au Canvas**
    - Qu'est-ce que l'élément `<canvas>` ?
    - Mise en place d'un Canvas
    - Dessiner sur le Canvas : les bases

3. **Introduction aux événements dans le DOM**
    - Qu'est-ce qu'un événement ?
    - Types d'événements courants
    - Ajout d'écouteurs d'événements

4. **Exercices pratiques**

# Introduction à JavaScript

## 1.1 Historique et importance de JavaScript

JavaScript a été créé en 1995 par Brendan Eich chez Netscape. 

Initialement conçu en seulement 10 jours sous le nom de Mocha, puis renommé LiveScript, il a finalement été appelé JavaScript pour capitaliser sur la popularité de Java. JavaScript est rapidement devenu un langage essentiel pour le développement web grâce à sa capacité à rendre les pages interactives. 

En 1997, JavaScript a été standardisé sous le nom de ECMAScript par l'ECMA International. Au fil des ans, il a évolué avec des versions majeures comme ES5 en 2009 et ES6 en 2015, qui ont introduit de nombreuses fonctionnalités modernes. Aujourd'hui, JavaScript est omniprésent, utilisé non seulement dans les navigateurs, mais aussi sur les serveurs, les applications mobiles et même les logiciels de bureau.

## 1.2 Intégration de JavaScript dans une page HTML

**Exemple :**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Introduction à JavaScript</title>
</head>
<body>
    <h1>Bienvenue dans le monde de JavaScript</h1>
    <script>
        console.log('Bonjour, monde!');
    </script>
</body>
</html>
```

### 2. Introduction au Canvas

## 2.1 Qu'est-ce que l'élément `<canvas>` ?
`<canvas>` est un élément HTML utilisé pour dessiner des graphiques à l'aide de JavaScript.

## 2.2 Mise en place d'un Canvas

**Exemple :**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Canvas Example</title>
</head>
<body>
    <canvas id="myCanvas" width="500" height="500" style="border:1px solid #000000;"></canvas>
    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
    </script>
</body>
</html>
```

## 2.3 Dessiner sur le Canvas : les bases

**Exemple :**
```html
<script>
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, 150, 75);
</script>
```

### 3. Introduction aux événements dans le DOM

## 3.1 Qu'est-ce qu'un événement ?
Un événement est une action ou occurrence détectée par le navigateur (ex : clic, survol de la souris).

## 3.2 Types d'événements courants
- `click`
- `mouseover`
- `mouseout`
- `keydown`
- `keyup`

## 3.3 Ajout d'écouteurs d'événements

**Exemple :**
```html
<button id="myButton">Cliquez-moi</button>
<script>
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Bouton cliqué!');
    });
</script>
```

### 4. Exercices pratiques

## Exercice 1 : Dessiner un rectangle sur le Canvas au clic d'un bouton

## Exercice 2 : Changer la couleur du rectangle au survol de la souris

## Exercice 3 : Afficher un message quand la souris entre et sort d'une zone spécifique

## Exercice 4 : Changer la couleur d'un texte quand une touche est pressée

## Exercice 5 : Afficher les coordonnées de la souris sur la page

## Exercice 6 : Ajouter un nouvel élément à une liste en cliquant sur un bouton

## Exercice 7 : Supprimer un élément d'une liste en cliquant sur cet élément


## Exercice 8 : Changer la couleur de fond de la page en cliquant sur un bouton

## Exercice 9 : Compter le nombre de fois qu'un bouton est cliqué

## Exercice 10 : Afficher une alerte quand le formulaire est soumis
