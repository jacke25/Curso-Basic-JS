const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const button = document.querySelector("#calculate_button");
let resultado = document.getElementById("result");

function calcular(){
    var suma = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "La suma es: " + suma;   
}