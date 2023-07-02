import React from 'react'
import { TextField } from '@mui/material'
import useInputState from './hooks/useInputState'
import { Cancel } from '@mui/icons-material'

function EditTodoForm({editTodo, id, task, toggleEdit}) {
    const [value, handleChange, reset] = useInputState(task)
    return ( 
        <form 
            onSubmit={(e) => {
                e.preventDefault()
                editTodo(id, value)
                reset()
                toggleEdit()
            }}
            style={{marginLeft: '1rem', width: '80%'}}
        >
            <TextField 
            fullWidth 
            variant='standard' 
            margin='normal' 
            value={value} 
            autoFocus
            onChange={handleChange}
            />
            
        </form>
    )
}
export default EditTodoForm