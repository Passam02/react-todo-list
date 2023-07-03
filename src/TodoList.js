import React from 'react'
import Todo from './Todo'
import { Paper, List, Divider } from '@mui/material'

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    return(
        <Paper>
            <List style={{padding: '0'}}>
            {todos.map((todo,i) => (
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
                    {i < todos.length - 1 && <Divider key={todo.id + i}/>}
                </>
            ))}
            </List>
        </Paper>
    )
}
export default TodoList 
