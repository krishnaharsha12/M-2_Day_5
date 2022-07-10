const sayHelloFunction = function() {
};
console.log("Hello!");

function greet(name) {
	return "Hello " + name
}
console.log(greet("HELLO")) // expected: Hello John!

let sum = 0

function sumNums(num1, num2) {
	sum = num1 + num2 	// changes the outer variable value to the new computed sum
}
sumNums(3,5);
console.log(sumNums(3,5));


var a=5;
    b=6;
var myfunc=(a,b)=>{
    console.log(a,b);
    console.log(a+b);
}

myfunc(a,b);
myfunc(a+b,b);
