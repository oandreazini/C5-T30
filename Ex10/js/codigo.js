var text = prompt("Introduce un texto");

function palindorm(text) {

    // Pasar a minusculas
    var minusString = text.toLowerCase();

    // Pasamos la cadena a un array
    var deleteSpace = minusString.split("");

    // Eliminar los espacios
    var space = "";
    for (i in deleteSpace) {
        if (deleteSpace[i] != " ") {
            space += deleteSpace[i];
        }
    }

    var words = space.split("");
    var reverseWords = space.split("").reverse();

    var same = true;
    for (i in words) {
        if (words[i] == reverseWords[i]) {
        }
        else {
            // Alguna letra es distinta
            same = false;
        }
    }

    if (same) {
        alert("El texto introducido es un palíndromo");
    }
    else {
        alert("El texto introducido no es un palíndromo");
    }
}

palindorm(text);
