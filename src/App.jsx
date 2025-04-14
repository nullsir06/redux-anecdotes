import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <br />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App

