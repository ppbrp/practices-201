const removeFalsyValues = (arr) => {
    return arr.filter(s => Boolean(s))
}

console.log(removeFalsyValues([0,1,false,2,'',3]))
console.log(removeFalsyValues(['a','','b',null,'c']))
console.log(removeFalsyValues([null,undefined,'A']))