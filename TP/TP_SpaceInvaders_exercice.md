# Objectifs du TP

Voici les tâches que chaque section doit accomplir :

1. **Initial setup** : Initialiser le canvas et les éléments du jeu.
2. **Set canvas dimensions** : Configurer la taille du canvas en fonction de la fenêtre.
3. **Game elements** : Créer et initialiser les objets représentant le joueur, les balles et les ennemis.
4. **Create enemies** : Utiliser des boucles pour créer une grille d'ennemis.
5. **Draw player** : Dessiner le joueur sur le canvas.
6. **Draw bullets** : Dessiner les balles tirées par le joueur.
7. **Draw enemies** : Dessiner les ennemis sur le canvas.
8. **Move player** : Gérer le déplacement du joueur en fonction des entrées clavier.
9. **Move bullets** : Gérer le déplacement des balles et les supprimer lorsqu'elles quittent le canvas.
10. **Collision detection** : Détecter les collisions entre les balles et les ennemis, gérer la suppression des objets et l'incrémentation du score.
11. **Update game state** : Mettre à jour l'état du jeu à chaque cadre d'animation, redessiner les éléments et vérifier les collisions.
12. **Handle key events** : Gérer les événements de pression et de relâchement des touches pour contrôler le joueur et tirer des balles.
13. **Event listeners** : Ajouter des écouteurs d'événements pour les entrées clavier.
14. **Start the game** : Démarrer la boucle d'animation du jeu.
15. Mettre à jour le score et gérer les conditions de victoire et de défaite.

Chaque fonction a un rôle spécifique à jouer pour que le jeu fonctionne correctement.

## Étape 1 : Configuration de Base

### HTML

Commençons par créer la structure HTML de base avec un élément `<canvas>`.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Space Invaders</title>
    <style>
        canvas {
            background: black;
            display: block;
            margin: 0 auto;
            border: 1px solid white;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script src="game.js"></script>
</body>
</html>
```

### JavaScript

```javascript
// Initial setup
// Définir les variables de base

// Set canvas dimensions
// Définir les dimensions du canvas

// Game elements
// Définir les éléments du jeu (joueur, balles, ennemis, score)

// Create enemies
// Créer les ennemis avec des boucles pour les placer en grille

// Draw player
function drawPlayer() {
    // Dessiner le joueur sur le canvas
}

// Draw bullets
function drawBullets() {
    // Dessiner les balles sur le canvas
}

// Draw enemies
function drawEnemies() {
    // Dessiner les ennemis sur le canvas
}

// Move player
function movePlayer() {
    // Déplacer le joueur en fonction des touches pressées
}

// Move bullets
function moveBullets() {
    // Déplacer les balles vers le haut et les supprimer si elles sortent du canvas
}

// Collision detection
function detectCollisions() {
    // Détecter les collisions entre les balles et les ennemis
    // Supprimer les ennemis et les balles en cas de collision
    // Augmenter le score
}

// Update game state
function update() {
    // Effacer le canvas
    // Redessiner tous les éléments du jeu (joueur, balles, ennemis)
    // Mettre à jour les positions des éléments
    // Détecter les collisions
    // Demander la prochaine image d'animation
}

// Handle key events
function keyDown(e) {
    // Gérer les événements de pression des touches pour le déplacement du joueur et le tir
}

function keyUp(e) {
    // Gérer les événements de relâchement des touches pour arrêter le déplacement du joueur
}

// Event listeners
// Ajouter des écouteurs d'événements pour les touches de direction et la barre d'espace

// Start the game
// Appeler la fonction update pour démarrer la boucle de jeu
```