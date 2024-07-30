# Comprendre les Coordonnées du Canvas

Il est important de bien comprendre comment les coordonnées fonctionnent dans un élément `<canvas>` en HTML. 
Les coordonnées du canvas sont basées sur un système de coordonnées cartésiennes avec l'origine (0, 0) située dans le coin supérieur gauche.

## Système de Coordonnées du Canvas
- **Origine (0, 0)** : Le coin supérieur gauche du canvas.
- **Axe X** : Augmente de gauche à droite.
- **Axe Y** : Augmente de haut en bas.

Voici un schéma pour mieux visualiser le système de coordonnées du canvas :

```
(0,0) --------------> x (largeur)
   |
   |
   |
   v
   y (hauteur)
```

## Démonstration avec un Canvas de 480x320 Pixels

Supposons que nous avons un canvas de 480 pixels de largeur et 320 pixels de hauteur. Voici quelques exemples de coordonnées clés :

- **Coin supérieur gauche** : (0, 0)
- **Coin supérieur droit** : (480, 0)
- **Coin inférieur gauche** : (0, 320)
- **Coin inférieur droit** : (480, 320)
- **Centre du canvas** : (240, 160)

### Exemple Pratique

Nous allons utiliser ces coordonnées pour mieux comprendre comment positionner des éléments sur le canvas.

1. **Créer un canvas dans votre fichier HTML** :
   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Coordonnées du Canvas</title>
       <style>
           canvas {
               background: #eee;
               display: block;
               margin: 0 auto;
           }
       </style>
   </head>
   <body>
       <canvas id="coord" width="480" height="320"></canvas>
       <script src="coordinates.js"></script>
   </body>
   </html>
   ```

2. **Créer un fichier JavaScript `coordinates.js` pour dessiner des cercles à des positions clés** :
   ```javascript
   const canvas = document.getElementById("coord");
   const ctx = canvas.getContext("2d");

   // Fonction pour dessiner un cercle
   function drawCircle(x, y, color) {
       ctx.beginPath();
       ctx.arc(x, y, 10, 0, Math.PI * 2);
       ctx.fillStyle = color;
       ctx.fill();
       ctx.closePath();
   }

   // Dessiner des cercles à des positions clés
   drawCircle(0, 0, 'red');         // Coin supérieur gauche
   drawCircle(480, 0, 'green');     // Coin supérieur droit
   drawCircle(0, 320, 'blue');      // Coin inférieur gauche
   drawCircle(480, 320, 'yellow');  // Coin inférieur droit
   drawCircle(240, 160, 'purple');  // Centre du canvas
   ```

3. **Explications du Code** :
   - **drawCircle(x, y, color)** : Cette fonction dessine un cercle de rayon 10 aux coordonnées (x, y) avec une couleur spécifiée.
   - Nous appelons cette fonction cinq fois pour dessiner des cercles aux coins et au centre du canvas.

### Illustration Visuelle

Après avoir ajouté le code ci-dessus, vous devriez voir cinq cercles de différentes couleurs sur votre canvas, chacun placé aux coordonnées mentionnées. 

- **Rouge** : Coin supérieur gauche (0, 0)
- **Vert** : Coin supérieur droit (480, 0)
- **Bleu** : Coin inférieur gauche (0, 320)
- **Jaune** : Coin inférieur droit (480, 320)
- **Violet** : Centre du canvas (240, 160)


### Détails des Fonctions Utilisées dans le Canvas

Pour mieux comprendre comment fonctionne le dessin sur un élément `<canvas>`, examinons en détail les différentes fonctions de l'API Canvas 2D que nous avons utilisées dans notre exemple précédent.

## 1. **getContext()**

- **Description** : Cette méthode obtient le contexte de dessin sur le canvas. Le contexte est un objet qui fournit des méthodes et des propriétés pour dessiner et manipuler le contenu du canvas.
- **Syntaxe** :
  ```javascript
  const ctx = canvas.getContext('2d');
  ```
- **Explication** : `getContext('2d')` retourne un contexte de rendu en deux dimensions.

## 2. **beginPath()**

- **Description** : Cette méthode commence un nouveau chemin ou réinitialise le chemin actuel.
- **Syntaxe** :
  ```javascript
  ctx.beginPath();
  ```
- **Explication** : `beginPath()` démarre un nouveau chemin de dessin, séparé du précédent.

## 3. **arc()**

- **Description** : Cette méthode ajoute un arc/cercle à la trajectoire actuelle.
- **Syntaxe** :
  ```javascript
  ctx.arc(x, y, radius, startAngle, endAngle);
  ```
- **Paramètres** :
  - `x` : Coordonnée x du centre de l'arc.
  - `y` : Coordonnée y du centre de l'arc.
  - `radius` : Rayon de l'arc.
  - `startAngle` : Angle de départ, en radians (0 correspond à 3 heures sur une horloge).
  - `endAngle` : Angle de fin, en radians.
- **Explication** : `ctx.arc(x, y, 10, 0, Math.PI * 2)` dessine un cercle de rayon 10 aux coordonnées `(x, y)` en partant de l'angle 0 jusqu'à `2 * Math.PI` (soit un cercle complet).

## 4. **fillStyle**

- **Description** : Cette propriété définit la couleur de remplissage utilisée par les méthodes de dessin (comme `fill()`).
- **Syntaxe** :
  ```javascript
  ctx.fillStyle = 'color';
  ```
- **Explication** : `ctx.fillStyle = "#0095DD"` définit la couleur de remplissage à `#0095DD` (un bleu spécifique).

