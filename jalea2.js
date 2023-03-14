const titulo = document.querySelector("h1")
const form = document.querySelector("#form")
const inpu1 = document.querySelector("#calculo")
const inpu2 = document.querySelector("#calculo2")
const buton = document.querySelector("#Bcalcular")
const resultado = document.getElementById("resul")

 form.addEventListener('submit', botones);

function botones(event) {
    console.log({event});
    event.preventDefault();

    let op = +inpu1.value + +inpu2.value
    resultado.innerHTML = op
}
