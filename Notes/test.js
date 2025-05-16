
let b1 = true;
let b2 = false;
let x = NaN;

if(x){
    console.log(`${x} is truely value`);
}else{
    console.log(`${x} is falsely value`);
}

function add(a, b){
    return a + b;
}

let add1 = function(a, b){
    return a + b;
};

let add2 = (a, b) => {  
    return a + b;
}   

let add3 = (a, b) => a + b;

console.log(add(10,20));
console.log(add1(10,20));
console.log(add2(10,20));
console.log(add3(10,20));

