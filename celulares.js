class Celular {
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
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tañamo: <b>${this.resolucionPantalla}</b><br>
        Resolución de cámara: <b>${this.resolucionCamara}</b><br>
        Memoria: <b>${this.memoria}</b><br>
        `;        
    }
}


class CelularAltaGama extends Celular {
    constructor(color, peso, rp, rc, memoria, camaraExtra) {
        super(color, peso, rp, rc, memoria);
        this.camaraExtra = camaraExtra;
    }

    grabarSuperLento() {
        alert(`grabando video en cámara super lenta`);
    }

    reconocimientoFacial() {
        alert(`reconociendo cara`);
    }

    mostrarInfo() {
        return super.mostrarInfo() + `Cámara Extra: <b>${this.camaraExtra}</b><br>`;
    }
}





