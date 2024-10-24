class Todo {
    static runningId = 1
    constructor(desc){
        this.id = Todo.runningId++
        this.description = desc
    }
    getTodo(){
        return this
    }
    setDescription(desc){
        this.description = desc
    }
}

module.exports = Todo