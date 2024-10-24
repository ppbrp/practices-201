const Todo = require('./todomore.js')
function TodoManagement() {
    const todos = []
    function addTodo(desc){
        todos.push(new Todo(desc))
    }
    function findTodo(searchId){
        return todos.find((todo) => todo.id === searchId)
    }
    function findIndexTodo(searchId){
        return todos.findIndex((todo) => todo.id === searchId)
    }
    function removeTodo(removeId){
        return todos.splice(findIndexTodo(removeId),1)
    }
    function getTodos(){
        return todos
    }

    return { addTodo , findTodo , findIndexTodo , removeTodo , getTodos }
}

const todomanager = TodoManagement()
console.log(todomanager.addTodo('Netflix Time'))
console.log(todomanager.getTodos())