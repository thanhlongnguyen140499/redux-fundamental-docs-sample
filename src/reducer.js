import { combineReducers } from 'redux'

import filtersReducer from './features/filters/filtersSlice'
import todosReducer from './features/todos/todosSlice'

// export default function rootReducer(state = {}, action) {
//   // always return a new object for the root state
//   return {
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action),
//   }
// }

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
