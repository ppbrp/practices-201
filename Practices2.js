//1.
function classifyNumber(num){
    if(num === 0){
        return 'zero'
    } else if(num < 0){
        return 'negative'
    } else {
        return 'positive'
    }
}

console.log(classifyNumber(5))
console.log(classifyNumber(-3))
console.log(classifyNumber(0))

//2.
function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi)
    if(vowels !== null){
        return vowels.length
    }else {
        return 0
    }
}

console.log(countVowels('hello'))
console.log(countVowels('world'))
console.log(countVowels(''))


//3.
function isPrime(num) {
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    } else {
        return false
    }
    
}

console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(17))