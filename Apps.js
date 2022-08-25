class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir() {
        if (this.iniciada == false && this.instalada == true) 
            this.iniciada = true;
            alert("app iniciada");
    }

    cerrar() {
        if (this.iniciada == true && this.instalada == true)
            this.iniciada = false;
            alert("app cerrada");
    }

    instalar() {
       if (this.instalada == false)
           this.instalada = true;
           alert("app instalada");
    }

    desinstalar() {
        if (this.instalada == true)
        this.instalada = false;
        alert("app desinstalada");
    }

    appInfo() { 
        return `
        Descargas: ${this.descargas}<br>
        Puntuación: ${this.puntuacion}<br>
        Peso: ${this.peso}<br>

        `
    }
}