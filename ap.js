// =============================
// JS PRACTICE ASSIGNMENT 27
// =============================

// =============================
// Q1: Display current full date
// =============================

let current = new Date();
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = current.getDay();
let dayy = dayNames[day];
console.log(dayy);

let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
let month = current.getMonth();
let mont = monthName[month];
console.log(mont);

let date = current.getDate();
let year = current.getFullYear();
console.log('Today is ' + dayy + ', ' + mont + ' ' + date + ', ' + year);

// =============================
// Q2: Display current time
// =============================

current = new Date();
let hours = current.getHours();
let minutes = current.getMinutes();
let seconds = current.getSeconds();
console.log('Current Time is ' + hours + ':' + minutes + ':' + seconds);

// =============================
// Q3: Greet according to time
// =============================

current = new Date();
let currentHours = current.getHours();
console.log(currentHours);
if (currentHours < 12) {
    console.log('Good Morning');
} else if (currentHours < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good Evening');
}

// =============================
// Q4: Calculate age
// =============================

let enterBirthYear = Number(prompt('Enter your birth year'));
current = new Date();
year = current.getFullYear();
let age = year - enterBirthYear;
console.log('You are ' + age + ' years old');

// =============================
// Q5: Days left until New Year
// =============================

current = new Date();
let target = new Date('01 January 2026');
let dayDiff = target - current;
let result = dayDiff / (1000 * 60 * 60 * 24);
result = Math.floor(result);
console.log(result);

// =============================
// Q6: Digital Clock (Static)
// =============================

current = new Date();
hours = current.getHours();
minutes = current.getMinutes();
seconds = current.getSeconds();
let period = 'AM';

if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }
}

if (hours < 10) hours = '0' + hours;
if (minutes < 10) minutes = '0' + minutes;
if (seconds < 10) seconds = '0' + seconds;

let timeString = hours + ':' + minutes + ':' + seconds + ' ' + period;
console.log(timeString);

// =============================
// Q7: Weekend Checker
// =============================

current = new Date();
dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
day = current.getDay();
let name = dayNames[day];
console.log(name);
if (name === 'saturday' || name === 'sunday') {
    console.log('Yay! It is weekend');
} else {
    console.log('It is a weekday. Keep working');
}

// =============================
// Q8: Know days of life
// =============================

let today = new Date();
let bday = new Date('08 July 1996');
let todayInMs = today.getTime();
let bdayInMs = bday.getTime();
let calculateMs = todayInMs - bdayInMs;
let dayFormula = calculateMs / (1000 * 60 * 60 * 24);
dayFormula = Math.floor(dayFormula);
console.log(dayFormula);

// =============================
// Q9: Days since Jan 1, 2000
// =============================

current = new Date();
let another = new Date('01 January 2000');
let milliseconds = current - another;
let days = milliseconds / (1000 * 60 * 60 * 24);
days = Math.floor(days);
console.log(days);

// =============================
// Q10: Milliseconds since last birthday
// =============================

current = new Date();
target = new Date('09 September 2024');
milliseconds = current - target;
console.log(milliseconds);

current = new Date();
target = new Date('09 September 2024');
let currentmilli = current.getTime();
let targetmill = target.getTime();
let output = currentmilli - targetmill;
console.log(output);

// =============================
// Q11: Years since March 15, 1995
// =============================

current = new Date();
target = new Date('15 March 1995');
milliseconds = current - target;
let years = milliseconds / (1000 * 60 * 60 * 24 * 30 * 12);
years = Math.floor(years);
console.log(years);

// =============================
// Q12: Days left until Jan 1
// =============================

current = new Date();
target = new Date('01 January 2026');
let currentmilliseconds = current.getTime();
let targetmilliseconds = target.getTime();
let calculateMilliSeconds = targetmilliseconds - currentmilliseconds;
let dayLeft = calculateMilliSeconds / (1000 * 60 * 60 * 24);
dayLeft = Math.floor(dayLeft);
console.log(dayLeft);

// =============================
// Q13: Total hours lived
// =============================

current = new Date();
let birthdate = new Date('09 September 1992');
milliseconds = current - birthdate;
let hoursLived = milliseconds / (1000 * 60 * 60);
hoursLived = Math.round(hoursLived);
console.log(hoursLived);

// =============================
// Q14: Seconds until Dec 25, 2025
// =============================

