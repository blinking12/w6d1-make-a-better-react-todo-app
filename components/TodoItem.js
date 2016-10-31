import React, { Component } from 'react'

//setting a variable to the construcotr function.  React is making a new instance of this code.  This is what is being returned the HTML doc, mounting 1 component.  Props can be called anything.
const TodoItems = (props) => {
    return <div className={props.item.done?'list-group-item disabled':'list-group-item'} onClick={props.markDone}>
    <input type="checkbox" checked={props.item.done} />
    <span className={props.item.done?'text-done':''}>{props.item.text}</span>
</div>
}



// must match component name, which will allow us to import on the other side.
export default TodoItems
