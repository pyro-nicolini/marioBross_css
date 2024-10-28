const canvas = document.querySelector(".matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join(1).split("");
const fontSize = 16;
const columns = canvas.width / fontSize;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00FF00";
  ctx.font = fontSize + "px monospace";

  letters.forEach((y, index) => {
    const text = String.fromCharCode(0x30a0 + Math.random() * 96);
    const x = index * fontSize;
    ctx.fillText(text, x, y);

    if (y > 100 + Math.random() * 1e4) {
      letters[index] = 0;
    } else {
      letters[index] = y + fontSize;
    }
  });
}

setInterval(draw, 33);

// Ajusta el tamaño del canvas si la ventana cambia de tamaño
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


function Destacar5PrimerasLetras() {
  const headers = document.querySelectorAll("h3");

  headers.forEach((header) => {
    const text = header.textContent;
    const firstThree = `<span class="destacar">${text.slice(0, 8)}</span>`;
    const restOfText = text.slice(8);
    header.innerHTML = firstThree + restOfText;
  });
}
Destacar5PrimerasLetras();