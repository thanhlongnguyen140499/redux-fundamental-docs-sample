import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} todo={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
