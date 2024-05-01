// javascript part 3 🚀🚀
// Date 30-Apr-2024

/*

1. String Method actions that performed on the object
   syntax  variableName.method()
   
2. string method with no argument
   -> trim remove whitespace from start and end not from the middle
   -> toLowercase make all text to lower case
   -> toUpppercase make all letter uppercase

3. string method with argument
   -> argument are the value that we pass to the method at time of calling
   -> indexOf we pass substring it will return first occurence index if found if not return the -1
   -> conact is used to concat two string or multiple string
   -> repeat repeat the number of string
   -> slice return a subportion of string
      -> string.slice(3) // from index 3 will give rest of string
      -> string.slice(-2) // -2 string.length-2
      -> string.slice(3,6) // return 3 index to 5 6 is not inlcude it is excluded

4. string are immutable and array are mutable
   -> that means once we create the string by applying any method it will not affected the string but it will return a new string

5. Array linear collection on element
    -> array index start with 0
    -> to check the length we have length property array.length
    
6. Array method
   -> indexOf it will return indexOf the provided element  if found
   -> includes it will return the boolean value
   -> sort will only works the string properly  but number first it convert to string and check the sorting by default it is ascending
   -> concat we merge the two string

7. array refernceing (addresses in memory)
   -> whenever we create an array and refernce varaiable is also cretaed the refernces vraiable stored the addresses of the element
   -> that when we compare two array they are different because both the addresses are diffenet

8. const array
   -> we can change everything update , delete , add but we cannot chnage the addresses of the array
   
9. nested array array of array
   -> rows (number of array inside the array)
   -> cols (one array how many element are present)
   -> array_name[row][col]
   
10. basic method of array 
   -> push add the element at the last
   -> unshift add the element at the first
   -> pop remove the element at the last
   -> shift remove the element at the first
   
11. splice add,remove,update magical method for array
   -> array_varriable.splice(start_index,number_of_ele_del,item1,item2,item3)
   -> it affected the orginal array
   -> slice return a portion of array as copies

*/


// Qs1.WriteaJavaScriptprogramtogetthefirstnelementsofanarray.[ncanbeanypositivenumber].Forexample: forarray[7, 9, 0, -2]andn = 3Print, [7, 9, 0]

const numberOfElement = 4;
const numArray = [2, 5, 6, 7, 8, 9, 9, 9];

// console.log(numArray.slice(0,numberOfElement))
// console.log(numArray.slice(numArray.length-numberOfElement))


// const str = " ";

// !(str) ? console.log("string is empty")  : console.log("string is not empty")

// const str = "abhiHshek"
// const indexValue = 4;

// if(str[indexValue] === str[indexValue].toLowerCase()){
//     console.log("charcater is lower case only")
// }else{
//     console.log("charcater is not lower case only")
// }

// const string = "      abhishek";
// console.log(string.trim());



// let cars = ['mercedes', 'Honda', 'Toyota', 'Ford'];


// if(cars.includes("Hondaa")){
//     console.log("it is present in array")
// }else{
//     console.log("it is not present in array")
// }