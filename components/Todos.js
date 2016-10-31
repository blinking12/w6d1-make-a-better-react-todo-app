import React, { Component } from 'react'
import TodoItem from './TodoItem'


class Todos extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this)
        this.enter = this.enter.bind(this)
        this.markDone = this.markDone.bind(this)

        this.state = {
            newTodo: '',
            todos: []
        }
    }
    typing(e) {
        this.setState({
            newTodo: e.target.value.toUpperCase()
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
    markDone(i) {
        let updatedTodos = this.state.todos

        // updatedTodos[i].done = !updatedTodos[i].done

        if (updatedTodos[i].done === false) {
            updated[i].done = true
        }
        else{
            updatedTodos[i].done = false
        }

        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        const TodoItems = this.state.todos.map((todo, i) => {
            return <TodoItem item={todo} key={i} markDone={() => this.markDone(i)}/>
        })
        return <div>
            <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter}/>
            {TodoItems}
        </div>
    }
}

export default Todos
