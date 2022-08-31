function factorial() {
    var number = prompt("Introduce un número entero");

    var result = 1;

    for (i = 1; i <= number; i++) {
        result = i * result;
    }

    alert("El resultado es: " + result);

}

