"use strict";
let result = 0;
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

let n1 = prompt('Are My Name Rawan?').toUpperCase();
let n2 =  prompt('Am I Currently Student?').toUpperCase();
let n3 =  prompt('Is My Passion Programming?').toUpperCase();
let n4 =  prompt('Is Iy Favorite Hobby Reading?').toUpperCase();
let n5 =  prompt('is My Favorite Animal Dog').toUpperCase();

let number = 100;
let counter = 0;

for (let i = 1; i<=4; i++){
    let n6 = prompt('Enter Any Nmber Please');

    if( parseInt(n6) > number ){
        alert('Too High');
    }
    else if( parseInt(n6) < number ){
        alert('Too Low');
    }
    else if(n6 === ""){
        alert('You Must Enter A Number');
    }
    else{
        counter++;
        alert('Congrats You Enter The Exact Number Which Is '+number+', After Number Of Attempts Equal to '+counter);
        result++;
        break;   
    }
    counter++;
}
alert('You Have Exceeded The Number Of Times Available To Enter The Correct Number Which Is '+counter+', The Correct Number Is 100');






//let MyArr = ['phone','tv','lapto','watch','airpods','ipad'];

/*for (let i1 = 1; i1 <= 6; i1++){
    let n7 = prompt('Please Enter The Smart Devices That You Have, HINT Use Smart Phone, Smart Tv, Laptob, Smart Watch, Airpods, Ipad, Or Any Other Devices').toLowerCase();
    for (let i2 = 0; i2 < MyArr.length; i2++){
        if(n7 === MyArr[i2].toLowerCase()){
        prompt('Your Guess Is True, Try Another One');
        alert('Well Done, There Are Correct Answers Which Are '+'<p>'+MyArr[i2]+'</p>');
    }
    else{
        prompt('Your Guess Is Not True! Try Again');
    }
}}

alert('You Have Exceeded The Number Of Times Available To Enter The Answer');
*/




let k = 1;
let MyArr = ['phone', 'tv', 'laptob', 'watch', 'airpods', 'ipad'];
// eslint-disable-next-line no-unused-vars
while (k <= 6) {
    let n7 = prompt('Please Enter The Smart Devices That You Have, HINT Use Smart Phone, Smart Tv, Laptob, Smart Watch, Airpods, Ipad, Or Any Other Devices').toLowerCase();
  for (let j = 0; j < MyArr.length; j++) {
    if (n7.toLowerCase() === MyArr[j].toLowerCase()) {
        prompt('Your Guess Is True, Try Another One');
        alert('Well Done, There Are Correct Answers Which Are '+'<p>'+MyArr[i2]+'</p>');
      console.log('you are correct' + MyArr);
      result++
      break;
    }
  }k++;
  
}
//lab3 results of te total correct answers//




switch(n1){
    case "YES":
        alert('Thats Correct You Guess My Name');
        console.log('Thats Correct You Guess My Name which is: '+'RAWAN');
        result++;
        break;

    default:
        alert('Your Guess About My Name Not Correct!');
        break;    
}


switch(n2){
    case "NO":
        alert('Thats Correct, Your Guess That I Am Not Student Is True');
        console.log('Thats Correct You Guess The Answer Which Is: I Am Not Student');
        result++;
        break;

    default:
        alert('Your Guess About If I Am Not Currently A Student Is Not Correct!');
        break;    
}


switch(n3){
    case "YES":
        alert('Thats Correct, Your Guess Is Right About What Is My Passion');
        console.log('Thats Correct, You Guess What Is My Passion which is: '+n4);
        result++;
        break;

    default:
        alert('Your Guess About My Passion  Not Correct!');
        break;    
}

switch(n4){
    case "YES":
        alert('Thats Correct, Your Guess Is Right About My Favorite Hoppy');
        console.log('Thats Correct, You Guess What Is My Favorite Hoppy which is: '+n1);
        result++;
        break;

    default:
        alert('Your Guess About My Favorite Hoppy Not Correct!');
        break;    
}

switch(n5){
    case "YES":
        alert('Thats Correct, Your Guess Is Right About My Favorite Animal');
        console.log('Thats Correct, You Guess What Is My Favorite Animal which is: '+n6);
        result++;
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


alert('HELLO ' + p1 + ' THANKS AGAIN FOR ANSWERING THE QUESTIONS, I APPRECIATE THAT, NICE TO MEET YOU.');


if (result > 4) {
    alert('Thank You ' + p1 + 'The Result Equal ' + result + ',your information about me very good');
  }
  else {
    alert('Thank You ' + p1 + 'For Trying The Result Equal ' + result + ',you dont know me very well');
  }