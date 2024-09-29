// This is a comment
// console.log('Hello World')
// console.log('I like Pizza!')

// window.alert('This is an alert!')
// window.alert('I like Pizza')

// document.getElementById('myH1').textContent = 'Hello';
// document.getElementById('myP').textContent = 'I Like Pizza';

// let x;
// x = 100;

// console.log(`I might live up to ${x} years`);

// const age = document.getElementById("age");
// const Result = document.getElementById('Result')

// myButton.onclick = function(){
//     age = age.value;
//     age = Number(age)
//     if(age >= 18){
//         Result.textContent = "You are old enough to enter this site"
//     }
//     else if(age <0){
//         Result.textContent = "Your age cannot be below 0"
//     }
//     else{
//         Result.textContent = "You must be 18+ to enter this site"
//     }
// }


// Method Chaining

// function display(result){
//     console.log(result);
// }

// function add(num1, num2, myCallback){
//     let sum = num1 + num2;
//     myCallback(sum)
// }

// add(10, 20, display)

// let sum = function (x, y){
//     return x + y;
// }

// console.log(sum(10, 15))

// class Person{
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// person1 = new Person("Spongebob", "30", "123 Conch St.", 
//                                         "Bikini Bottom", 
//                                         "Int. Waters");

// person2 = new Person("Patrick", "25", "128 Conch St.", 
//                                         "Bikini Bottom", 
//                                         "Int. Waters");
// person3 = new Person("Squidward", "50", "128 Conch St.", 
//                                         "Bikini Bottom", 
//                                         "Int. Waters");

// console.log(person1.address);

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];

// shuffle(cards);

// console.log(cards);

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         array[i], array[random] = [array[random], array[i]];
//     }
// };
// Date(year, month, day, hour, minute, second, ms)

// const myBox = document.getElementById("box");

// myBox.addEventListener('mouseover', () => {
//     myBox.textContent = "Dont't do it";
//     myBox.style.textAlign = 'center';
//     myBox.style.backgroundColor = 'yellow';
// })
// myBox.addEventListener('mouseout', () => {
//     myBox.textContent = 'Click Me';
//     myBox.style.backgroundColor = 'lightgreen';
// })

// myBox.addEventListener('click',() => {
//     myBox.textContent = "Ouch!";
//     myBox.style.backgroundColor = 'tomato';
// })

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');

const basicPrice = document.getElementById('basicPrice');
const basicStorage = document.getElementById('basicStorage');
const shareStorage = document.getElementById('shareStorage');
const basicMonthly = 19.99;
let maxBasicStorage = 500;
let maxShareStorage = 3;

basicPrice.textContent = '$19.99';
basicStorage.textContent = `${maxBasicStorage} GB Storage`;
shareStorage.textContent = `Send up to ${maxShareStorage} GB`;
basicPrice.style.fontSize = '2.5rem';

option1.addEventListener('click', () => {
    basicPrice.textContent = `$${basicMonthly}`;
    basicStorage.textContent = `${maxBasicStorage} GB Storage`;
    shareStorage.textContent = `Send up to ${maxShareStorage} GB`;
})

option2.addEventListener('click', () => {
    annualPay = basicMonthly * 12;
    maxABS = maxBasicStorage * 12;
    maxASS = maxShareStorage * 12;
    basicPrice.textContent = `$${annualPay}`;
    basicStorage.textContent = `${maxABS} GB Storage`;
    shareStorage.textContent = `Send up to ${maxASS} GB`;
})

// Box 2 JS
const proPrice = document.getElementById('proPrice');
const proStorage = document.getElementById('proStorage');
const proShareStorage = document.getElementById('proShareStorage');
const proMonthly = 24.99;
let maxProStorage = 1;
let maxProShareStorage = 10;

proPrice.textContent = '$24.99';
proStorage.textContent = `${maxProStorage} TB Storage`;
proShareStorage.textContent = `Send up to ${maxProShareStorage} GB`;
proPrice.style.fontSize = '2.5rem';

option1.addEventListener('click', () => {
    proPrice.textContent = `$${proMonthly}`;
    proStorage.textContent = `${maxProStorage} TB Storage`;
    proShareStorage.textContent = `Send up to ${maxProShareStorage} GB`;
})

option2.addEventListener('click', () => {
    annualProPay = proMonthly * 12;
    APS = maxProStorage * 12;
    APSS = maxProShareStorage * 12;
    proPrice.textContent = `$${annualProPay}`;
    proStorage.textContent = `${APS} TB Storage`;
    proShareStorage.textContent = `Send up to ${APSS} GB`;
})

// Box 3 JS

const masterPrice = document.getElementById('masterPrice');
const masterStorage = document.getElementById('masterStorage');
const masterShareStorage = document.getElementById('masterShareStorage');
const masterMonthly = 39.99;
let maxMasterStorage = 2;
let maxMasterShareStorage = 30;

masterPrice.textContent = '$24.99';
masterStorage.textContent = `${maxMasterStorage} TB Storage`;
masterShareStorage.textContent = `Send up to ${maxMasterShareStorage} GB`;
masterPrice.style.fontSize = '2.5rem';

option1.addEventListener('click', () => {
    masterPrice.textContent = `$${masterMonthly}`;
    masterStorage.textContent = `${maxMasterStorage} TB Storage`;
    masterShareStorage.textContent = `Send up to ${maxMasterShareStorage} GB`;
})

option2.addEventListener('click', () => {
    annualMasterPay = masterMonthly * 12;
    AMS = maxMasterStorage * 12;
    AMSS = maxMasterShareStorage * 12;
    masterPrice.textContent = `$${annualMasterPay}`;
    masterStorage.textContent = `${AMS} TB Storage`;
    masterShareStorage.textContent = `Send up to ${AMSS} GB`;
})