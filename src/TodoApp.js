import React, { useEffect } from 'react'
import useTodoState from './hooks/useTodoState'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


function TodoApp() {
    const initialTodos = []
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)

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
                    <TodoList 
                        todos={todos} 
                        toggleTodo={toggleTodo} 
                        removeTodo={removeTodo}
                        editTodo={editTodo}    
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TodoApp