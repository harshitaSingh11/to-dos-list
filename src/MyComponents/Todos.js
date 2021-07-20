import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {
    let myStyle = {
        minHeight: "46.8vh"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-4">To-Dos List</h3>
            {props.todos.length === 0 ? "No work pending :D" :

                props.todos.map((todo) => {
                    return (
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}

