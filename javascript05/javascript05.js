let persona = {
        nombre: "",
        apellido: "",
        dni: "",
}

persona = [
        {
        nombre: "Juan",
        apellido: "Perez",
        dni: "12345678"
    },
        {
        nombre: "Maria",
        apellido: "Gomez",
        dni: "87654321"
    },
        {
        nombre: "Pedro",
        apellido: "Rodriguez",
        dni: "12345687"
    },
        {
        nombre: "Ana",
        apellido: "Martinez",
        dni: "87654312"
    }
]
function buscarPersonas(){
    let dni = document.getElementById("indice").value;
    let encontrado = persona.find(persona => persona.dni == dni);
    alert("Nombre: " + encontrado.nombre + " Apellido: " + encontrado.apellido);
}