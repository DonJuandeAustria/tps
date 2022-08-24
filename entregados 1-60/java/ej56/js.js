var cadena = prompt("Inserte una cadena");
var caracter = prompt("Inserte un caracter");
var i = 0;
while (i < cadena.length) {
    document.write (cadena.charAt(i) + caracter + " ");
    i++;
    if (i < cadena.length) {
        document.write ("")
    }
}



