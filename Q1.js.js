
// Q1. Array is sorted into sub-arrays of duplicate values.

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Function that organizes sortedArray into individual array that is ordered.

const organizeArray = (arr) => { 
  // sort the array numerically
  const sortedArray = arr.sort((a, b) => a - b);
  // create an empty array to hold the organized array and a tempArray to hold the duplicate values
  const organizedArray = [];
  let tempArray = [];

  // loop through the sorted array
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      tempArray.push(sortedArray[i]);
    } else {
      // push the last element into the tempArray
      tempArray.push(sortedArray[i]);
      // push the tempArray into the organizedArray
      organizedArray.push(tempArray);
      // reset the tempArray
      tempArray = [];
    }
  }
  return organizedArray;
}

console.log(organizeArray(array));


//*********************************************************************************
// Q1. Bonus This function takes an unsorted mixed array of numbers and strings. 
// The result is an object with 2 sorted arrays, one of numbers and one of strings.

const array2 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, "2","10","1","5","1","20","20"];

//*********************************************************************************

function subArraysByType (arr, subs) {
  // create an empty object to hold the sorted arrays
  let strArray = [];
  let numArray = [];
  let resultSort = [];

  // sort the array numerically
  arr.sort((a, b) => a - b);
  // sapearte the numbers and strings
  arr.forEach((item) => {
    if (typeof item === 'number') {
      numArray.push(item);
    } else if (typeof item === 'string') {
      strArray.push(item);
    }
  });
  // push the sorted arrays into the resultSort array

  if (subs === 'subs') {
    resultSort.push(subArraysByType(numArray), subArraysByType(strArray));
    return resultSort;
  } else {
    //return both arrays
    return { numArray, strArray };
  }

}

// return separate arrays for numbers and strings
console.log(subArraysByType(array2));

//Return array with array with 2 sub-arrays, one for numbers and one for strings
console.log(subArraysByType(array2, 'subs'));

 