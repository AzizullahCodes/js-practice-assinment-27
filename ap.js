// js-practice assignment 27
// _________________________________________________________________________________
// ques no 1 
// Use the Date() object to display the current full date (day, month, date, year).

// Expected Output Format (example):
// Today is Monday, June 10, 2025


// ans 
// let current = new Date();
// let dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// let day = current.getDay();
// let dayy = dayNames[day];
// console.log(dayy);

// let monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// let month = current.getMonth();
// let mont = monthName[month];
// console.log(mont);

// let date = current.getDate();

// let year = current.getFullYear();

// console.log('Today is ' + dayy + ',' + mont +' '+ date + ',' + year);

// ____________________________________________________________________________________
// ques no 2
// Use the Date() object to display the current time (hours, minutes, seconds).

// Expected Output Format (example):
// Current time is 14:30:15

// ans 

// let current = new Date();
// // console.log(current.toLocaleTimeString());

// let hours = current.getHours();
// let minutes = current.getMinutes();
// let seconds = current.getSeconds();
// console.log('Current Time is '  + hours + ':'+ minutes + ':' + seconds);
// ____________________________________________________________________________________________
// ques no 3 
// Greet According to Time
// Question:
// Get the current hour using Date().

// If hour < 12 → Show "Good Morning"

// If hour < 18 → Show "Good Afternoon"

// Else → Show "Good Evening"

// Expected Output (example):
// Good Afternoon

// ans 
// let current = new Date();
// let currentHours = current.getHours();
// console.log(currentHours);
// if(currentHours < 12 ){console.log('Good Morning')}
// else if(currentHours < 18 ){console.log('Good afternoon')}
// else{console.log('Good Evening')}
// ________________________________________________________________________________
// ques no 4 
// Ask the user to enter their birth year using prompt(). Use Date() to get the current year and calculate the age.

// Expected Output (example):
// You are 21 years old.
// ans 
// let enterBirthYear = Number(prompt('enter your birth year'));
// let current = new Date();
// let year = current.getFullYear();
// let age = year - enterBirthYear;
// console.log('You are ' + age + ' years old');
// _______________________________________________________________________________
// ques no 5 
// Use the Date() object to calculate how many days are left until January 1st of next year.
// Expected Output Example:
// There are 204 days left until New Year.

// ans 
// let current = new Date();
// let target = new Date('01 january 2026');
// console.log(target);
// let day = target - current;
// console.log(day);
// let result = day /(1000*60*60*24);
//     result = Math.floor(result);
// console.log(result)
// _______________________________________________________________________________
// ques no 6
//  Digital Clock (Static)
// Question:
// Create a digital clock that shows:

// 02:07:45 PM
// Use Date() and logic to:

// Show time in 12-hour format

// Add 0 before single-digit hours, minutes, or seconds

// Add AM or PM

// Expected Output Example:
// 08:09:05 PM
// ans 
// let current = new Date();
// let hours = current.getHours();
// console.log(hours);
// let minutes = current.getMinutes();
// console.log(minutes)
// let seconds = current.getSeconds();
// console.log(seconds)
// var period = 'AM';

// if(hours >= 12){period = 'PM';
//     if(hours > 12){hours = hours - 12}
//     if(hours === 0){hours = 12}
// }

// if(hours < 10) {hours = '0' + hours}
// if(minutes < 10){minutes = '0' + minutes}
// if(seconds < 10){seconds = '0' + seconds}

// var timeString = hours + ':' + minutes +':'+ seconds + ':'+ period;
// console.log(timeString);
// ___________________________________________________________________________________________
// ques no 7
// Weekend Checker
// Question:
// Check if today is a weekend (Saturday or Sunday). Show a message:

// Yay! It's weekend!

// or It's a weekday. Keep working.

// Expected Output Example:
// It's a weekday. Keep working.
// ans 
// let current = new Date();
// let dayNames= ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// let day = current.getDay();
// let name = dayNames[day];
// console.log(name);
// if(name === 'saturday' || name === 'sunday'){console.log('Yay ! It is weekend')}
// else{console.log('It is a weekday. Keep working')}
// ______________________________________________________________________________________
// ques no 8 
// know days of any one life
// ans 
// var today = new Date();
//       var bday = new Date('08 july 1996');
//       // console.log(today);
//       // console.log(bday);
//       var todayInMs = today.getTime();
//       var bdayInMs = bday.getTime();
//       var calculateMs = todayInMs - bdayInMs;
//       console.log(calculateMs)
//       // console.log(todayInMs);
//       // console.log(bdayInMs);
//       var dayFormula = calculateMs /(1000 * 60 * 60 * 24);
//       dayFormula = Math.floor(dayFormula);
//       console.log(dayFormula)
//       ______________________
//       output = 10564
      
    //   ________________________________________________________________________________________________
    // ques no 9 
    // Create a script to calculate how many days have passed since January 1, 2000.
