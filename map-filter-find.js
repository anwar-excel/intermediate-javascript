const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i]
//     const result = element + element;
//     output.push(result);
// }
// console.log(output);

// const result = numbers.map(x => x * x);
// console.log(result);
// const result = numbers.filter(x => x < 6);
// console.log(result);
// const result = numbers.filter(x => x > 6);
// console.log(result);
const result = numbers.find(x => x > 6);
console.log(result);