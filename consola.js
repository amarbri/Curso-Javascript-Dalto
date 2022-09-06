const materias = {
    fisica: [75, 6, 4, "física"], 
    matematica: [84, 8, 3, "matemáticas"],
    logica: [92, 8, 4, "lógica"],
    quimica: [60, 6, 4, "química"],
    calculo: [75, 7, 4, "cálculo"],
    programacion: [79, 9, 3, "programación"],
    biologia: [98, 9 ,2, "biología"],
    dbdd: [92, 9, 1, "bbdd"],
    algebra: [100, 10, 4, "álgebra"]
}


const aprobo = () => {
    for (materia in materias) {

        let asistencia = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencia >= 90) {
            console.log("%c  Asistencia cumplida", "color:green");
        }
        else {
            console.log("%c  Falta de asistencia", "color:red");
        }

        if (promedio >= 7) {
            console.log("%c  Promedio aprobado", "color:green");
        }
        else {
            console.log("%c  Promedio suspendido", "color:red");
        }
    
        if (trabajos >= 3) {
            console.log("%c  Trabajos prácticos entregados suficientes", "color:green");
        }
        else {
            console.log("%c  Trabajos practicos insuficientes", "color:red");
        }


    }

}

