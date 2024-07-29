# Introduction à Canvas

L'élément `<canvas>` en HTML5 est une puissante fonctionnalité permettant de dessiner des graphiques et des animations directement dans une page web. Contrairement à d'autres éléments graphiques, `<canvas>` ne possède pas son propre contenu visuel, mais fournit un espace où vous pouvez dessiner dynamiquement en utilisant des scripts JavaScript.

## Utilisations Courantes de `<canvas>`

L'élément `<canvas>` est extrêmement polyvalent et est utilisé dans divers domaines, notamment :

1. **Jeux Vidéo** : Permet la création de jeux interactifs en 2D et 3D directement dans le navigateur.
2. **Graphiques et Visualisations de Données** : Utilisé pour dessiner des graphiques, des diagrammes, et des visualisations interactives.
3. **Éditeurs d'Images** : Permet la manipulation directe des pixels pour créer des éditeurs d'images en ligne.
4. **Animations** : Utilisé pour créer des animations complexes et interactives.
5. **Applications Interactives** : Pour des applications nécessitant des interactions graphiques complexes comme les cartes interactives.

## Structure et Syntaxe de `<canvas>`

L'élément `<canvas>` se définit simplement avec des balises HTML et utilise JavaScript pour le dessin :

```html
<canvas id="myCanvas" width="480" height="320"></canvas>
```

### Points Clés

- **id** : Identifiant unique pour le `<canvas>`, utilisé pour accéder à l'élément via JavaScript.
- **width** et **height** : Définissent les dimensions du canvas. Par défaut, ces valeurs sont de 300 pixels en largeur et 150 pixels en hauteur.

## Accéder au Contexte de Dessin

Pour dessiner sur le canvas, vous devez obtenir le contexte de dessin 2D (ou 3D) via JavaScript :

```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
```

Le contexte de dessin (`ctx`) est un objet qui fournit toutes les méthodes et propriétés nécessaires pour dessiner et manipuler les graphiques sur le canvas.

## Dessiner sur le Canvas

Voici quelques opérations de base pour commencer à dessiner :

### 1. **Dessiner des Rectangles**

- **fillRect(x, y, width, height)** : Dessine un rectangle rempli.
- **strokeRect(x, y, width, height)** : Dessine un rectangle seulement avec les contours.
- **clearRect(x, y, width, height)** : Efface une partie du canvas.

Exemple :
```javascript
ctx.fillStyle = 'red'; // Définit la couleur de remplissage
ctx.fillRect(10, 10, 100, 100); // Dessine un rectangle rempli en rouge

ctx.strokeStyle = 'blue'; // Définit la couleur de contour
ctx.strokeRect(130, 10, 100, 100); // Dessine un rectangle avec des contours bleus

ctx.clearRect(20, 20, 30, 30); // Efface une partie du canvas
```

## 2. **Dessiner des Lignes**

Pour dessiner des lignes, vous devez utiliser les méthodes suivantes :

- **beginPath()** : Commence un nouveau chemin.
- **moveTo(x, y)** : Déplace le point de départ du chemin à (x, y).
- **lineTo(x, y)** : Ajoute un nouveau point et crée une ligne à partir du point précédent.
- **stroke()** : Dessine le chemin défini.

Exemple :
```javascript
ctx.beginPath(); // Commence un nouveau chemin
ctx.moveTo(50, 50); // Place le point de départ à (50, 50)
ctx.lineTo(200, 50); // Ajoute une ligne jusqu'à (200, 50)
ctx.lineTo(200, 200); // Ajoute une ligne jusqu'à (200, 200)
ctx.closePath(); // Ferme le chemin
ctx.stroke(); // Dessine le chemin avec la couleur de contour actuelle
```

## 3. **Dessiner des Cercles et des Arcs**

- **arc(x, y, radius, startAngle, endAngle, anticlockwise)** : Dessine un arc/cercle.

Exemple :
```javascript
ctx.beginPath(); // Commence un nouveau chemin
ctx.arc(150, 150, 75, 0, Math.PI * 2); // Dessine un cercle complet
ctx.fillStyle = 'green'; // Définit la couleur de remplissage
ctx.fill(); // Remplit le cercle avec la couleur verte
ctx.closePath(); // Termine le chemin
```

## Travailler avec des Images

Vous pouvez aussi dessiner des images sur le canvas :

```javascript
const img = new Image(); // Crée une nouvelle image
img.src = 'path/to/image.jpg'; // Définit la source de l'image

img.onload = function() {
    ctx.drawImage(img, 0, 0); // Dessine l'image à la position (0, 0)
};
```

## Animer sur le Canvas

Pour créer des animations, vous pouvez utiliser `requestAnimationFrame()` pour redessiner le canvas à des intervalles définis.

Exemple simple :
```javascript
let x = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas
    ctx.fillRect(x, 50, 50, 50); // Dessine un rectangle

    x += 1; // Met à jour la position du rectangle

    requestAnimationFrame(draw); // Demande la prochaine frame d'animation
}

draw(); // Démarre l'animation
```
