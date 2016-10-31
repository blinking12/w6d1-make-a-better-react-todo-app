import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this)
        this.enter = this.enter.bind(this)
        this.click = this.click.bind(this)
        this.markDone = this.markDone.bind(this)

        this.state = {
            newTodo: '',
            todos: []
        }
    }
    typing(e) {
        this.setState({
            newTodo: this.capitalizeFirstLetter(e.target.value)
        })
    }
    enter(e) {
        if (e.key === 'Enter') {
            let updatedTodos = this.state.todos

            updatedTodos.push({
                text: e.target.value,
                done: false
            })

            this.setState({
                newTodo: '',
                todos: updatedTodos
            })
        }
    }
    click(e) {

            let updatedTodos = this.state.todos

            updatedTodos.push({
                text: e.target.value,
                done: false
            })

            this.setState({
                newTodo: '',
                todos: updatedTodos
            })
    }
    markDone(i) {
        let updatedTodos = this.state.todos

        // updatedTodos[i].done = !updatedTodos[i].done

        if (updatedTodos[i].done === false) {
            updatedTodos[i].done = true
        }
        else{
            updatedTodos[i].done = false
        }

        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        var TodoItems = this.state.todos.map((todo, i) => {
            return <TodoItem item={todo} key={i} markDone={() => this.markDone(i)}/>
        })
        return <div>
            <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter}/>
            <div className="text-center button">
                <button value={this.state.newTodo} onClick={this.click} onChange={this.typing} type="button" id="addBtn">Add</button>
            </div>
            {TodoItems}
        </div>
    }

    // helper methods
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    capitalizeAll(str) {
        return str.split(' ').map(capitalizeFirstLetter).join(' ')
    }
}

export default Todos
