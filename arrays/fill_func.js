// write a function to create a new array with given values

const fill = (arr_size, value) => new Array(arr_size).fill(value);

const data = 10;
const valueToFill = 'a'; 

console.log(fill(data, valueToFill))
