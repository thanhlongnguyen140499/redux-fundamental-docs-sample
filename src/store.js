import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducer'
import {
  includeMeaningOfLife,
  sayHiOnDispatch,
} from './exampleAddons/enhancers'
import {
  delayedMessageMiddleware,
  loggerMiddleware,
  print1,
  print2,
  print3,
} from './exampleAddons/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
// const middlewareEnhancer = applyMiddleware(print1, print2, print3, loggerMiddleware, delayedMessageMiddleware)

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(
    print1,
    print2,
    print3,
    loggerMiddleware,
    delayedMessageMiddleware
  )
  // other store enhancers if any
)

let preloadedState = {}
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
}

// const store = createStore(rootReducer, preloadedState)
// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, composedEnhancer)

export default store
