import React from 'react'
import Todo from './Todo'
import { Paper, List, Divider } from '@mui/material'

function TodoList({todos, removeTodo, toggleTodo}) {
    return(
        <Paper>
            <List>
            {todos.map(todo => (
                <>
                    <Todo removeTodo={removeTodo} toggleTodo={toggleTodo} id={todo.id} task={todo.task} key={todo.id} completed={todo.completed}/>
                    <Divider/>
                </>
            ))}
            </List>
        </Paper>
    )
}
export default TodoList 
