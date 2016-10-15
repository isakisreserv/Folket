var image = document.getElementById("kat");
var ost = document.getElementById("ost");
var body = document.body;
var yt = document.createElement("IFRAME");
yt.src = "https://www.youtube.com/embed/WMJ4fuzemjY?autoplay=1";

image.onclick= function() {
  ost.appendChild(yt);
  kebab();
}
function kebab() {
  setTimeout(hej1, 800);
}
function hej1() {
  body.style.backgroundColor = "yellow";
  setTimeout(hej2, 1);
}
function hej2() {
  body.style.backgroundColor = "red";
  setTimeout(hej1, 1);
}