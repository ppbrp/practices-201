const calculateAttendance = (students) => {
    if(!Array.isArray(students) || students.length === 0){
        return []
    }
    const ans = [] 
    for (const student of students) {
        if(student.attendance.length === 0){
            continue
        }
        if(!student.attendance.every(a => typeof a === 'boolean')){
            throw new Error('your attendance record is in invalid')
        }
        let sum = student.attendance.filter(b => b === true).length
        const percentage = (sum/student.attendance.length)*100
        ans.push({
            name: student.name,
            attendancePercentage: `${percentage.toFixed(2)}%`
        })
    }
    return ans
}

const students = [
    // { name: "Alice", attendance: [true, true, false, true] },
    // { name: "Bob", attendance: [false, false, false] },
    // { name: "Charlie", attendance: [] },
    // { name: "Bob", attendance: [false, false, false] },
    { name: "David", attendance: [true, "maybe", false] }
];

console.log(calculateAttendance(students))