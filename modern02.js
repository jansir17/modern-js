// Truthy/false value

const myVar = [];

// false, null, Nan, "" , undefined, 0 
//above 6 are all false value and if any booelan truthy check
//it will always return false. simple
if(myVar){
  console.log('i am truthy');
}
else{
  console.log('I am falsy');
}

let obj1= {
  x:1,
  y:2
}

let obj2= {
  a:3,
  b:4,
}
console.log({...obj1,...obj2});

//detructuring examples

let obj3= {
  id: 123,
  name: 'jansir',
  age: 29,
}

const {id}=obj3;
console.log(id); //will print 123

//now diff way, where we can change name of the variable of real variable

const {name: balchal}=obj3;
console.log(balchal);

//lets take another object with nested object

let obj4= {
  id: 123,
  name: 'jansir',
  age: 29,
  education: {
    subject: 'cse',
  },
}

const {education: {subject}}=obj4;
console.log(subject);
//we can also change the name of the variable as previous 
const {education: {subject: balchal2}}=obj4;
console.log(balchal2);


//Array destructuring 

let arr01= [1,2,3,5,6,7];
//now how can we have element 3 and 4 destructring ?

let [,,a,,b]=arr01;
console.log(a,b); //will print 3 and 6
//now what if we have nested array ? 
let arr02= [1,2,3,[100,200,300],5,6,7];
//if we want 200 and 300 ?
let [,,,[,x,y]]=arr02; 

//remember we can not assign same variable name in one js file.
//so thats why x and y. 
console.log(x,y);

//now lets swap values using destructuring 
console.log('*****');
console.log(a,b,x,y); // 3 6 200 300 
[a,b] = [x,y];
console.log(a,b,x,y); // 200 300 3 6 

//now exporting some values to file modern03.js

export let export01 = 1;
export let export02 =2;