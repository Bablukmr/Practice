const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon",
    },
];

// return the full names of the facebook users who belong to guragon
// HINT: use higher order functions and chain them

let Fromguragon=facebookProfiles.filter(profile=>profile.location=="gurgaon")
let FromguragonName=Fromguragon.map(user=>(user.firstName)+" "+(user.lastName))
console.log(FromguragonName)


// ======================================================================== //

function filterOddNumbers(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
{
    const evenNumbers = [1, 2, 3, 4, 5].push(6).filter(filterOddNumbers);
}
/**
 * Q1. without actually running this code, you need to answer whether this code will run or not along with the reason
 ==> this code will not run ,push() does not return a new array , it is return the new length of array.
Q2. now run the above code and see the result/error. 
Analyze the difference bw your answer before and after running the code 
==> TypeError: [1,2,3,4,5].push(...).filter is not a function
 
Q2. correct the code so that method chain starts working
 * 
 */

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
const evenNumbers = numbers.filter(filterOddNumbers);
console.log(evenNumbers);