## 5. **fill()**

- **Description** : Cette méthode remplit la trajectoire actuelle avec la couleur spécifiée par `fillStyle`.
- **Syntaxe** :
  ```javascript
  ctx.fill();
  ```
- **Explication** : `ctx.fill()` remplit la forme dessinée avec la couleur définie par `fillStyle`.

## 6. **closePath()**

- **Description** : Cette méthode crée une ligne droite de la position actuelle à la position de départ du chemin.
- **Syntaxe** :
  ```javascript
  ctx.closePath();
  ```
- **Explication** : `ctx.closePath()` ferme le chemin de dessin actuel. Bien que ce ne soit pas nécessaire pour dessiner un cercle, c'est une bonne pratique pour indiquer que le chemin est terminé.

## 7. **clearRect()**

- **Description** : Cette méthode efface une partie du canvas, définie par un rectangle.
- **Syntaxe** :
  ```javascript
  ctx.clearRect(x, y, width, height);
  ```
- **Paramètres** :
  - `x` : Coordonnée x du coin supérieur gauche du rectangle à effacer.
  - `y` : Coordonnée y du coin supérieur gauche du rectangle à effacer.
  - `width` : Largeur du rectangle à effacer.
  - `height` : Hauteur du rectangle à effacer.
- **Explication** : `ctx.clearRect(0, 0, canvas.width, canvas.height)` efface tout le canvas, ce qui est utile pour préparer le dessin du prochain frame dans une animation.

## 8. **setInterval()**

- **Description** : Cette méthode appelle une fonction ou exécute un code à des intervalles de temps spécifiés.
- **Syntaxe** :
  ```javascript
  setInterval(function, delay);
  ```
- **Paramètres** :
  - `function` : La fonction à exécuter.
  - `delay` : L'intervalle de temps en millisecondes entre chaque exécution de la fonction.
- **Explication** : `setInterval(draw, 10)` appelle la fonction `draw` toutes les 10 millisecondes, créant ainsi une boucle d'animation.

### Exemple Complet avec Explications

Réassemblons tout cela dans un exemple complet, tout en expliquant chaque étape.

1. **HTML et CSS** :
   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Animation du Ballon</title>
       <style>
           canvas {
               background: #eee;
               display: block;
               margin: 0 auto;
           }
           button {
               display: block;
               margin: 10px auto;
           }
       </style>
   </head>
   <body>
       <canvas id="myCanvas" width="480" height="320"></canvas>
       <button id="runButton">Démarrer le jeu</button>
       <script src="script.js"></script>
   </body>
   </html>
   ```

2. **JavaScript (`script.js`)** :
   ```javascript
   // Obtient l'élément canvas et son contexte 2D
   const canvas = document.getElementById("myCanvas");
   const ctx = canvas.getContext("2d");

   // Position initiale et vitesse du ballon
   let x = canvas.width / 2;
   let y = canvas.height - 30;
   const dx = 2;
   const dy = -2;

   // Fonction pour dessiner un cercle
   function drawBall() {
       ctx.beginPath(); // Commence un nouveau chemin de dessin
       ctx.arc(x, y, 10, 0, Math.PI * 2); // Dessine un cercle
       ctx.fillStyle = "#0095DD"; // Définit la couleur de remplissage
       ctx.fill(); // Remplit le cercle avec la couleur définie
       ctx.closePath(); // Termine le chemin de dessin
   }

   // Fonction pour dessiner le contenu du canvas à chaque frame
   function draw() {
       ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas
       drawBall(); // Dessine le ballon
       x += dx; // Met à jour la position x du ballon
       y += dy; // Met à jour la position y du ballon
   }

   // Fonction pour démarrer le jeu
   function startGame() {
       setInterval(draw, 10); // Appelle la fonction draw toutes les 10 millisecondes
   }

   // Ajoute un écouteur d'événement au bouton pour démarrer le jeu
   document.getElementById("runButton").addEventListener("click", function () {
       startGame();
       this.disabled = true; // Désactive le bouton après avoir cliqué
   });
   ```
