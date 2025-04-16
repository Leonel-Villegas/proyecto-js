
let reservaTurnos = "";
let turnos = 0;
let reservaTrabajos = "";
let trabajos = 0;

function mostrarInicio() {
    return prompt("Sean bienvenidos a peluqeria orozco, por favor seleccione una de las siguientes opciones\n 1) Reservar turno.\n 2) Revisar tipos de trabajo\n 3) Revisar turno reservado con el trabajo a relalizar. ")
}


function reservarTurnos() {
    let turnosReservado = prompt("Escriba el dia y el horario en el que quiera cortarse el pelo segun los turnos esten disponibles\n 1)Lunes: Mañana y tarde disponible.\n 2)Martes: Disponible solamente mañana.\n 3)Miercoles: Disponible solamente tarde.\n 4)Jueves: Disponible mañana y tarde\n 5) Viernes: Disponible mañana y tarde.")
    if (turnosReservado) {
        turnos++
        reservaTurnos += `${turnosReservado}\n`
    } else {
        alert("No reservaste ningun turno.")
    }
}

function reservarTipoTrabajo() {
    let tipoTrabajo = prompt("Reserve el tipo de trabajo que desea realizarse escribiendo solamente su nombre\n 1) Corte de pelo hombre con barba $10.000\n 2) Corte de pelo mujer $13.000\n 3) Colorimetria para hombre $20.000\n 4) Colorimetria para mujer $30.000\n 5) Baños de crema para hombre $4.000\n 6) Baños de crema para mujer $7.000")
    if (tipoTrabajo) {
        trabajos++
        reservaTrabajos += `${tipoTrabajo}`
    }else{
        alert("No reservaste ningun trabajo")
    }
}


function mostrarTunos() {
    if (turnos === 0) {
        alert("No tenes ningun turno reservado")
    }
    else {
        alert(`Tenes reservado un turno para el dia ${reservaTurnos} para realizarte ${reservaTrabajos}`)
    }
}




let opcion = mostrarInicio()


while (opcion !== "4") {
    switch (opcion) {
        case "1":
            reservarTurnos();
            break;
        case "2":
            reservarTipoTrabajo();
            break;
        case "3":
            mostrarTunos();
            break
        default:
            alert("Ingresa una opcion valida")
            break;
    }
    opcion = mostrarInicio();
}

alert("Nos vemos luego")
