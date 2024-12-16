
// Získání odkazu na element canvas a jeho kontext
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Vykreslení prvního čtverce s vyplněním
ctx.fillStyle = 'rgba(255, 0, 0, 1)'; // Červená barva s plnou průhledností
ctx.fillRect(50, 50, 100, 100); // Počáteční pozice (50, 50), šířka 100, výška 100

// Vykreslení druhého čtverce bez vyplnění
ctx.strokeStyle = 'rgba(0, 0, 255, 1)'; // Modrá barva obrysu s plnou průhledností
ctx.strokeRect(80, 80, 150, 150); // Počáteční pozice (80, 80), šířka 150, výška 150

// Průhledný čtverec k vymazání části grafiky
ctx.clearRect(100, 100, 50, 50); // Počáteční pozice (100, 100), šířka 50, výška 50

// Vykreslení prvního čtverce s vyplněním
ctx.fillStyle = 'rgba(255, 0, 0, 1)'; // Červená barva s plnou průhledností
ctx.fillRect(50, 50, 100, 100); // Počáteční pozice (50, 50), šířka 100, výška 100
