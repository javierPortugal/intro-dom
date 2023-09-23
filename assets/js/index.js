console.log("Entro index.js");

const btnBlue = document.getElementById("btnBlue");
const btnRead = document.getElementById("btnRead");
const btnYellow = document.getElementById("btnYellow");

/*
btnBlue.addEventListener("click", function(){console.log("Click en el boton azul!!!!!!!!!")});
*/

function clickBotonAzul() {
    console.log("Click en el boton azul!!!!!!!!!");
}

function overBotonAzul() {
    console.log("entro evento over en el boton azul!!!!!!!!!");
}

function clickBotonRead() {
    console.log("Click en el boton Rojo!!!!!!!!!");
}

function overBotonRead() {
    console.log("entro evento over en el boton Rojo!!!!!!!!!");
}

function changeBackGroundColorPage(color) {
    document.body.style.backgroundColor = color;
}

btnBlue.addEventListener("click", clickBotonAzul);
btnBlue.addEventListener("mouseover", overBotonAzul);
btnBlue.addEventListener("dblclick", ()=> {changeBackGroundColorPage("blue")});

btnRead.addEventListener("click", clickBotonRead);
btnRead.addEventListener("mouseover", overBotonRead);
btnRead.addEventListener("dblclick", ()=> {changeBackGroundColorPage("red")});



