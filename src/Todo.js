import React, {useContext} from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import { TodosContext } from './contexts/todos.context'


function Todo({task, completed, id,}) {
    const {removeTodo, toggleTodo } = useContext(TodosContext)
    const [isEditing, toggle] = useToggleState()
    return (
        <ListItem style={{height: '64px'}}>
            {isEditing ? <EditTodoForm id={id} task={task} toggleEdit={toggle}/>:
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit' onClick={toggle}>
                    <Edit/>
                </IconButton>
                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                    <Delete/>
                </IconButton>
            </ListItemSecondaryAction>
            </>}
        </ListItem>
    )
}
export default Todo