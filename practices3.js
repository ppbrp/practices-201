//1
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2)
}

console.log(combineArrays([1,2],[4,5]))
console.log(combineArrays(['a','b'],['c','d']))
console.log(combineArrays([],[1,2,3]))

//2
function getStringLengths(arr) {
    return arr.map(txt => txt.length);
}

console.log(getStringLengths(['apple','kiwi','orange']))
console.log(getStringLengths(['hello','world']))
console.log(getStringLengths(['ChatGPT','AI']))