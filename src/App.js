import React from 'react'
import TodoList from './features/todos/TodoList'
import Header from './features/header/Header'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>TODOS</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
