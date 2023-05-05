
/* problem 1
if the number is even and less than 15, print a
if the number is even and more than 15, print b
if the number is odd and less than 10, print c
if the number is odd and more than 10, print d
using nested if else */

{

let number=10
if(number%2==0){
    if(number<15)
    console.log("a")

else{ console.log("b")}
}
else{if (number<10)
    {console.log("c")}
    else{console.log("d")}
}

}

//using logical operators
{
let number=99
if(number%2==0 && number<15){
  console.log("a")
}
 else if(number%2==0 && number>15){
  console.log("b")
}
else if(number%2!=0 && number<10){
  console.log("c")}
  else { console.log("d") }
}

/*problem 2
Result
answer should be: "Hi, my name is Bablu"
we need to solve this using for loop
*/

{
let name = 1;
for (let i = 0; i <name; i++) {
  console.log("Hi, my name is Bablu Kumar");
}
}
/* problem 3
 global scope => A variable declared outside a function, becomes global scope 
 local scope => Variables declared within a JavaScript function, become LOCAL
 */

 /*problem 4
create a variable called myName and store your name inside it.
then, add Mr./Miss. before it and store the result in
a new variable with the same name i.e. myName.
*/

{
 var myName="Bablu Kumar"
 myName= "Mr. "+myName
 console.log(myName)
}

//  problem 5
 // Find sum and multiplication of  all natural numbers 
//   from 10 to 20

{
  let sum = 0;
  let  multiplication = 1;
  
  for (let i = 10; i <= 20; i++) {
     sum= sum+i
      multiplication =multiplication*i;
  }
  
  console.log(sum);
  console.log(multiplication);
  }
/*
problem 6

Check whether a given year is a leap year
create a variable and store a random year in it 
now write code, which should return  true or false, 
depending whether the value in the above variable is leap year or not */
{
let year=2766
if(year%4==0){
    console.log(true)
}
else{
    console.log(false)
}
}
/*
problem 7
find the area of a triangle.  Lengths of its sides are 5, 6, 7
*/
{
const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2;
const area = Math.sqrt(
  s * (s - a) * (s - b) * (s - c)
);
console.log(area)
}
/*
problem 8
create two variables and store numbers in them.
Now, write code, which return true if one of the variable is 50 or if their sum is 50.
Otherwise, you need to return false.
Also handle edge cases
(in real world, these two numbers will be supplied by the users.
Now think what if they supply something which is not a number ?)
*/
{
const a=30
const b=20
if(a==50|| b==50 || a+b==50){
    console.log(true)
}
else{console.log(false)
    }
  }

/*
problem 9
create a variable and store a number inside it
write program to check whether a given variable is between 100 and 200
write program to check whether a given variable is between 100 and 200 or 400 and 500
handle edge cases
*/



/*
problem 10
you have 3 numbers.
write a program which can find the largest number
*/
{
  const num1=2;
  const num2=3;
  const num3=4;
  
  if(num1>=num2 && num1>=num3)
  { larsest = num1}
   else if (num2>=num1 && num2>=num3)
   { larsest = num2}
  else { larsest=num3}
  console.log("Larsest Number is "+ larsest)
  }

  /*
problem 11
create two variables and assign numbers to them
now write a code which returns true if one of them is 8 or their sum or 
difference is 8. Otherwise it should return false
  */
 {
 const a=7
 const b=8
 if(a==8||b==8||a+b==8||a-b==8 ){
  console.log(true)
 }
 else{ console.log(false)}
}
