class Calculadora {
    constructor() {

    }

    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }

    potencia(num, exp) {
        return num**exp;
    }

    raiz2(num) {
        return Math.sqrt(num);
    }

    raiz3(num) {
        return Math.cbrt(num);
    }
}