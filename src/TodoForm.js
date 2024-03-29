import React, { useContext} from 'react'
import { TextField, Paper } from '@mui/material'
import useInputState from './hooks/useInputState'
import { DispatchContext } from './contexts/todos.context'

function TodoForm(){
    const [value, handleChange, reset] = useInputState("")
    const dispatch = useContext(DispatchContext)
    return (
        <Paper style={{
            margin: '1rem 0',
            padding: '0 1rem'
        }}>
            <form onSubmit={e=> {
                e.preventDefault()
                dispatch({type: "ADD", task: value})
                reset()
            }}
        >
                <TextField fullWidth variant='standard' value={value} onChange={handleChange} margin='normal' label="Add New Todo"/>
            </form>
        </Paper>
    )
}
export default TodoForm