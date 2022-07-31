const primerValor = document.getElementById("valor1");
const segundoValor = document.getElementById("valor2");
const boton = document.querySelector("#sumar");
const resultado = document.getElementById("result");

boton.addEventListener("click", calcular);

function calcular(){
    let suma = parseInt(primerValor.value) + parseInt(segundoValor.value);
    resultado.innerText = "La suma es: " + suma;
}

const nuevoPrimerValor = document.getElementById("nuevoValor1");
const nuevoSegundoValor = document.getElementById("nuevoValor2");
const nuevoBoton = document.querySelector("#nuevaSumar");
const nuevoResultado = document.getElementById("nuevoResult");
const form = document.querySelector("#form");

form.addEventListener("submit", nuevoCalcular);

function nuevoCalcular(event){
    //console.log(event);
    event.preventDefault();
    let nuevaSuma = parseInt(nuevoPrimerValor.value) + parseInt(nuevoSegundoValor.value);
    nuevoResultado.innerText = "La nueva suma es: " + nuevaSuma;
}