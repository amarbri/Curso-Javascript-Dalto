

const obtenerInformacion = (materia) => {
    const materias = {
        fisica: ["Perez", "Pedro", "Jorge", "María", "Cofla"], 
        programacion: ["Dalto", "Pedro", "Jorge", "María", "Luis", ],
        logica: ["Hernandez", "Pedro", "María", "Luis", "Cofla"],
        quimica: ["Rodríguez", "Jorge", "María", "Luis", "Cofla"]
    }

    if (materias[materia] !== undefined) {
        return [materias[materia], materia];
    } else {
        return false;
    }
}


const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = obtenerInformacion(materia)[0][0];
        let alumnos = obtenerInformacion(materia)[0]
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color: red">${profesor}</b><br>
        Los alumnos son: <b style="color: blue">${alumnos}</b><br><br>
        `);
    }
}
