let cont = 0
let suma = 0
let promedio = 0
let num = parseInt(prompt("Ingrese un numero:"))
let mayor = num
let menor = num

while (num != 0 && num > 0){
    suma = suma + num;
    cont = cont +=1;
    num = parseInt(prompt("Ingrese un numero (Para finalizar ingrese 0):"));
    if (num > mayor){
        mayor = num
    };
    if (num < menor && num != 0){
        menor = num
    }
}
if (num == 0){
    promedio = suma/cont;
    console.log("El promedio es:", promedio);
    console.log("El mayor valor es:", mayor);
    console.log("El menor valor es:", menor);
    console.log("Cantidad de numeros", cont);
}
    
    