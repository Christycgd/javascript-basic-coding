console.log("Question 1-----------------")

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

let str1 = 'Today is';
let str2 = '      a beautiful day     '
let str3 = ' In Hawaii.     '

let output=`${str1} ${str2.trim()} ${str3.trim()}`
console.log(output)




console.log("Question 2-----------------")
 
// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

var enteredAlphabet ="1"
switch(enteredAlphabet){
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':
	case 'A':
	case 'E':
	case 'I':
	case 'O':
	case 'U':
		console.log('Character is a vowel');
		break;

            case "b":
            case "B":
            case "c":
            case "C":
            case "d":
            case "D":
            case "f":
            case "F":
            case "g":
            case "G":
            case "h":
            case "H":
            case "j":
            case "J":
            case "k":
            case "K":
            case "l":
            case "L":
            case "m":
            case "M":
            case "n":
            case "N":
            case "p":
            case "P":
            case "q":
            case "Q":
            case "r":
            case "R":
            case "s":
            case "S":
            case "t":
            case "T":
            case "v":
            case "V":
            case "w":
            case "W":
            case "x":
            case "X":
            case "y":
            case "Y":
            case "z":
            case "Z":
                console.log("it is a consonant value")


	default:
		console.log("It is a non-alphabett");
        break;
    
}



console.log("Question 3-----------------")
//Question 3:

// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format. */

const num1=parseInt(prompt("Enter no 1"))
const num2=parseFloat(prompt("Enter no 2"))
const operator=prompt("enter the operator +, -, *, /")
let result;  

switch(operator){
    case '+':
        result= num1 + num2;
        console.log("output",result)
        break; 

        case '-':
          result= num1 - num2;
            console.log("output",result)
            break;

            case '*':
                result= num1 * num2;
                console.log("output",result)
                break;

            case '/':
                result= num1 / num2;
                console.log("output",result)
                break;

            default:
                console.log("enter a valid operator")
                break;
}



console.log("Question 4-----------------")

// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal. */


let a=2;
let b=2;
let c=2;
if(a==b & b==c & c==a){
    console.log("It's a equilateral traingle")
}

else if (a==b || a==c || b==c){
    console.log("It is a Isoceles triangle")
}

else{

    console.log("It is a scalene triangle")
}



console.log("Question 5-----------------")

// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

const totalunits=300

let bill;
if(totalunits<=50){
    bill=totalunits * 0.5
}

else if(totalunits>50 && /* logical operator */ totalunits<=150) 
{
bill=(50 * 0.5)  + (totalunits-50) * 0.75
}

else if(totalunits>150 && totalunits<=250)
{
    bill=(50 * 0.5 ) /* first 50 units */ + (100 * 0.75) + (totalunits - 150) * 1.2;
}

else{

    bill=(50 * 0.5)+(100 * 0.75) + (100 * 1.2) + (totalunits - 250) * 1.5;
    bill += bill * 0.2 /* --bill*20/100=0.2 --An additional surcharge of 20% is added to the bill.  */
    
console.log("bill",bill)

}