// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var Result = ("Result");
document.write(`${Result} <br/>`);
var a =10;
document.write(`Value  of  a  is${a}<br/><br/> <br/> `);
var a2= ++a ;
document.write(`The value of ++a is ${a2}<br/>`);
document.write(`Now the value of a is  ${a} <br/> <br/><br/>`);
var a2= a++ ;
document.write(`The value of a++ is ${a2}<br/>`);
document.write(`Now the value of a is  ${a} <br/> <br/><br/>`);
var a2= --a ;
document.write(`The value of --a is ${a2}<br/>`);
document.write(`Now the value of a is  ${a} <br/> <br/><br/>`);
var a2= a-- ;
document.write(`The value of a-- is ${a2}<br/>`);
document.write(`Now the value of a is  ${a} <br/> <br/> <hr> <br>`);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var num_a = 2;
document.write(`1: a is ${num_a}<br>`);
var num_b = 1;
document.write(`2: b is ${num_b} <br><br>`);

// Explain the output at each stage:

document.write(`a: --a is =${--num_a}<br>`);
document.write(`b: --b is =${--num_b}<br>`);
document.write(`c:--a - --b is =${--num_a - --num_b}<br>`);
document.write(`d:--a - --b + ++b is =${(--num_a - --num_b)+ ++num_b }<br>`);
document.write(`e:Result of --a - --b + ++b + b-- is =${(--num_a - --num_b) + (++num_b + num_b--)}<br><br><hr><br>`);

// 3. Write a program that takes input a name from user & 
// greet the user.

var username =prompt(`what is your name?`);
document.write(`Hello ${username}!Welcome to the page.<br><br/> <hr><br>`);

// 4. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

var table = prompt("Enter a number to print a table")||5;

document.write(`Table of ${table}<br><br>`);
document.write(`${table}x1=${table*1}<br/>`);
document.write(`${table}x2=${table*2}<br/>`);
document.write(`${table}x3=${table*3}<br/>`);
document.write(`${table}x4=${table*4}<br/>`);
document.write(`${table}x5=${table*5}<br/>`);
document.write(`${table}x6=${table*6}<br/>`);
document.write(`${table}x7=${table*7}<br/>`);
document.write(`${table}x8=${table*8}<br/>`);
document.write(`${table}x9=${table*9}<br/>`);
document.write(`${table}x10=${table*10}<br/><hr> <br/>`);


// Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser.

var sub_1="English";
var sub_2="Maths";
var sub_3="Urdu";
var total_marks=100;
var obt_eng_marks=54;
var obt_urdu_marks=48;
var obt_maths_marks=54;
var per_sub_1=(obt_eng_marks/total_marks)*100;
var per_sub_2=(obt_maths_marks/total_marks)*100;
var per_sub_3=(obt_urdu_marks/total_marks)*100;

document.write(`<h1> Result Marksheet</h1> <br/>`);

document.write(`
   <table border "1" style="border-collapse:collapse;border:none"
   
   <tr>
   
   <th>Subject</th>
   <th>Total Marks</th>
   <th>Obtained Marks</th>
   <th>Percentage</th>
</tr>

<tr>
<td>${sub_1}</td>
<td>${total_marks}</td>
<td>${obt_eng_marks}</td>
<td>${per_sub_1}%</td>
</tr>

<tr>
<td>${sub_2}</td>
<td>${total_marks}</td>
<td>${obt_maths_marks}</td>
<td>${per_sub_2}%</td>
</tr>

<tr>
<td>${sub_3}</td>
<td>${total_marks}</td>
<td>${obt_urdu_marks}</td>
<td>${per_sub_3}%</td>
</tr>

<tr>
<td></td>
<td style="text-align:right; font-weight:bold;">${total_marks*3}</td>
<td style="text-align:right; font-weight:bold;">${obt_eng_marks+obt_urdu_marks+obt_maths_marks}</td>
<td style="text-align:right; font-weight:bold;">${(obt_eng_marks+obt_urdu_marks+obt_maths_marks)/(total_marks*3)*100}%</td>
</tr>
      `);



















