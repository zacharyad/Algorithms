// // Permutations

// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]

// output:[
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

let solution = [
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

var permute = function(nums) {
  //recursive function that creates an array for all perms and then uses a helper func to take in array, a memoized array, and that perm arr.
  let perms = [];
  helperFunc(nums, [], perms);
  return perms;
};


function helperFunc(arrayOfNums, currentPerms, permsToRet){
  if (arrayOfNums.length === 0 && currentPerms.length){
     permsToRet.push(currentPerms);
  } else {
    for(let i = 0; i < arrayOfNums.length; i++){
      let editArr = [...arrayOfNums.slice(0, i), ...arrayOfNums.slice(i + 1)];
      let newPerm = currentPerms.concat(arrayOfNums[i]);
      helperFunc(editArr, newPerm, permsToRet)
    }
  }
}


let input = [1,2,3]
let output = permute(input);


console.log("OUTPUT: ", output, "----- ", output, " *********** ", solution )

