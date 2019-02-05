//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
class Yelling {
    constructor(yell1, yell2, yell3) {
        this.yell1 = yell1;
        this.yell2 = yell2;
        this.yell3 = yell3;
    }
}
Yelling.prototype.scream = function() {
    return this.yell1 + ", " + this.yell2 + ", " + this.yell3;
}
var animal1 = new Yelling("roar","raaaaaw","rrrrrrrrraaooo");

console.log(animal1.scream());

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var myNiceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNiceArray.slice(4,5));

//3. Delete the last number in the array that you created above.
myNiceArray.pop();
console.log(myNiceArray);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var sentence = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

var bananaSting = "";
function strawBerryToBanana() {
    var stringSplit = sentence.split(" ");
    for (x in stringSplit) {
        bananaSting = sentence.replace("Strawberry", "Banana");
        bananaSting = bananaSting.replace("Strawberries", "Bananas");
        bananaSting = bananaSting.replace("strawberry", "banana");
        bananaSting = bananaSting.replace("strawberries", "bananas");
    }
}
strawBerryToBanana();
console.log(bananaSting);


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
myAwsomeArrayV2 = ["manchester united", "liverpool", "manchester city", "arsenal"];
myAwsomeArraySwaps = ["koenigsegg", "pagani", "bugatti", "lada", "audi", "ferrari", "lamborghini", "jaguar", "honda", "mercedes", "mazda", "bmw", "toyota", "hyundai", "nissan"];
function changeArray() {
    console.log(myAwsomeArray);
    for (x in myAwsomeArray){
       myAwsomeArray[x] = myAwsomeArraySwaps[Math.floor(Math.random() * myAwsomeArray.length)];
    }
    console.log(myAwsomeArray)
}


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
    var mySickArray = [
        person1 = {
            name: "xavier",
            age: 13,
        },
        person2 = {
            name: "Voldemort",
            age: 12,
        },
        person3 = {
            name: "james",
            age: 90,
        }
    ];
console.log(mySickArray);

var myCrazyPerson = mySickArray.filter(x => x.name === "xavier");
console.log(myCrazyPerson);


//7. Create a simple function that logs the date.
function todayDate() {
    day = new Date().getDate();
    month = new Date().getMonth() +1;
    year = new Date().getFullYear();
    console.log(day + "/" + month + "-" + year)
}

//MODULE ASSIGNMENT 2 - LEVEL 2

/*1. What is a function literal?
    kort forklart det er en unnamed funksjon som er assignet til et element for.eks. et objekt.
2. What is the constructor?
    constructor er en funksjon inne i class objekter som gjør det mulig å lage objekter via classes.
3. What does the return statement do?
    Return sender tilbake det du vil den skal returne og hopper så ut av scopet den er inne i.
4. What will be written to the console from this function:
function myFunction(){
    return console.log('inside my function');
    console.log('My name is Andy');
}
myFunction();
dette vil returnere "inside my function" siden du kaller på funksjonen og det er en return statement som er over console.log så den ser return og går ut av funksjonen.

5. Briefly describe scope in JavaScript.
    dette vil si hvor en variabel / funksjon vil kunne bli kaldt fra si du lager en variabel inni en funksjon da vil den variabelen kun eksitere og kunne brukes inni funksjonen sitt scope.*/