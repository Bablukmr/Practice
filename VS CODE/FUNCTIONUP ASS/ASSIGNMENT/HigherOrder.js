// write your own find and findIndex function
// (Hint: using for loop and if else)


// ======================================================== //


const practiceData = [[14,21,23,64], [33,46,51,65]]
const newpracticedata=practiceData.map(x=>x.map(x=>x+1));
console.log(newpracticedata)

/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]
 * 
 * 
 * requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */
{
const practiceData = [[14,21,23,64], [33,46,51,65]]
const evennum=practiceData.map(x=>x.filter(y=>y%2==0));
console.log(evennum)
}
// ======================================================== //


    // problem => return an array such that numbers at odd idex are multiplied by 2
    // and numbers at even index are multiplied by 10

    const array = [23 , 45,467, 789, 34, 989, 56]
    const myarray=array.map((Number,index)=>{
        if(index%2===0){
        return Number*10;
      } 
  else
      { return Number*2;
      }
    
  });
  console.log(myarray)
// ======================================================== //




 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
 
const carObject = {}
//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */
 
 
// ======================================================== //


 /**
  *  Flattening
 Use the reduce method 
 to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 
 const arrays = [[1, 2, 3], [4, 5], [6]];
 // result =  [1, 2, 3, 4, 5, 6]
  * 
  * 
  */

 const arrays = [[1, 2, 3], [4, 5], [6]];
 const addarray=arrays.reduce((a,b)=>{
     return [ ...a, ...b];
 },[]);
 
 console.log(addarray)

// ======================================================== //


 /**
  * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  * return an array with all words converted into uppercase using higher order function
  * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  * 
  * 
  * 
  */


 const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
 const Uppcountries= countries.map(x=>x.toUpperCase());
 console.log(Uppcountries)

// ======================================================== //



