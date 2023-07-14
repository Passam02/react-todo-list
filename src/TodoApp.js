import React, { useEffect } from 'react'
import useTodoState from './hooks/useTodoState'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import ColorMode from './ColorMode'
import { TodosProvider } from './contexts/todos.context'


function TodoApp({setDarkMode}) {

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            }}
            elevation={0}
            >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS </Typography>
                    <ColorMode setDarkMode={setDarkMode}/>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent={'center'} marginTop={'1rem'}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm/>
                        <TodoList    
                        />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TodoApp