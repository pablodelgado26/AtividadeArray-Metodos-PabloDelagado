// .Contact unir valores ou Arrays e retorna uma nova Array com todos valores com a ordem passada.
let a = [1, 2, 3,];
let b = [4, 5, 6,];

let sequencia = a.concat(b);
console.log(sequencia);

// .Slice retorna uma copia de array sem algumas index (sempre tira index em Array sobre porções).

let frutas = ["Banana", "Uva", "Morango", "Laranja", "jambo"];

let melhoresFrutas = frutas.slice(1, 3);
console.log(melhoresFrutas);

// .Sort exibe números de Array em ordem crescente ou decrescente

let numbers = [5, 4, 3, 2, 1];
numbers.sort()

console.log(numbers);