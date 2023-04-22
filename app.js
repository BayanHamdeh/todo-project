'use strict'
let userAnswer = [];

let name = prompt('what is your name?');

userAnswer.push(name);
console.log(userAnswer);

let gender = prompt('what is your gender? (male or female)');
if (gender == 'female' || gender == 'male') {
    userAnswer.push(gender);
}
else {
    alert('gender shoud either be male or female');
    userAnswer.push(gender);

}

let age = parseInt(prompt("How old are you"));
if (age <= 0) {
    alert('age shoud not be less than or equal to 0')
    userAnswer.push(age);
}
else {
    userAnswer.push(age);
}

let skip = confirm('skip the welcoming message?');

if (skip == true)
{
    skip = true;
}
else {
    if (gender == 'female') {
        confirm("welcome Ms " + name);
    }

    else {
        if (gender == 'male') {
            confirm("welcome Mr " + name);
        }
        else {
            if (gender == null) {
                confirm("welcome " + name);
                userAnswer.push(gender);

            }
            else {
                if (gender != 'female' || gender != 'male' || gender != null) {
                    confirm("welcome " + name);
                    userAnswer.push(gender);

                }
            }
        }
    }
}



let inq = prompt('Do you like the new virsion ');
if (inq ==='') {
    inq = 'Invalid1';
}
userAnswer.push(inq);

let sug = prompt('Do you have any suggistion ');
if (sug ==='') {
    sug = 'Invalid2';
}
userAnswer.push(sug);

let std = prompt('are you studying');
if (std ==='') {
    std='Invalid3';
}
userAnswer.push(std);




function Traverse(arr) {
    for (let i = 0; i < userAnswer.length; i++) {
        console.log(arr[i]);

    }
}
Traverse(userAnswer);
