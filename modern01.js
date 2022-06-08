//Fat Arrow function 

function number(){
  return 10;
}

//basic way fat arrow functions.
let arrFunction1 = () =>{
  return 20;
}

//if there is only 1 statement then we can write like this
let arrFunction2= () => 30; //cant write return syntax, just value

//but when consoloing something, we have to wirte like followng
let arrFunction3= () => console.log(40);

//passing parameter in fat arrow
let arrFunction4_1 = (n) => console.log(n);
//or
let arrFunction4_2 =(n) => n;
//if we have only 1 parameter then.
let arrFunction4_3 = n => n; //but convention is to use brace all the time

console.log(number());
console.log(arrFunction1());
console.log(arrFunction2());
arrFunction3();
arrFunction4_1(50);
console.log(arrFunction4_2(60));
console.log(arrFunction4_3(70));


//Now diff type of utilization of FAT ARROW
console.log('******');

let fatObj1 = {
  name: 'JavaSript',
  frameworks: ['React','Angular','Vue'],
  printMyLove: function(){
    this.frameworks.forEach(function(elem){
      console.log(`${this.name} loves ${elem}`);
    })
  }
}
fatObj1.printMyLove();

//above code will run but everytime 'this' is calling something
//it will not call the name=javascript that we want. it will go to 
//window objec and call nothing. why ? cause foreach function is 
//using callback fucntion and this callback function dont recongnize
//this as a property of fatObj object. thats why it will be undefined.
//but rest of the thing will print as usual. 

//so how we can avoid this problem 
//one = saving a 'this' to a variable before getting into foearch
//two = using fat arrow like following. 

let fatObj2 = {
  name: 'JavaSript',
  frameworks: ['React','Angular','Vue'],
  printMyLove: function(){
    this.frameworks.forEach((elem) => console.log(`${this.name} loves ${elem}`));
  }
}
fatObj2.printMyLove();
//now it will work as we want, as, we have used arrofucntion, and arrow
//fucntion remember this as its own context value. meaning, arrow function 
//always uses this in the context and topic or object or fucntion of its own
//context. means wherever it is, it will count this as its own. So it will
//not reffer 'this' to window object. but just its object of function.


// two other important things about arrow fucntion 
//one= in addeventlistner be careful using arrow and normal fucntion
//as its going to do its task according to its nature. So dom sometimes
//has its own nature so it sometimes does not work according to your demand

//two= when we are using 'new' keyword to open a fucntion and if the fucn
//is normal fucntion then both 'this' and 'new' keyrowd works to create another object
//but if its ARROW then it does not. why ? cause arrow is not constructor fucntion as
//normal fucntion. so arrow itself has its own logic. 

//so remember these 2 rule. 