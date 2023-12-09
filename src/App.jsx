import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await res.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])


  return (
    <div className='container'>
      <h1>Test</h1>
    </div>
  )
}

export default App
