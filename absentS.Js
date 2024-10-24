const students = [
    {
        id: 1,
        absent: true
    },
    {
        id: 2,
        absent: false
    },
    {
        id: 3,
        absent: true
    },
    {
        id: 4,
        absent: false
    },
    {
        id: 5,
        absent: false
    }
]

function findAbsentId(students) {
    const ans = students.filter(s => s.absent === true).map(s => s.id)
    return ans
}

function isAllAbsent(students) {
    return students.every(s => s.absent === false)
}

console.log(findAbsentId(students))
console.log(isAllAbsent(students))


