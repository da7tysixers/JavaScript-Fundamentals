// create a variable and call it and print it on html page.

var carName = "Music"; // creates and initializes a variable named carName.
document.getElementById("demo").innerHTML = carName;

//javascript creating a method that has lots of parameter.
//a person object
var person = {
    firstName: "Emmanuel",
    lastName: "Orubele",
    age: 22,
    changeName: function(lastName) {
        this.lastName = lastName;
    }
};


console.log(person.firstName);
console.log(person.age);

person.changeName('john');
console.log(person.lastName);


/*
    types of click event/ JS event
    onclick
    onchange
    onmouseover
    onmouseout
    onkeydown
    onload

*/