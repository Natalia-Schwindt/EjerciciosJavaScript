function dibujarTabla() {
    let body = document.getElementsByTagName("body")[0];
    let fila = document.getElementById("filas");
    let columna = document.getElementById("columnas");
    let tabla = document.createElement("table");
    let tbody = document.createElement("tbody");
    let i=0, j=0, k=0;
    for (i = 0; i < fila.value; i++) {  
        let tr = document.createElement("tr");
        for (j = 0; j < columna.value; j++) {
            let td = document.createElement("td");
            k = k + 1;
            td.innerHTML = k;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}