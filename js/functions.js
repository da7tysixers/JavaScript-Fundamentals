// this is a function hoisting training.

calculateAge(1965);


// this is a function decleration.
function calculateAge(year) {
    console.log(2016 - year);
}

// learning how to use function in JS.


//retirement(1990); //would give an error due to execution context not global.


//this is a function expression.
var retirement = function(year) {
    console.log(65 - (2016 - year));
}



var age = 23;
console.log(age);


/*console.log(number);
var number = 22;
*/


function foo() {
    var age = 50;
    console.log(age);
}
foo();


console.log(age);

// using the this keyword on na function.
/* myCalculator(1988);

function myCalculator(year) {
    console.log(2020 - year);
    console.log("-------------------");
    console.log(this);
} */


var person = {
    name: "Emmanuel",
    age: 22,
    calculateYear: function() {
        console.log(this.name);
    }
}


person.calculateYear();



console.log("Hello " - "World");

number = "1234";

for (let index = 0; index < 5; index++) {
    if (number[index] == 3) {
        continue;
    }
    console.log(number[index]);
}


// js calculation
var x = 8 + "8";

console.log(x);

var a = "Per Scholas";

var z = a.lastIndexOf(1);

console.log("it is " + z);


var x = 5;
var y = 6;

var res = eval("x*y");
console.log(res);

var i = 2;
console.log(i != 5);

//var dae = new String("abc");
//var now = new String(abc);

//onsole.log(dae === now);

var firstPerson = {
    firstName: "Emmanuel",
    lastName: "Orubele",
    eyeColor: "blue"
};

for (var i in firstPerson) {
    console.log(i);

}


var myray = [4, 8, 5, 7, 6, 9];
console.log(myray.splice(3).sort());
console.log(myray);

//understand this later.
function fox(n) {
    if (n < 2) { return n; }
    return fox(n - 1) + fox(n - 2);
}


console.log(fox(10));

var name = "Emmanuel";
var name = "John";
console.log(name);

var data = "1+2, 2+3, 3+4, 4+5, 5+1".split(/\s*,\s*/).reverse();
console.log(data[1][0] + data[1][2]);