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