current = new Date();
target = new Date('25 December 2025');
milliseconds = target - current;
let secondsUntil = milliseconds / 1000;
secondsUntil = Math.ceil(secondsUntil);
console.log(secondsUntil);

// =============================
// Q15: Check leap year
// =============================

current = new Date();
year = current.getFullYear();
if (year % 4 === 0) {
    console.log('leap year');
} else {
    console.log('not leap year');
}

// =============================
// Q16: Display current time
// =============================

current = new Date();
let time = current.toLocaleTimeString();
console.log(time);

// =============================
// Q17: Coin Toss
// =============================

let random = Math.random();
console.log(random);
random = random * 2;
console.log(random);
random = random + 1;
console.log(random);
random = Math.floor(random);
console.log(random);
if (random === 1) {
    console.log('Head');
} else {
    console.log('tail');
}

// =============================
// Q18: Traffic Signal
// =============================

let signal = ['red', 'green', 'yellow', 'pink'];
random = Math.random() * signal.length;
random = Math.floor(random);
console.log(random);
let resultSignal = signal[random];
console.log(resultSignal);
if (resultSignal === 'red') {
    console.log('stop');
} else if (resultSignal === 'yellow') {
    console.log('start but not move');
} else {
    console.log('move slowly');
}

// =============================
// Q19: Format decimal
// =============================

let enterNumber = prompt('Enter a decimal number');
enterNumber = Number(enterNumber);
let fixedResult = enterNumber.toFixed(2);
console.log(fixedResult);

// =============================
// Q20: Math.PI
// =============================

let vari = Math.PI;
console.log(vari);
let fix = vari.toFixed(2);
console.log(fix);

// =============================
// Q22: Number to String
// =============================

let num = 123;
console.log(typeof num);
num = num.toString();
console.log(typeof num);

num = 123;
console.log(typeof num);
num = num + '';
console.log(num);
console.log(typeof num);

num = 123;
console.log(typeof num);
num = String(num);
console.log(num);
console.log(typeof num);

// =============================
// Q23: parseInt()
// =============================

let str1 = '123.532';
console.log(str1);
console.log(typeof str1);
str1 = parseInt(str1);
console.log(str1);
console.log(typeof str1);

// =============================
// Q24: parseFloat()
// =============================

str1 = '123.532';
console.log(str1);
console.log(typeof str1);
str1 = parseFloat(str1);
console.log(str1);
console.log(typeof str1);

// =============================
// Q25: charAt() last character
// =============================

str1 = 'coding';
let firstChar = str1.charAt(0);
console.log(firstChar);
let lastChar = str1.charAt(str1.length - 1);
console.log(lastChar);

// =============================
// Q26: String index
// =============================

let str = 'coding';
let first = str[0];
console.log(first);
let last = str[str.length - 1];
console.log(last);

// =============================
// Q27: toUpperCase() & toLowerCase()
// =============================

let word = prompt('Enter word');
console.log(word);
word = word.toUpperCase();
console.log(word);
word = word.toLowerCase();
console.log(word);

// =============================
// Q28: Square root
// =============================

let number = Number(prompt('Enter a number'));
result = Math.sqrt(number);
console.log(result);

// =============================
// Q29: Math.abs()
// =============================

let value = -243.34;
console.log(value);
value = Math.abs(value);
console.log(value);

// =============================
// Q30: Math.round()
// =============================

number = 34.278;
console.log(number);
number = Math.round(number);
console.log(number);

// =============================
// Q31: Math.ceil()
// =============================

number = 34.978;
console.log(number);
number = Math.ceil(number);
console.log(number);

// =============================
// Q32: Math.floor()
// =============================

number = 34.978;
console.log(number);
number = Math.floor(number);
console.log(number);

// =============================
// Q33: Math.max()
// =============================

console.log(Math.max(3, 77, 21, 54));

// =============================
// Q34: Math.min()
// =============================

console.log(Math.min(2, 78, 887, 1));

// =============================
// Q35: Math.random()
// =============================

let color = ['red', 'green', 'yellow', 'blue'];
random = Math.random() * color.length;
random = Math.floor(random);
console.log(random);
let resultColor = color[random];
console.log(resultColor);

// =============================
// Q36: for loop
// =============================

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// =============================
// Q37: nested for loop
// =============================

for (let i = 1; i <= 10; i++) {
    console.log('i', i);
    for (let j = 1; j <= 10; j++) {
        console.log('j', j);
    }
}
