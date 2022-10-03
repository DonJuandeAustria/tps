class CEmpleado {
    constructor(nombre, anioIngreso, salario, direccion) {
        this.nombre = nombre;
        this.anioIngreso = anioIngreso;
        this.salario = salario;
        this.direccion = direccion;
    }
}

let empleado1 = new CEmpleado("Robert", 1994, 20000, "64C- WallsStreat");
let empleado2 = new CEmpleado("Sam", 2000, 20000, "68D- WallsStreat");
let empleado3 = new CEmpleado("John", 1999, 20000, "26B- WallsStreat");

console.log("Nombre: " + empleado1.nombre);
console.log("Año de ingreso: " + empleado1.anioIngreso);
console.log("Direccion: " + empleado1.direccion);

console.log("Nombre: " + empleado2.nombre);
console.log("Año de ingreso: " + empleado2.anioIngreso);
console.log("Direccion: " + empleado2.direccion);

console.log("Nombre: " + empleado3.nombre);
console.log("Año de ingreso: " + empleado3.anioIngreso);
console.log("Direccion: " + empleado3.direccion);

document.write(
    "<table border='0' cellpadding='2' cellspacing='2'>" +
    "<tr><td>Nombre</td><td>Año de ingreso</td><td>Direccion</td></tr>" +
    "<tr><td>" + empleado1.nombre + "</td><td>" + empleado1.anioIngreso + "</td><td>" + empleado1.direccion + "</td></tr>" +
    "<tr><td>" + empleado2.nombre + "</td><td>" + empleado2.anioIngreso + "</td><td>" + empleado2.direccion + "</td></tr>" +
    "<tr><td>" + empleado3.nombre + "</td><td>" + empleado3.anioIngreso + "</td><td>" + empleado3.direccion + "</td></tr>" +
    "</table>"
);
