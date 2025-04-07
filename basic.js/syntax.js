var x = 10
//console.log(x);
x = 20
//console.log(x);
var x = 101
//console.log(x);

let y = 10
//console.log(y);
y = 20
//console.log(y);
//let y = 30
//console.log(y);

const z = 201
//console.log(z);
//z = 202
//console.log(z);

//................................control flow........................................//
//1. if-else
let age = 7
if(age >= 18) {
    //console.log('you can vote');
} else if (age <= 18) {
    //console.log('you cannot vote');
} else {
    //console.log('you are over age');
}

let age1 = 20
let hasID = false
if (age1 >= 25 || hasID) {
    console.log('Access accepted !!');
} else {
    ////console.log("Access denied !!");
}

let A = true
//console.log(!A);


let a = 20
//console.log(a);

//3. Terrnory operator //
let marks_1 = 100
let result = (marks_1 >= 200)? console.log("You are pass") : console.log("You are fail");

//4. Switch case//
let day = " "
switch (day) {
    case "Monday":
        //console.log("Weekend is over");
        break;
    case "Tuesday":
        //console.log ("Jai bajrangbali")
        break;
    case "Wednesday":
        //console.log("Weekend is comming");
    default:
        //console.log("Oye sunday aa gya oyeeeeeeee !!!!!");
        break;
}

// ..................................... LOOPS ............................ //
//1. for loop//
for (let i = 0; i <= 5; i++) {
    //console.log("Hello");
}

let arr = [1,2,3,4,5,6,7,8,9,10]
for (arr = 5; arr <= 7; arr++){
   // console.log(arr);
    
}

//2. while loop//
let x_1 = 2
while (x_1 <= 5){
    //console.log("My name is kashish");
    x_1++
}

let myArr = ["Kashish", "Harsh", "Shiva", "Himanshu", "ayushi", "shweta", "Aishwarya"]
let array = 5
while(array <= myArr.length) {
    //console.log(myArr);
    
    //console.log(`valuse is ${myArr[array]}`);
    myArr++
    
}

//do-while loop//
let num1 = 5
do {
    //console.log(`Number is ${num1}`);
    num1++
    
} while (num1 <= 10)

let arr1 = ["lio", "tiger", "lion", "pahad", "water", "stone"]
let doArr = 2
do{
    //console.log(`String is ${arr1}`);
    //console.log(`String is ${doArr}`);
    doArr++
}while(doArr <=5)

//4.for-each//
let myName = ["kanika", "Anjali", "rupali", "ashwin", "parth", "gudiya", "chanchal"]
//myName.forEach(name => console.log(name));
myName.forEach(function(index, item, name) {
    console.log(index,item, name);
    
})

//object within array
let fruit = [
    {
        fruitName: "Apple",
        fruitColor: "Red",
    },
    {
        fruitName: "Banana",
        fruitColor: "Yello",
    },
    {
        fruitName: "Grapse",
        fruitColor: "Green",
    },
    {
        fruitName: "Strawberry",
        fruitColor: "Pink"
    }
]
//fruit.forEach(name => console.log(name))

fruit.forEach(function(item){
    console.log(` ${item.fruitName} is of ${item.fruitColor} color`)
})

fruit.forEach(item => {
    console.log(`item: ${item.fruitName}`);
    
})

//5.for-of loop//
let array_1 = ["Kashish", "Harsh", "Priyush", "Akhbar", "Birbal"]
for(const object of array_1){
    //console.log(object);
    //console.log(`Each element of ${array_1}`);
}

let hi = "hello world"
for(const greet of hi) {
    //console.log(`each element is ${greet}`);
}


//6.for-in loop//
let obj1 = {
    firstName: "Kashish",
    Rollno: 25,
    school: "K.V.NO.3",
}
for (const key in obj1) {
    //console.log(`key: ${obj1[key]}`);
}

// .................. function .................. //
// this sytax is called function declaration //

console.log(greet('Kashish'));
function greet (name) {
    return `Hey !! Goodmorning ${name}`
}
//console.log(greet('Kashish'));

// this syntax is function expression//
//console.log(fn(10 , 25));
const fn = function (a , b) {
    return a + b
}
console.log(fn(10, 25));

const obj = {
    name: "Kashish",
    rollNo: 20,
    class: 5+'th', 
    school: "K.V.No.3",
    fn: function objObject () {
        return `My name is ${this.name} and i stud in ${this.school}`
    }

}
console.log(obj.fn);

function obj_access (){
    return `My name is ${obj.name} and i study in class ${obj.class}` // this is how we can add object details in fumction//
}
console.log(obj_access());

const Arr_1 = ["Kashish", 12 , "Aishwarya", 20, "Kanika", 35, "Ayushi", 30]
function array_access () {
    return `My name is ${Arr_1[0]} and my rollNo is ${Arr_1[1]}`
}
console.log(array_access());




















