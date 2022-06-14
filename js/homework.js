//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/



// def find_nonconsec2():
//     mylist = []
//     for n in range((len(lst))-1):
//         if (lst[n+1] - lst[n]) != 1: 
//             mylist.append(n+1)
//     return mylist

// find_nonconsec2()

const exerciseOneArr = [1, 2, 3, 5, 6, 7]
// const secondArr = [3,4,5,6,7,8,9,10,11,12,13,14,15];


let myArray = [];
let len = myArray.length;

for (let i = 0;  (myArray[i+1] - myArray[i]) != 1; i++) {
    myArray += myArray[i+1];
}

console.log(myArray)


/*
The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.

    for (let i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
      }

From the example above, you can read:

      Statement 1 sets a variable before the loop starts (let i = 0).
      
      Statement 2 defines the condition for the loop to run (i must be less than 5).
      
      Statement 3 increases a value (i++) each time the code block in the loop has been executed.
*/




//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1]


