# Objectifs du TP

1. Créer un canvas et dessiner le joueur.
2. Déplacer le joueur à gauche et à droite.
3. Tirer des projectiles.
4. Ajouter des ennemis.
5. Déplacer les ennemis et détecter les collisions avec les projectiles.
6. Mettre à jour le score et gérer les conditions de victoire et de défaite.

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