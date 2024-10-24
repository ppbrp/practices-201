const Students = require('./manageStudent.js')
function attendanceManager() {
    const ans = []

    function addStudent(name, attendance) {
        return ans.push(new Students(name, attendance))
    }

    function getStudentAttendance(name) {
        const student = ans.find(x => x.name === name)
        if (!student) {
            return 'Student not found'
        }
        if (student.attendance.length === 0) {
            return 'No attendance record'
        }
        if(!student.attendance.every(b => typeof b === 'boolean')){
            return 'Wrong Attendance type'
        }
        return String(ans.filter(x => x.name === name).map(y => {
            let sum = y.attendance.filter(t => t === true).length
            let avg = (sum / y.attendance.length) * 100
            return avg.toFixed(2)
        }) + '%')
    }

    function getAllAttendanceAvg() {
        const all = []
        ans.map(x => {
            return all.push({
                id: x.id,
                name: x.name,
                AvgAttendance : getStudentAttendance(x.name)
            })
        })
        return all
    }

    return { addStudent , getStudentAttendance , getAllAttendanceAvg }
}


const student = attendanceManager()
console.log(student.addStudent('Gett', [true, true , false]))
console.log(student.addStudent('ppbrp', [true, false , false]))
console.log(student.addStudent('ppete', [true, true , true]))
console.log(student.getAllAttendanceAvg())