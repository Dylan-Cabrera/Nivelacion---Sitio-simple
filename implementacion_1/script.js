const boton = document.getElementById("boton");
const body = document.querySelector("body");
const texto = document.getElementById("texto");

let estadoColor = 1;

boton.addEventListener("click", () => {
    body.classList.remove(`color-${estadoColor}`);
    estadoColor = (estadoColor % 3) + 1;
    body.classList.add(`color-${estadoColor}`);

})

texto.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        alert(`${texto.value}`)
    }
})