import React, { Component } from 'react'

//setting a variable to the construcotr function.  React is making a new instance of this code.  This is what is being returned the HTML doc, mounting 1 component.  Props can be called anything.
const TodoItems = (props) => <div className="checkbox">
    <label><input type="checkbox" value=""/>{props.todo}</label>
</div>

// must match component name, which will allow us to import on the other side.
export default TodoItems
