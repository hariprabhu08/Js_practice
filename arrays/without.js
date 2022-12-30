// The method should return an array without listed values. 

const without = (array, ...args) => {
    let filteredArray = [...array];

    for(let i=0; i<args.length; i +=1) { 
     filteredArray = filteredArray.filter((el) => el !==args[i] );
    }
    return filteredArray;
};
const data = [1,2,3,4,5,6,7,8,9,0]

console.log(without( data, 2,3));
