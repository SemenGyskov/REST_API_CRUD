import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Post from './components/Post';
import { useState, useEffect } from 'react';
import Comments from './components/Comments';
import AddPost from './components/AddPost';
import Loader from './components/UI/loader/Loader'

function App() {
  const[posts,setPosts]=useState()
  const fetchData = async()=>{
    await fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((res)=> res.json())
    .then((data)=> setPosts(data))
    .catch((err)=>{
      console.log(err)
    })
  }
  const onDelete = async (id)=>{
    await fetch('https://jsonplaceholder.typicode.com/posts/${id}',
    {method: 'DELETE',})
    .then((res)=>{
      if (res.status !== 200){
        return
      }else{
        setPosts(
          posts.filter((post)=>{
            return post.id !== id
          })
        )
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const onUpdate = async (id)=>{
    const requestOptions = {
      method: 'PUT',
      headers:{'Content-Type':'appliction/json'},
      body: JSON.stringify({name: 'React Hooks PUT Request Example'})
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/${id}', requestOptions)
    const data = await response.json()
    console.log(data)
  }
 
  console.log(posts)
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <nav className="nav_bar">
      <Link to="/post">К постам </Link> | <Link to="/comments"> К коментариям</Link> 

        </nav>
        <Routes>
          <Route path="/post/" element={<Post />}/>
          <Route path="/comments/" element={<Comments />}/>
        </Routes>
      </div>
    </BrowserRouter><Loader/>
    </div>
  );
  }
export default App;
