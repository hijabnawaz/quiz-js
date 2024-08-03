// to find max element in array
function Max(arr) {
    if (arr.length === 0) {
      return null; 
    }

    let max = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; 
      }
    }
  
    return max; 
  }
  const numbers = [5,6,8,8,7,7,6,5,4,2,2,2,2,];
  console.log(Max(numbers)); 

  //   fun to reverse array
 function reverseArr(arr) {
    const length = arr.length;
  
    for (let i = 0; i < length / 2; i++) 
        {
      let temp = arr[i];
      arr[i] = arr[length - 1 - i];
      arr[length - 1 - i] = temp;
       }
  
    return arr;
  }
  const originalArr = [1, 2, 3, 4, 5];
  const reversedArr = reverseArr(originalArr);
  console.log(reversedArr); 

  //map method to square elements in array
  const originalArray = [1, 2, 3, 4, 5];

const squareArr = originalArray.map(function(element) {
  return element * element;
});

const squareArrayArr = originalArray.map(element => element * element);

console.log(squareArr);       
console.log(squareArrayArr); 

// remove evennumber from array

function eraseEvenNumbers(arr) {
    return arr.filter(function(element) {
      return element % 2 !== 0;
    });
  }
   
  const origArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filtereArray = eraseEvenNumbers(origArray);
  console.log(filtereArray);

  // reduce method to calcuate sum
const num = [1, 2, 3, 4, 5];

const sum = num.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// extract usernames 

const users = [
    { name: 'Hiba', age: 16 },
    { name: 'Hijab', age: 19 },
    { name: 'Zaeem', age: 25 }
  ];

  const names = users.map(user => user.name);
  console.log(names);

 // to getuserolderthan30
 function UsersOlder30(users) {
    return users.filter(user => user.age > 30);
  }
  const users = [
    { name: 'aykez', age: 30 },
    { name: 'baran', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];
  
  const olderUsers = UsersOlder30(users);
  console.log(olderUsers);

   // count of unique elements
  
   const elements = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

   const counts = elements.reduce((acc, elem) => {
  acc[elem] = (acc[elem] || 0) + 1;
  return acc;
  }, {});

console.log(counts);

// to flatten a nested array
function flatArr(arr) {
    return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? flatArr(toFlatten) : toFlatten);
    }, []);
  }
  const nestedArray = [1, [2, [3, 4], 5], [6, 7]];

const flattened = flatArr(nestedArray);
console.log(flattened);

// use filter and map to user older than 30
function getUsersOlder30(users) {
    return users
      .filter(user => user.age > 30)  
      .map(user => user.name);       
  }
  const users = [
    { name: 'Alyia ', age: 40 },
    { name: 'Bunny', age: 25 },
    { name: 'Chips', age: 35 },
    { name: 'Dora', age: 50 }
  ];
  
  const names = getUsersOlder30(users);
  console.log(names); 
  


  


  
  
