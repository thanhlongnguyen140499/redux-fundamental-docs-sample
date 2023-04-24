import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'
import { selectFilteredTodoIds, selectTodoIds } from './todosSlice'

// const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const TodoList = () => {
  // const todoIds = useSelector(selectTodoIds, shallowEqual)
  // const todoIds = useSelector(selectTodoIds)
  const todoIds = useSelector(selectFilteredTodoIds)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
