import React, { Component } from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {
    const TodoItems = props.todos.map((todo, i) => {
        return <TodoItem todo={todo} key={i} />
    })
    return <div>
        {TodoItems}
    </div>  //Here is where the TodoItems component is returned to me div
}
//This is where Todos gets exported
export default Todos

    
