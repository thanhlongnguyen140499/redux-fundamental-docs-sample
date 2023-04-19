import { compose, createStore } from 'redux'
import rootReducer from './reducer'
import {
  includeMeaningOfLife,
  sayHiOnDispatch,
} from './exampleAddons/enhancers'

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

let preloadedState = {}
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
}

// const store = createStore(rootReducer, preloadedState)
const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
