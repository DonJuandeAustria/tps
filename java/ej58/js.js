var cadena = prompt("Inserte una cadena");
var caracter = prompt("Inserte un caracter");
var i = 0;
while (i < cadena.length) {
    if (i % 4 == 0) {
        document.write (caracter);
    } else {
        document.write (cadena.charAt(i));
    }
    i++;
    if (i < cadena.length) {
         ("")
    }
}
