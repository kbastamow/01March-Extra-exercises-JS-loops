console.log("Loop exercices extras 1st March")


// Imprimir los números del 21 al 34 en la consola.
console.log("Console log numbers:");


for (let i = 21; i <= 34; i++) {
    console.log(i);

}


// Sumar los números del 1 al 10 y mostrar el resultado en la consola.

console.log("Sum 1-10:");

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);


// Dado un array de números, imprimir en la consola la suma de todos los números.
console.log("Sum of numbers:");


const array = [2, 5, 3, 5, 5];
let sumTwo = 0;

for (number of array) {
    sumTwo += number;
}

console.log(sumTwo);



// Imprimir los números del 1 al 10 en la consola, pero solo los pares.
console.log("Even numbers:");

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) console.log(i);

}

// Imprimir los números del 1 al 10 en la consola, pero solo los impares.
console.log("Odd numbers:");

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) console.log(i);
}


// Imprimir los números del 1 al 20 en la consola, pero para los múltiplos de 3 imprimir "Fizz", para los múltiplos de 5 imprimir "Buzz" y para los múltiplos de ambos imprimir "FizzBuzz".
console.log("Fizz and Buzz:");

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


// Dado un array de números, imprimir en la consola solo los números pares.

console.log("Show even numbers:");


const arrayTwo = [18, 14, 23, 20, 99, 100, 142, 1000, 133, 133];

for (number of arrayTwo) {
    if (number % 2 == 0) console.log(number);
}



// Dado un array de números, imprimir en la consola solo los números mayores a 5.
console.log("Show numbers larger than 5:");


const arrayThree = [3, 5, 7, 78, 1, 6];

for (number of arrayThree) {
    if (number > 5) console.log(number);
}



// Dada una lista de nombres, imprimir solo los nombres que empiezan con la letra "A".
console.log("Names with A:");

const arrayFour = ["Anna", "Berta", "Alfred", "Philip"];

for (person of arrayFour) {
    if (person[0] === "A") console.log(person);
}


// Dada una lista de números, encontrar el número más grande y el número más pequeño.

//Using arrayTwo of exercise above 

console.log("highest and lowest:");


let highest = arrayTwo[0];  //To be able to compare negative numbers too
let lowest = arrayTwo[0];

for (let i = 1; i < arrayTwo.length; i++) {
    if (arrayTwo[i] > highest) {
        highest = arrayTwo[i];
    }

    if (arrayTwo[i] < lowest) {
        lowest = arrayTwo[i];
    }
}
    console.log("highest: " + highest);
    console.log("lowest: " + lowest);


