import React from 'react'
import { ListItem, ListItemText, Checkbox, Chip, IconButton, ListItemSecondaryAction } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
function Todo({task, completed}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit'>
                    <Edit/>
                </IconButton>
                <IconButton aria-label='Delete'>
                    <Delete/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
export default Todo

/*<Chip
  label="Custom delete icon"
  onClick={handleClick}
  onDelete={handleDelete}
  deleteIcon={<DeleteIcon />}
  variant="outlined"
/>*/