import React, { Component } from 'react'

//setting a variable to the construcotr function.  React is making a new instance of this code.  This is what is being returned the HTML doc, mounting 1 component.  Props can be called anything.
const TodoItems = (props) => <div className="checkbox" onClick={props.markDone}>
    <input type="checkbox" checked={props.item.done} />
    <span style={{textDecoration:props.item.done?'line-though':''}}>{props.item.text}</span>
</div>

// must match component name, which will allow us to import on the other side.
export default TodoItems
