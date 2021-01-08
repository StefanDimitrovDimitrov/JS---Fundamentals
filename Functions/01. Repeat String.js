function repeatString(string, number){
    result = '';
    for (let i = 0; i < number; i++) {
        result +=string;     
    }
    console.log(result);
}
repeatString("abc", 3)








// Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).
// Examples
// Input	Output
// abc
// 3	abcabcabc
// String
// 2	StringString
