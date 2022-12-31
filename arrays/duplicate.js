// write the method to returns a duplicate-free Array
// const data = [1,2,3,4,5,0,1,2,4]

var data = ['india', 'USA', 'Canada', 'Anand', 'Raju', 'USA','Canada','Ram'];
const duplicateFree = (unique) => Array.from(new Set(unique));

console.log(duplicateFree(data));
