import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

//This is my render function, it will add items out to my page.
var renderView = () => {
    console.log(data)
    ReactDOM.render(  //relates to the import up top
        <Todos todos= />,//render can return or mount only 1 component
        document.getElementById('todos') //<=This is where I will mount the data
    )
}


renderView()
