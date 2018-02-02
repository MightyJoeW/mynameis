// VARIABLES FOR MY NAME
const at = document.getElementById("at");
const m = document.getElementById("m");
const i = document.getElementById("i");
const g = document.getElementById("g");
const h = document.getElementById("h");
const t = document.getElementById("t");
const y = document.getElementById("y");
const j = document.getElementById("j");
const o = document.getElementById("o");
const e = document.getElementById("e");
const w = document.getElementById("w");
const name = document.getElementById("name");

// VARIABLES FOR CONTROLS
const control = document.getElementById("control");
const center = document.getElementById("center");
const bg = document.getElementById("bg");
const color = document.getElementById("color");
const reset = document.getElementById("reset");

const body = document.querySelector("body");
const fin = document.getElementById("fin");

// VARIABLES FOR NEW SETTINGS
const newSize = `6em`;
const originalSize = `20px`;
const newColor = `#00ccff`;

const letters = document.getElementsByClassName("letters");

//CLICK EVENTS FOR NAME
at.addEventListener("click", function() {
  at.style.fontSize = newSize;
});

m.addEventListener("click", function() {
  m.style.fontSize = newSize;
});
i.addEventListener("click", function() {
  i.style.fontSize = newSize;
});
g.addEventListener("click", function() {
  g.style.fontSize = newSize;
});
h.addEventListener("click", function() {
  h.style.fontSize = newSize;
});
t.addEventListener("click", function() {
  t.style.fontSize = newSize;
});
y.addEventListener("click", function() {
  y.style.fontSize = newSize;
});
j.addEventListener("click", function() {
  j.style.fontSize = newSize;
});
o.addEventListener("click", function() {
  o.style.fontSize = newSize;
});
e.addEventListener("click", function() {
  e.style.fontSize = newSize;
});
w.addEventListener("click", function() {
  w.style.fontSize = newSize;
});

//CLICK EVENTS FOR CONTROLS
control.addEventListener("mouseover", function() {
  control.style.opacity = 1;
});

center.addEventListener("click", function() {
  name.style.textAlign = "center";
});

bg.addEventListener("click", function() {
  body.style.background = "black";
});

color.addEventListener("click", function() {
  name.style.color = "#00ccff";
});

// color.addEventListener("click", function() {
//   for (let i = 0; i < letters.length; i++) {
//     document.getElementById(letters[i].id).style.color = "white";
//   }
//   fin.style.fontSize = size / `10unit`;
//   fin.style.opacity = 1;
// });

reset.addEventListener("click", function() {
  name.style.textAlign = "left";
  body.style.background = "white";
  name.style.color = "black";
  at.style.fontSize = originalSize;
  m.style.fontSize = originalSize;
  i.style.fontSize = originalSize;
  g.style.fontSize = originalSize;
  h.style.fontSize = originalSize;
  t.style.fontSize = originalSize;
  y.style.fontSize = originalSize;
  j.style.fontSize = originalSize;
  o.style.fontSize = originalSize;
  e.style.fontSize = originalSize;
  w.style.fontSize = originalSize;
});
