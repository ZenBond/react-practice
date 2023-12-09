import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await res.json()
      setPosts(data)
      setLoading(false)
    }
    
    fetchPosts()
  },[])
  
  
  if(loading) {
    return (
      <div className='container'>
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <div className='container'>
          <h1>We have posts</h1>
    </div>
  )
}



export default App