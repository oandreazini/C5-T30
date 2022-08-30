var number = prompt("Introduce un número entero");

function enter(number) {
    if (number % 2 == 0) {

        alert("El número " + number + " es par");

    } else {

        alert("El número " + number + " es impar");

    }
}

enter(number);