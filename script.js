// Fake buyers counter
let buyers = 12340;
setInterval(() => {
  buyers += Math.floor(Math.random() * 3);
  document.getElementById("buyers").innerText = buyers.toLocaleString();
}, 3000);

// Fake social proof counters
let cart = 23;
let view = 118;

setInterval(() => {
  cart += Math.floor(Math.random() * 2);
  view += Math.floor(Math.random() * 3);

  document.getElementById("cartCount").innerText = cart;
  document.getElementById("viewCount").innerText = view;
}, 4000);
