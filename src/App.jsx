import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <p className="text-2xl">Hi I am the app page</p>
    <Dashboard/>

    </div>
  )
}

export default App
