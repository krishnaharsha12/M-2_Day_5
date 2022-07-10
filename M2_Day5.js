/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

var Area = function (l1, l2) {
   return l1 * l2;
  }
  var areaRect = Area(12, 15);
  console.log(areaRect);
  

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

var crazySum= function(i1,i2){
  if (i1 === i2)
{
return (i1+i2)*3;
}
else{
return i1+i2;
}
}
console.log(crazySum(5,5));
//if both the values are different 
//           ^
//console.log(crazySum(3,5)); //8

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff=function(Number){
  if (Number > 19){
    return Math.abs(Number-19)*3;
  }
  else{
  return Math.abs(Number-19);
  }
}
console.log(crazyDiff(25));//25>19 =>6*3
console.log(crazyDiff(5));//5>19 => 14

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
var boundary=function(n){
  if((n>20 && n<=100) || (n===400)){
return true;
  }
  else{
    return false;
  }
}
console.log(boundary(25))
console.log(boundary(20,400))
/*var boundary=function(n,n){
  if((n>20 && n<=100) || (n===400)){
    return true;
      }
      else{
        return false;
      }
    }
    console.log(boundary(20,400))  //false || true =>true
*/
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify=function(string){
if(string.startsWith("Strive")){
  return string;
}
else{
  return "Strive " + string;
}
}
console.log(strivify("hard"))
console.log(strivify("Strives"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
const check3and7 = function (j) {
  if (j >= 0 && (j % 3 === 0 || j % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(16))// true &&(false||false) => true &&(false);
console.log(check3and7(35))// true &&(true||true) => true &&(true);
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
const reverseString = function (str) {
  return str.split("").reverse("").join("");
}
console.log(reverseString("Strive"));
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
