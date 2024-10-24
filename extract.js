const extractAndRename = (obj) => {
    const ans = obj.map((obj) => {
        obj['fullName'] = obj['name']
        obj['yearsOld'] = obj['age']
    })
    return ans
}

console.log(extractAndRename({name:'John',age:25,city:'New York'}))
console.log(extractAndRename({name:'Jane',age:30}))
