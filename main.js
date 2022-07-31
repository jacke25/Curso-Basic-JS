const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");


h1.innerHTML = "Aprendiendo <br> JS "; //innerHTML manipula el html desde JS
p.innerText = "solo <br> lee </br> texto"; //manipula el html pero todo lo toma como un texto literal
console.log(h1.getAttribute("pantalla"));// get.Atribute nos permite acceder a algun atributo del 
                                           //elemento de html en este caso el resultado seria "platzi"
            
h1.setAttribute("class", "titulito");//cambió la clase de "titulo" a "titulito"

h1.classList.add("nuevo");//agrega un nuevo nombre a la clase en este caso "nuevo" quedando "titulito nuevo"
h1.classList.remove("nuevo");//quita el "nuevo" de la clase 

input.value = "números"; //le asigna un atributo llamado value con valor "números" la etiqueta input


document.createElement("img");//crea un nuevo elemento en el html del tipo en este caso <img>
const img = document.createElement("img");
img.setAttribute("src", "https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?cs=srgb&dl=pexels-edgar-daniel-hern%C3%A1ndez-cervantes-3628100.jpg&fm=jpg");
pid.innerHTML = "";//eliminamos el texto
pid.append(img);//y agregamos la imagen