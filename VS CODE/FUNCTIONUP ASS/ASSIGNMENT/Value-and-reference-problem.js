const person = {
    name: "Akash",
    mobile: 999999999,
    address: {
        pincode: 1234,
        city: "gurgaon",
        state: "haryana",
        emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
    },
};

/**
 * 
 * 
 * make a copy of the person object and in that copy 
 * change its name to "Rahul",  
 * pincode to 4567 
 * and first email in the list to 'asd@outlook.com'
 * 
 * make sure that original person is not affected by these operation
 * 
 *  your new person should look like this 
 * const newPerson = {
    name:"Rahul",
    mobile:999999999,
    address:{
        pincode:4567,
        city:"gurgaon",
        state:"haryana",
        emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com']
    }
}
  
 *  CAUTION: DO NOT USE JSON.parse(JSON.stringify())
    Hint: use destructuring at every level, i.e. copy each level shallowly
 */

const newperson={
    ...person
}
newperson.name="rahul"
newperson.address.pincode="4567"
newperson.address.emails[0]="asd@outlook.com"
console.log(newperson) 


/**
 * explain the difference between primitive and non primitive data types when we use the following operator
 * ==> number, string, undefined, null,boolean these are the primitive data type.
 * ==> object, array, function are the non primitive data type.
 * 
 * 1. assignment operator ==>
 * through assignment operator(=) assign the value inside variable i.e-> let a=1;
 * 
 * 2. equality operator
 * through equality operator we have check the value and data types.
 * (==)check value.
 * (===)check value and data types.
 *
 */


