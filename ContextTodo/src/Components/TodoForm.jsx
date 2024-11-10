import { useState } from "react";
import { useTodo } from "../Context/TodoContext";
function TodoForm() {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()
    const addTodos = (e)=>{
        e.preventDefault()
        console.log(todo)
        if(todo) {
            addTodo(todo)
            setTodo('')
        }
        console.log(todo)
    }
    return (
        <form  className="flex" onSubmit={addTodos}>
            <input
                type="text"
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

