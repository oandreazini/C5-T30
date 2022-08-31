function compare(text) {

    var text = prompt("Introduce un texto");

    // compruebo si el string es igual al string puesto en minúsculas
    if (text === text.toLowerCase()) {
        alert("El texto solo contiene minusculas");
    }
    // compruebo si el string es igual al string puesto en mayúsculas
    else if (text === text.toUpperCase()) {
        alert("El texto solo contiene mayusculas");
    } else {
        alert("El texto tiene minusculas y mayusculas");
    }
}

compare(text);