// write a method that returns an object of key-value pairs

const data = [['India', 'delhi'], ['USA','Wasington'], ['Australia' ,'sydney']]

const createPair = (pairs) => pairs.reduce((country, capital) => {
     if (Array.isArray(capital)) {
        country[capital[0]] =capital[1];
     }
     return country;
},{}) ;
console.log(createPair(data));

