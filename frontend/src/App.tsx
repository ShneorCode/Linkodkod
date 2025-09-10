import './css/App.css'
import {Homepage} from './components/Homepage'
import '../src/css/PostCard.css'
import '../src/css/Homepage.css'
import { useContext } from 'react'
import { PostConetext, useCheckPost } from './context/Post'



function App() {
  const {posts, addPost} = useCheckPost(PostConetext)
  return (
    <>
    <Homepage />
    </>
  )
}

export default App
