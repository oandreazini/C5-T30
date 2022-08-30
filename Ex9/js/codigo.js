var text = prompt("Introduce un texto");

function compare(text) {

    // compruebo si el string es igual al string puesto en minúsculas
    if (text === text.toLowerCase()) {
        alert("La palabra esta compuesta de minusculas");
    }
    // compruebo si el string es igual al string puesto en mayúsculas
    else if (text === text.toUpperCase()) {
        alert("El texto solo contiene mayusculas");
    } else {
        alert("El texto tiene minusculas y mayusculas");
    }
}

compare(text);