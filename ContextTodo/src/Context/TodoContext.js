import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: Date.now(),
            todo: "Sample Todo",
            completed: false
        },
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    toogleUpdate: (id)=>{}
})



export const useTodo = ()=> useContext(TodoContext)

export const TodoProvider = TodoContext.Provider