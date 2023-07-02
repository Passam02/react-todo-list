import React from 'react'
import Todo from './Todo'
import { Paper, List, Divider } from '@mui/material'

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    return(
        <Paper>
            <List>
            {todos.map(todo => (
                <>
                    <Todo 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo} 
                        id={todo.id} 
                        task={todo.task} 
                        key={todo.id} 
                        completed={todo.completed}
                        editTodo={editTodo}   
                    />
                    <Divider/>
                </>
            ))}
            </List>
        </Paper>
    )
}
export default TodoList 
