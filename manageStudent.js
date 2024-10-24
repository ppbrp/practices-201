class Students {
    static runningId = 1
    constructor(name,attendance){
        this.id = Students.runningId++
        this.name = name
        this.attendance = attendance
    }
    getStudent(){
        return this
    }
}

module.exports = Students
