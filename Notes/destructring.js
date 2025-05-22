let user = {name:'John', age: 30, city: 'New York'};
let {name:firstName, age, city} = user;

/*let name = user.name;
let age = user.age;
let city = user.city;*/

console.log(firstName); // John

let arr = [10,20,30];
/*a = arr[0];
b = arr[1];
c= arr[2];
*/
let [a, b, c] = arr;    


props = {count:10};
console.log(props.count);