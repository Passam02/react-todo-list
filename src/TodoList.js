import React, {useContext} from 'react'
import Todo from './Todo'
import { Paper, List, Divider } from '@mui/material'
import { TodosContext } from './contexts/todos.context'


function TodoList() {
    const todos = useContext(TodosContext)
    return(
        <Paper>
            <List style={{padding: '0'}}>
            {todos.map((todo,i) => (
                <>
                    <Todo
                        {...todo}
                        key={todo.id} 
                    />
                    {i < todos.length - 1 && <Divider key={todo.id + i}/>}
                </>
            ))}
            </List>
        </Paper>
    )
}
export default TodoList 
