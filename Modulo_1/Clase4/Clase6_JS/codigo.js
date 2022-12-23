const nombre = document.querySelector(".nombre");
const btn = document.querySelector(".button");

btn.addEventListener("click", cambiaColor);

function cambiaColor(color){
    nombre.color=color;
}

