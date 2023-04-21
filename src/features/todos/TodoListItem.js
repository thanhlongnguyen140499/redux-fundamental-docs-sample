import React from 'react'
import { useSelector } from 'react-redux'
import { availableColors, capitalize } from '../filters/colors'
import { ReactComponent as TimesSolid } from './times-solid.svg'

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId)
}

const colorOptions = availableColors.map((c) => (
  <option key={c} value={c}>
    {capitalize(c)}
  </option>
))

const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id))
  const { text, completed, color } = todo

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => {}}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={() => {}}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={() => {}}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