// Output needed: Total number of days passed.
// ans 
// let current = new Date();
// let another = new Date('01 January 2000');
// let milliseconds = current - another;
// console.log(milliseconds);
// let days = milliseconds /(1000 * 60 * 60 * 24);
// days = Math.floor(days);
// console.log(days);


// ___________________________________________________________________________________
// ques no 10 
// Write JavaScript code to find how many milliseconds have passed since your last birthday.
// Output needed: Milliseconds between today and last birthday.
// ans 
// no 1 
// let current = new Date();
// let target = new Date('09 September 2024');
// let milliseconds = current - target;
// console.log(milliseconds);
// no 2 
// let current = new Date();
// let target = new Date('09 September 2024');
// let currentmilli = current.getTime();
// let targetmill =  target.getTime();
// let output = currentmilli - targetmill;
// console.log(output);
// ____________________________________________________________________________________________
// ques no 11 
// Calculate the number of years between March 15, 1995 and today.
// Output needed: Whole number of years passed.
//  ans 
// let current = new Date();
// let target = new Date('15 March 1995');
// let milliseconds = current - target;
// console.log(milliseconds);
//  let years = milliseconds / (1000* 60 * 60 * 24 *30 * 12 );
//      years = Math.floor(years);
//  console.log(years);
// ___________________________________________________________________________________________
// ques no 12 
// Determine how many days are left until New Year (Jan 1 next year).
// Output needed: Days remaining until Jan 1.
// ans 
// let current = new Date();
// let target = new Date('01 January 2026');
// let currentmilliseconds = current.getTime();
// let targetmilliseconds = target.getTime();
// let calculateMilliSeconds = targetmilliseconds - currentmilliseconds;
// console.log(calculateMilliSeconds);

// let day = calculateMilliSeconds / (1000 * 60 * 60 * 24);
//     day = Math.floor(day);
// console.log(day);
// __________________________________________________________________________________________________
// ques no 13 
// Find out the total number of hours you have lived since your birthdate (e.g., July 8, 1996).
// Output needed: Total hours lived.
// ans 
// let current = new Date();
// let birthdate = new Date('09 September 1992');
// let milliseconds = current - birthdate;
// console.log(milliseconds);
// let hours = milliseconds / (1000 * 60 * 60);
//     hours = Math.round(hours);
// console.log(hours);
// _______________________________________________________________________________
// ques no 14 
// Calculate the number of seconds between today and December 25, 2025.
// Output needed: Total seconds until Dec 25, 2025.
// ans 
// let current = new Date();
// let target = new Date('25 December 2025');
// let milliseconds = target - current;
// console.log(milliseconds);

// let seconds = milliseconds / 1000;
//     seconds = Math.ceil(seconds);
// console.log(seconds);
// ________________________________________________________________________________________________
// ques no 15 
// Check if the current year is a leap year or not.
// Output needed: true or false.
// ans 
// let current = new Date();
// let year = current.getFullYear();
// console.log(year);
// if(year % 4 === 0){console.log('leap year')}
// else{console.log('not leap year')}
// _____________________________________________________________________________________________
// ques no 16 
// 
// Write a program to display the current time in the format HH:MM:SS.
// Output needed: Current time (e.g., 14:35:09)
// ans 
// let current = new Date();
// let time = current.toLocaleTimeString();
// console.log(time);
// ___________________________________________________________________________
// ques no 17
// Simulate a Coin Toss 🪙
// Use Math.random to simulate flipping a coin. Print Heads or Tails.
// Output needed: Heads or Tails
// ans 
// let random = Math.random();
// console.log(random);
//     random = random * 2;
//     console.log(random);
//     random = random + 1;
//     console.log(random);
//     random = Math.floor(random);
//     console.log(random);
//     if(random === 1){console.log('Head')}
//     else{console.log('tail')}
// ___________________________________________________________________________________
// ques 18
// traffic signal
// ans 
// let signal = ['red','green','yellow','pink'];
// let random = Math.random()* signal.length;
//    random = Math.floor(random);
// console.log(random);
// let result = signal[random];
// console.log(result);
// if(result === 'red'){console.log('stop')}
// else if(result === 'yellow'){console.log('start but not move')}
// else{console.log('move slowly')}
// ________________________________________________________________________________________
// ques no  19 
// Use prompt() to ask the user to enter a number with many decimals, then 
// use .toFixed(2) to format it.
// ans 
// let enterNumber = prompt('enter a decimal number');
//     enterNumber = Number(enterNumber);
// let result = enterNumber.toFixed(2);
// console.log(result)
// ______________________________________________________________________________________
// ques no 20
// Show the value of Math.PI
// Create a variable that stores Math.PI.

