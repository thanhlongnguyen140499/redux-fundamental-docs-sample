import React from 'react'
import { useSelector } from 'react-redux'

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}

const Footer = () => {
  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed)
    return uncompletedTodos.length
  })

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={() => {}}>
          Mark All Completed
        </button>
        <button className="button" onClick={() => {}}>
          Clear Completed
        </button>
      </div>

      <RemainingTodos count={todosRemaining} />
    </footer>
  )
}

export default Footer
