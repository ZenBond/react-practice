import { useEffect, useState } from 'react'
import Loading from './components/Loadingup'
import Posts from './components/Posts'
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
        <Loading />
      </div>
    )
  }

  return (
    <div className='container'>
        <Posts posts={posts}/>
    </div>
  )
}



export default App