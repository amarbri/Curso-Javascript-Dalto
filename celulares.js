class celular {
    constructor (color, peso, rp, rc, memoria) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = rp;
        this.resolucionCamara = rc;
        this.memoria = memoria;
        this.encendido = false;
    }
    
    prender() {
        if (this.encendido == false) {
            alert("celular encendido");
            this.encendido = true;
        }
        else {
            alert("el celular ya está encendido");
        }
    }
    
    reiniciar() {
        if (this.encendido == true) {
            alert("el celular se está reiniciando");
        }
        else {
            alert("el celular no se puede reiniciar porque está apagado");
        }
    }

    apagar() {
        if (this.encendido == true) {
            alert("celular apagado");
            this.encendido = false;
        }
        else {
            alert("el celular ya está apagado");
        }
    }

    tomarFoto() {
        alert(`foto tomada en una resolución de ${this.resolucionCamara}`);
    }

    grabar() {
        alert(`grabando video en resolución ${this.resolucionCamara}`);
    }

    mostrarInfo() {
        
    }
}




