
'use strict';

let result = 0;
let welcome;
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
if (minute < 10) {
  minute = '0' + minute;
}
if (second < 10) {
  second = '0' + second;
}
if (hour < 12) {
  welcome = 'good morning';
} else if (hour < 17) {
  welcome = 'good afternoon';
} else {
  welcome = 'good evening';
}


alert(welcome+' WELCOME TO MY PAGE (ABOUT ME), YOU SHOULD ANSWER SOME QUESTION TO GET IN, THERE IS A HINT FOR THE ANSWER YOU CAN CHANGE IT, AND AFTER THAT I WILL ASK ALSO SOME QUESTION ABOUT YOU TO GET KNOW EACH OTHER.');

let n1 = prompt('Is My Name Rawan?').toUpperCase();
let n2 =  prompt('Am I Currently Student?').toUpperCase();
let n3 =  prompt('Is My Passion Programming?').toUpperCase();
let n4 =  prompt('Is Iy Favorite Hobby Reading?').toUpperCase();
let n5 =  prompt('is My Favorite Animal Dog').toUpperCase();

let number = 100;
let counter = 0;


const numGuess = function (num){
  for (let i = 1; i<=4; i++){
    let n6 = prompt('Enter Any Nmber Please');
    if( parseInt(n6) > num ){
      alert('Too High');
    }
    else if( parseInt(n6) < num ){
      alert('Too Low');
    }
    else if(n6 === ''){
      alert('You Must Enter A Number');
    }
    else{
      counter++;
      alert('Congrats You Enter The Exact Number Which Is '+num+', After Number Of Attempts Equal to '+counter);
      result++;
      break;
    }
    counter++;

  }
  alert('You Have Exceeded The Number Of Times Available To Enter The Correct Number Which Is '+counter+', And The Correct Number Is 100');
  console.log('Your Guess Is '+num);
};

numGuess(number);


let i = 1;
let MyArr = ['phone', 'tv', 'laptob', 'watch', 'airpods', 'ipad'];
const smartDevice = function(a){
  while (i <= 6) {
    let n7 = prompt('Please Enter The Smart Devices That You Have, HINT Use phone, tv, laptob, watch, airpods, ipad, Or Any Other Devices').toLowerCase();
    for (let i1 = 0; i1 < MyArr.length; i1++) {
      if (n7 === MyArr[i1]) {
        alert('Your Guess Is True, Try Another One');
        alert('Well Done, Correct Answer Which is '+ MyArr[i1] +'\n');
        console.log('Your Answer About The devices is correct and its the same of mine which they are: ' + MyArr[i1]);
        result++;
        i = 9;
        break;
      }}
    if(i <= 6){
      alert('You Entered A Wrong Answer');
    }
    i++;}
  alert('Your Result Equal '+result);
  console.log(a);

};
smartDevice(MyArr);

const checkName = function(){
  switch(n1){
  case 'YES':
    alert('Thats Correct You Guess My Name');
    console.log('Thats Correct You Guess My Name which is: '+'RAWAN');
    result++;
    break;

  default:
    alert('Your Guess About My Name Not Correct!');
    break;
  }
  console.log('Your Guess About My Name Is '+n1);

};
checkName();

const student = function(){

  switch(n2){
  case 'NO':
    alert('Thats Correct, Your Guess That I Am Not Student Is True');
    console.log('Thats Correct You Guess The Answer Which Is: I Am Not Student');
    result++;
    break;

  default:
    alert('Your Guess About If I Am Not Currently A Student Is Not Correct!');
    break;
  }
  console.log('Your Guess About If I Am Student Is '+n2);
};
student();

const passion = function(){

  switch(n3){
  case 'YES':
    alert('Thats Correct, Your Guess Is Right About What Is My Passion');
    console.log('Thats Correct, You Guessed What Is My Passion which is programming ');
    result++;
    break;

  default:
    alert('Your Guess About My Passion  Not Correct!');
    break;
  }
  console.log('Your Guess About My passion Is '+n3);
};
passion();

const favHoppy = function(){

  switch(n4){
  case 'YES':
    alert('Thats Correct, Your Guess Is Right About My Favorite Hoppy');
    console.log('Thats Correct, You Guessed What Is My Favorite Hoppy which is reading');
    result++;
    break;

  default:
    alert('Your Guess About My Favorite Hoppy Not Correct!');
    break;
  }console.log('Your Guess About My Favorite Hoppy Is '+n4);
};

favHoppy();

const favAnimal = function(){

  switch(n5){
  case 'YES':
    alert('Thats Correct, Your Guess Is Right About My Favorite Animal');
    console.log('Thats Correct, You Guessed What Is My Favorite Animal which is dog');
    result++;
    break;

  default:
    alert('Your Guess About My Favorite Animal Not Correct!');
    break;
  }console.log('Your Guess About My Favorite Animal Is '+n1);


  alert('THANKS FOR ANSWERING THE QUESTIONS I APPRECIATE THAT, NOW I WILL ASK YOU SOME QUESTIONS ABOUT YOUR SELF.');




  let p1 = prompt('What Is Your Name?');
  let p2 =  prompt('What Is Your Favorite Sport?');
  let p3 =  prompt('What Is Your Favorite Sports Team?');
  let p5 =  prompt('What is Your favorite hobby?');


  alert('HELLO ' + p1 + ' THANKS AGAIN FOR ANSWERING THE QUESTIONS, I APPRECIATE THAT, NICE TO MEET YOU.');

  const count = function(r){

    if (result > 4) {
      alert('Thank You ' + p1 + ' The Result Equal ' + r + ',your information about me very good');
    }
    else {
      alert('Thank You ' + p1 + 'For Trying The Result Equal ' + r + ',you dont know me very well');
    }
    console.log('Your total result equal to '+r);
  };
  count(result);
};
