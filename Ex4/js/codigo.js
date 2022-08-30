const valores = [true, 5, false, "hola", "adios", 2];

if (valores[3] < valores[4]) { 
    console.log(valores[3]+ ' es menor que ' + valores[4])
  } else if (valores[3] > valores[4]) {
    console.log(valores[3] + ' es mayor que ' + valores[4])
  } else {
    console.log(valores[3] + ' y ' + valores[4] + ' son iguales.')
  }

if(valores[1] > valores[5]) {
    console.log(valores[0]);
} 

if(valores[1] >  valores[5]){
    console.log(valores[2]);
}

let suma = valores[1] + valores[5];
console.log(suma);

let resta = valores[1] - valores[5];
console.log(resta);

let multi = valores[1] * valores[5];
console.log(multi);

let div = valores[1] / valores[5];
console.log(div);

let modul = valores[1] % valores[5];
console.log(modul);

