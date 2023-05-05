
//Q1 (Print all even numbers in first 50 natural numbers)
for(let a=1;a<=50; a++) {
if(a%2===0){
console.log(a)
}
}

//#Q2 (print all odd numbers in natural numbers from 20 to 50)

for(let a=20;a<=50;a++){
    if(a%2==1){
        console.log(a)
    }
}

//#Q3 (print all numbers that are divisible by 5   [12, 45, 67, 89, 90, 34, 35, 55])

const number= [12, 45, 67, 89, 90, 34, 35, 55];
for(let a=0;a<number.length;a++){
    if(number[a]%5===0) {
        console.log(number[a]);
    }
}

//#4 Print all numbers of this array [[1,2], [3,4], [5,6], [7,8]]

const arr = [[1,2], [3,4], [5,6], [7,8]];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


//#5 Print all prime numbers occurring in 1st 50 natural numbers

for (let i = 2; i <= 50; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
