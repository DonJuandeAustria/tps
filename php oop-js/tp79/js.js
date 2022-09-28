class CRectangulo {
    constructor(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }

    CalcularArea() {
        return this.largo * this.ancho;
    }
}

let rectangulo1 = new CRectangulo(4, 5);
let rectangulo2 = new CRectangulo(5, 8);

console.log(rectangulo1.CalcularArea());
console.log(rectangulo2.CalcularArea());