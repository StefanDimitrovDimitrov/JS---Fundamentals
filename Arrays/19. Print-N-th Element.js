function printNElements(arr){
  n = Number(arr.pop())
  newArr = []
  for (let i = 0; i < arr.length; i += n){
      newArr.push(arr[i])
  }

  console.log(newArr.join(' '))

}

printNElements(['5', '20', '31', '4', '20', '2'])

// 1.	Print N-th Element
// Write a function that collect each element of an array, on a given step.
// The input comes as array of strings. The last element is N - the step.
// The collections are every element on the N-th step starting from the first one. If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. Then, print elements in a row, separated by single space.
// Examples
// Input	Output
// ['5', '20', '31', '4', '20', '2']	5 31 20
// ['dsa', 'asd', 'test', 'test', '2']	dsa test
// ['1', '2', '3', '4', '5', '6']	1
