let persona = ["nombre", "apellido", "dni", "dirección"];
function mostrarDatos(){
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    let i = 0;
    for (i = 0; i < persona.length ; i++){
        div.innerHTML = div.innerHTML + persona[i] + ", ";
    }
    let largo = div.innerHTML.length-2
    div.innerHTML = div.innerHTML.substring(0,largo);
    body.appendChild(div);
}