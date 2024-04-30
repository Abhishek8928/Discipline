// javascript part 2 🚀🚀
// Date 29-Apr-2024

/*

1. console.log  to log the message on the screen

2. linking js file
   -> script tag we link the js file to html file

3. template literal they are help us embedded the expression inside te string
   -> first is calucalute or evaluate the expression -> embed in the string
   -> use backtick and ${put_expression}

4. Comparison of not a number 
   -> each non-number is associated with unique value that is unicode
   -> a = 61, A=41
   -> while using comparison operatior it compare the unicode not the character or symbol
   
5. Operator use to do calculation or operation to the operand
   -> Arithimetic operator (+,*,/,%,-,**)
   -> Comparison operator (==,!=,>=,>,<=,<)
   -> Logical operator (not operator != ,and operator && ampersand ,or operator || or pipe)
   -> Ternary operator (condition) ? statement : statement (shortcut if else)
   -> unary opertaor (a++ , a--)
   -> Assignment operator (=,+=,/=,*=,%=,**=)
   -> typeof use to fond the datatype of varaiable

6. Logical operator to combine the multiple expression execution left - right
   -> && both condition be true in case of and operator (5>3) && (3<5) -> true
   -> or operator any one or two can true -> result to true (5>3) && (3>5) -> true
   -> ! expression return the true it will make it false if false it will true

7. conditional statement -> only executed if condition is true 
   -> if condition is true it executed a blocked of code which is written in if
   -> else if -> if condition is false then it will go checked for else if 
   -> else if top all condition are false then else is executed default
   -> we can use the nested if else also combine the different condition
   -> conditional operator also return the boolean value
   
8. truthy and falsy : everything in javascript is true or false that doesnot means   it    value is true or false they are treat true and false in the boolean context like if elseif , loop when the condition is evlaute to either true or false
    -> falsy value : false , 0 ,-0 ,0bigint , "" empty string , nan , undefined , null
    -> fasly value : everything else
    
9. alert and prompt
   -> alert are used to display the alert popup on the screen
   -> prompt used to display a dialog box and take input from the user

10 switch if we have fixed value to compare we can use the switch statement
   -> switch (varaibale_to_check) {
       case value:
       statement;
       break;
   }

*/

// Asignemtn question 🚀

/* 
const checkNumber = 10;

if it will divisible by 10 then it is a good number
divisible by it with return 0 is falsy value we are converting it not operator it make it false and executed the if block
if(!(checkNumber%10)){
    console.log("good Number")
} else{
    console.log("not a food Number")
}
!(checkNumber % 10) ? console.log("good Number") : console.log("not a good Number");

const userName = prompt("enter the username");
const userAge = prompt("enetr the age");

alert(`the username:${userName} & age:${age}`)

const value = 6;

switch (value) {
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("not matched with any value")
}

const goldenString = "Abhishek";

if ((goldenString[0] === 'A' || goldenString[0] === 'a') && goldenString.length > 5){
    console.log("it is a golden string");
}else{
    console.log("it is not a golden string");
}
const [num1, num2, num3] = [12, 4, 5];

if((num1>num2) && (num1> num3)){
    console.log("num1 is largest among b and c")
} else if ((num2 > num1) && (num2 > num3)) {
    console.log("num2 is largest among b and c")
} else {
    console.log("num3 is largest among b and c")
}
const numberOne = 12342;
const numberTwo = 23452;

(numberOne % 10) === (numberTwo % 10) ? console.log("last digit are same") : console.log("not same")
*/






