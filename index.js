//write your code here

// Algorithm 
// declare a function named findLongestWord and initialize it with a single parameter named words.
// in the function declare a varible named longestWord and initialize it with a value of "".
// iterate over the array, for every string in the array check if the length of current string is > the length of the longestWord variable
// if true, reassign longestWord to be the current string.


const findLongestWord = (words) => {
    let longestWord = "";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
};
console.log(findLongestWord(["jazzy", "jumpy", "quaky"]));