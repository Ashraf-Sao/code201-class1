
"use script";
let welcome;  
    let date = new Date();  
    let hour = date.getHours();  
    let minute = date.getMinutes();  
    let second = date.getSeconds();  
    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (second < 10) {  
      second = "0" + second;  
    }  
    if (hour < 12) {  
      welcome = "good morning";  
    } else if (hour < 17) {  
      welcome = "good afternoon";  
    } else {  
      welcome = "good evening";  
    }  


alert(welcome+' WELCOME TO MY PAGE (ABOUT ME), YOU SHOULD ANSWER SOME QUESTION TO GET IN, THERE IS A HINT FOR THE ANSWER YOU CAN CHANGE IT, AND AFTER THAT I WILL ASK ALSO SOME QUESTION ABOUT YOU TO GET KNOW EACH ANOTHER.');

let n1 = prompt('Are My Name Rawan?');
let n2 =  prompt('Am I Currently Student?');
let n3 =  prompt('Is My Favorite Color Green?');
let n4 =  prompt('Is My Passion Programming?');
let n5 =  prompt('Is Iy Favorite Hobby Reading?');
let n6 =  prompt('is My Favorite Animal Dog');

n1 = n1.toUpperCase();
n2 = n2.toUpperCase();
n3 = n3.toUpperCase();
n4 = n4.toUpperCase();
n5 = n5.toUpperCase();
n6 = n6.toUpperCase();

switch(n1){
    case "YES":
        alert('Thats Correct You Guess My Name');
        //console.log('Thats Correct You Guess My Name which is: '+'RAWAN');
        break;

    default:
        alert('Your Guess About My Name Not Correct!');
        break;    
}


switch(n2){
    case "NO":
        alert('Thats Correct, You Guess That I Am Not Student Is True');
        //console.log('Thats Correct You Guess The Answer Which Is: I Am Not Student');
        break;

    default:
        alert('Your Guess About If I Am Not Currently A Student Is Not Correct!');
        break;    
}


switch(n3){
    case "NO":
        alert('Thats Correct, You Guess My Favorite Color');
        //console.log('Thats Correct, You Guess My Favorite Color which is: '+n3);
        break;

    default:
        alert('Your Guess About My Favorite Color Not Correct!');
        break;    
}

switch(n4){
    case "YES":
        alert('Thats Correct, You Guess What Is My Passion');
        //console.log('Thats Correct, You Guess What Is My Passion which is: '+n4);
        break;

    default:
        alert('Your Guess About My Passion  Not Correct!');
        break;    
}

switch(n5){
    case "YES":
        alert('Thats Correct, You Guess What Is My Favorite Hoppy');
        //console.log('Thats Correct, You Guess What Is My Favorite Hoppy which is: '+n1);
        break;

    default:
        alert('Your Guess About My Favorite Hoppy Not Correct!');
        break;    
}

switch(n6){
    case "YES":
        alert('Thats Correct, You Guess My Favorite Animal');
        //console.log('Thats Correct, You Guess What Is My Favorite Animal which is: '+n6);
        break;

    default:
        alert('Your Guess About My Favorite Animal Not Correct!');
        break;    
}


alert('THANKS FOR ANSWERING THE QUESTIONS I APPRECIATE THAT, NOW I WILL ASK YOU SOME QUESTIONS ABOUT YOUR SELF.');

let p1 = prompt('What Is Your Name?');
let p2 =  prompt('What Is Your Favorite Sport?');
let p3 =  prompt('What Is Your Favorite Sports Team?');
let p5 =  prompt('What is Your favorite hobby?');
let p6 =  prompt('What is Your Favorite Animal?');

alert('HELLO ' + p1 + ' THANKS AGAIN FOR ANSWERING THE QUESTIONS, I APPRECIATE THAT, NICE TO MEET YOU.');
