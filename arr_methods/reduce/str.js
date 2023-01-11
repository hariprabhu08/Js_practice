var authors = [{
  name: "a"
}, {
  name: "b"
}, {
  name: "c"
}];

var check = authors.reduce((acc, curr,val ) => {
    let join = acc.length ? '':"";
    return acc +join + curr.name; 
},'')
console.log(check)
