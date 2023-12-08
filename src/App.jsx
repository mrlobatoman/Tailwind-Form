import { useState } from 'react'
import Form from '../src/Form/Form.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
    </>
  )
}

export default App
