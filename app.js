'use strict'
let userAnswer= [];

let name = prompt ('what is your name?');
// console.log(name);
userAnswer.push(name);
console.log(userAnswer);

let gender = prompt ('what is your gender? (male or female)');
if(gender == 'female' || gender == 'male')
{
    userAnswer.push(gender);
}
else
{
    alert('gender shoud either be male or female');
    userAnswer.push(gender);

}

let age = parseInt(prompt("How old are you"));
if(age <= 0)
{
    alert('age shoud not be less than or equal to 0')
    userAnswer.push(age); 
}
else
{
    userAnswer.push(age); 
}

let skip = confirm('skip the welcoming message?');

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
        if (gender == null) 
        {
            confirm("welcome " + name);
            userAnswer.push(gender); 

        }
        else{
            if(gender != 'female' || gender != 'male' || gender != null)
            {
                confirm("welcome " + name);
                userAnswer.push(gender); 

            }
        }
    }
}
}

let inquiries = confirm("do you have any inquiries?");
let inq = prompt('you can to put your inquiries here' );

if (inquiries == true) {
    userAnswer.push(inq);

} 
   if (inq == null) {
        console.log("invalid string");
 }

// function ifEmpty()
// {
//     if (inq == null) {
//         console.log("invalid string");
//     }
// }
// ifEmpty();

let like = confirm("do you have any suggistion?");
let sug = prompt('you can to put your suggistion here' );

if (like == true) {
    userAnswer.push(sug);
}
// function ifEmpty2()
// {
//     if (sug == null) {
//         console.log("invalid string");
//     }
// }
// ifEmpty2();

// function Traverse()
// {
// for (let i = 0; i < userAnswer.length; i++) {
//     console.log(userAnswer[i]); 

//     return userAnswer[i];
// }
// }
// Traverse(userAnswer[i]);
for (let i = 0; i < userAnswer.length; i++) {
    console.log(userAnswer[i]); 
}