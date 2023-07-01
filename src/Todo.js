import React from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
function Todo({task, completed, removeTodo, toggleTodo, id}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit'>
                    <Edit/>
                </IconButton>
                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                    <Delete/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
export default Todo