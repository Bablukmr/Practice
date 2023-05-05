// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax	
// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']

{
const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const [a ,...rest]=['delhi', 'gurgaon', 'jaipur', 'pune']
console.log(rest)
}
// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
{
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
morePlaces.unshift('delhi')
console.log(morePlaces)
}
// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
{
  const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
  const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
  const [a,...rest1]=['delhi', 'gurgaon', 'jaipur', 'pune']
  
  const [b,...rest2]= ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
   const combined= [...rest1,...rest2]
  console.log(combined)
  }
// ============================================================================= //

const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }

// 4.
// destructure and store pincode into a variable named myPincode
  
console.log(myData.address.pinCode)

// 5.
// destructure and store second like into a vaiable named myLike

console.log(myData.likes[1])