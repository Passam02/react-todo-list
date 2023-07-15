import React, {createContext} from 'react'
import UseLocalStorageReducer from '../hooks/useLocalStorageReducer'
import todoReducer from '../reducers/todo.reducer'

export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosProvider(props){
    const [todos, dispatch] = UseLocalStorageReducer("todos", [], todoReducer)

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}