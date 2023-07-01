import React, { useState } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Clean Kitchen", completed: false},
        { id: 2, task: "Take out trash", completed: true},
        { id: 3, task: "Buy groceries", completed: false},
    ]
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodoText => {
        setTodos([...todos, {id: 4, task: newTodoText, completed: false}])
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)
    }

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
            }}
            elevation={0}
            >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent={'center'} marginTop={'1rem'}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos} removeTodo={removeTodo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TodoApp