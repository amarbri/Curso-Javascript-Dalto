const materias = {
    fisica: ["Perez", "Pedro", "Jorge", "María", "Cofla"], 
    programacion: ["Dalto", "Pedro", "Jorge", "María", "Luis", ],
    logica: ["Hernandez", "Pedro", "María", "Luis", "Cofla"],
    quimica: ["Rodríguez", "Jorge", "María", "Luis", "Cofla"]
}


const obtenerInformacion = (materia) => {
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}


const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color: red">${profesor}</b><br>
        Los alumnos son: <b style="color: blue">${alumnos}</b><br><br>
        `);
    }
}


const cantidadClases = (alumno) => {
    let informacion = obtenerInformacion();
    let clasesPresentes = [];

    let contador = 0
    for (i in informacion) {
        if (informacion[i].includes(alumno)) {
            contador++;
            clasesPresentes.push(" " + i);
        }
    }
    return `<b style="color: blue">${alumno}</b> está en <b>${contador}</b> clases: ${clasesPresentes}<br>`;

}
