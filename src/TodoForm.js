import React, { useContext} from 'react'
import { TextField, Paper } from '@mui/material'
import useInputState from './hooks/useInputState'
import { TodosContext } from './contexts/todos.context'

function TodoForm(){
    const [value, handleChange, reset] = useInputState("")
    const {addTodo} = useContext(TodosContext)
    return (
        <Paper style={{
            margin: '1rem 0',
            padding: '0 1rem'
        }}>
            <form onSubmit={e=> {
                e.preventDefault()
                addTodo(value)
                reset()
            }}
        >
                <TextField fullWidth variant='standard' value={value} onChange={handleChange} margin='normal' label="Add New Todo"/>
            </form>
        </Paper>
    )
}
export default TodoForm