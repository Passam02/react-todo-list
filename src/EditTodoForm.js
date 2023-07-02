import React from 'react'
import { TextField } from '@mui/material'
import useInputState from './hooks/useInputState'

function EditTodoForm({editTodo, id, task, toggleEdit}) {
    const [value, handleChange, reset] = useInputState(task)
    return ( 
        <form onSubmit={(e) => {
            e.preventDefault()
            editTodo(id, value)
            reset()
            toggleEdit()
        }}>
            <TextField 
            fullWidth 
            variant='standard' 
            margin='normal' 
            value={value} 
            onChange={handleChange}
            />
        </form>
    )
}
export default EditTodoForm