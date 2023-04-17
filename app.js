'use strict'
// alert("Hi Welcomr to our website");
// confirm("Do you like our website");

// let userAnswer = prompt('what is your name?');
// console.log('userAnswer >>>', userAnswer);

// prompt ('what is your name?');
// let userInput = prompt ('what is your name?');
//اذا بدنا نحول الجملة اللي فوق من string  ل int >> ParseInt
let name = prompt ('what is your name?');

let gender = prompt ('what is your gender? (male or female)');
if(gender != 'female' ||  gender != 'male')
{
    alert('gender shoud be either male or female')
}

let age = parseInt(prompt("How old are you"));
if(age <= 0)
{
    alert('age shoud not be less than or equal to 0')
}
// confirm('skip the welcoming message?');
skip = confirm('skip the welcoming message?');
if (skip == true)
{
    console.log(skip)
}
else
{
    if(gender == 'female')
{
    confirm("welcome Ms " + name);
}

else
{
    if(gender == 'male')
    {
        confirm("welcome Mr " + name);
    } 
    
    
       else {
        if (gender == null) {
            confirm("welcome " + name);

        }

    }
    
}
}

