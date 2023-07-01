import React, { useState } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { v4 as uuid} from 'uuid'

function TodoApp() {
    const initialTodos = [
        { id: uuid(), task: "Clean Kitchen", completed: false},
        { id: uuid(), task: "Take out trash", completed: true},
        { id: uuid(), task: "Buy groceries", completed: false},
    ]
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
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