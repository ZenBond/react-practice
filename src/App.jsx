import { useEffect, useState } from 'react'
import Loading from './components/Loadingup'
import Posts from './components/Posts'
import SingleTodo from './components/SingleToDo'
import './App.css'


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [singleTodo, setSingleToDo] = useState(null)

  const getSingleToDo = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    setSingleToDo(data)
  }

  const clearSingleToDo = () => {
    setSingleToDo(null)
  }
  
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

  if(!loading && singleTodo) {
    return(
      <SingleTodo singleTodo={singleTodo} clearSingleToDo={clearSingleToDo}/>
    )
  }

  return (
    <div className='container'>
        <Posts posts={posts} getSingleToDo={getSingleToDo}/>
    </div>
  )
}



export default App