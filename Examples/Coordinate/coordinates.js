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