// Show the value in the console and with alert().

// ans 
// let vari = Math.PI;
// console.log(vari);
// let fix = vari.toFixed(2);
// console.log(fix);
// ______________________________________________________________________________________
// ques no 22
// Create a number
// let num = 123;
// convert it to string
// ans 
// no 1 
// let num = 123;
//    console.log(typeof num);
//    num = num.toString();
//    console.log(typeof num);
// no 2
// let num = 123;
// console.log(typeof num);
//    num = num + '';
//    console.log(num);
//    console.log(typeof num);

// no 3
// let num = 123;
// console.log(typeof num);
// num = String(num);
// console.log(num);
// console.log(typeof num);
// _______________________________________________________________________________
// ques no 23 
// Creates a variable str1 with the value "123"
// Uses parseInt() to convert str1 to a number
// Logs the result to the console
// ans 
// let str1 = '123.532';
//    console.log(str1);
//    console.log(typeof str1);
//    str1 = parseInt(str1);
//    console.log(str1);
//    console.log(typeof str1);
// _______________________________________________________________________________________
// ques no 24
// parseFloat()
// ans 

//    let str1 = '123.532';
//    console.log(str1);
//    console.log(typeof str1);
//    str1 = parseFloat(str1);
//    console.log(str1);
//    console.log(typeof str1);
// __________________________________________________________________________
// ques no 25 
// Use charAt() to get the last character of the string "Coding".
// 💡 Tip: Use word.length - 1 to find the last index.
// ans 
// let str1 = 'coding';
// let firstChar = str1.charAt(0);
// console.log(firstChar);
// let last = str1.charAt(str1.length-1);
// console.log(last);
// _______________________________________________________________________________
// ques no 26 
// string[index]
// ans 
// let str = 'coding';
// let first = str[0];
// console.log(first);
// let last = str[str.length-1];
// console.log(last);
// _________________________________________________________________________________________
// ques no 27
// .toUpperCase() & .toLowerCase()
// ans 
// let word = prompt('enter word');
// console.log(word);
//     word = word.toUpperCase();
//     console.log(word);

//     word = word.toLowerCase();
//     console.log(word);
// _________________________________________________________________________________________
// ques no 28 
// Get a Number from the User and Show the Square Root:
// ans 
// let number = Number(prompt('Enter a number'));
// let result = Math.sqrt(number);
// console.log(result);
// _______________________________________________________________________________________
// ques no 29 
// Math.abs()
// ans 
// let value = -243.34;
// console.log(value);
//     value = Math.abs(value);
//     console.log(value);
// _______________________________________________________________________________
// ques no 30 
// Math.round( );
// ans 
// let number = 34.278;
//   console.log(number);
//   number = Math.round(number);
//   console.log(number);
// ___________________________________________________________________________________
// ques no 31 
// Math.ceil( );
// ans 
// let number = 34.978;
//   console.log(number);
//   number = Math.ceil(number);
//   console.log(number);
// __________________________________________________________________________________________
// ques no 32
// Math.Floor();
// ans 
// let number = 34.978;
//   console.log(number);
//   number = Math.floor(number);
//   console.log(number);
// ________________________________________________________________________________________________
// ques no 33
// Math.max( );
// ans 
// console.log(Math.max(3,77,21,54));
// _______________________________________________________________________________
// ques no 34 
// Math.min()
// console.log(Math.min(2,78,887,1));
// ___________________________________________________________________________
// ques no 35
// Math.random();
// ans 
// let color = ['red','green','yellow','blue'];
// let random = Math.random()*color.length;
//     random = Math.floor(random);
// console.log(random);
// let result = color[random];
// console.log(result);
// __________________________________________________________________________________
// ques no 36 
// for loop 
// ans 
// for(let i = 0; i <= 10; i++){console.log(i)}
// _____________________________________________________________________________________
// ques no 37 
// nested for loop
// for(let i = 1; i <= 10; i++){console.log('i',i)
//     for(let j = 1 ; j <= 10; j++){console.log('j',j)}
// }
