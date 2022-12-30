// write a method that clears all the unwantted & prin tonly th eintegers in the arryay fromat

const data = [ 1, undefined, false, 2, 3,'', null, '','',4];

let cleararr = (array) => array.filter((el) => el);

console.log(cleararr(data));
