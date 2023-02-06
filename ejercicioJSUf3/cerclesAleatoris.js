const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
  let x = randomNumber(0, canvas.width);
  let y = randomNumber(0, canvas.height);
  let radius = randomNumber(20, 50);
  let gray = randomNumber(0, 255);
  let color = `rgb(${gray}, ${gray}, ${gray})`;
  drawCircle(x, y, radius, color);
}


