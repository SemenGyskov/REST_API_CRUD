import React from "react";
import { useEffect, useState } from "react";
import AddPost from "./AddPost";

export default function Post(){
    const onAdd = async (title,body)=>{
        await fetch('https://jsonplaceholder.typicode.com/posts/',{
          method:'POST',
          body: JSON.stringify({
            title: title,
            body: body,
          }),
          headers:{
            'Content-type':'application/json; charset=UTF-8',
          },
        })
        .then((res)=>{
          if(res.status !== 201){
            return
          }else{
            return res.json()
          }
        })
        .then((data)=>{
          console.log(data)
          setPosts([...posts,data])
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
            <AddPost onAdd={onAdd}/>
        {posts.map(post=>(
            <div>
            <h1>Название поста: {post.title}</h1>
            <h3>Содержимое поста: {post.body}</h3>
            <h4>пост № {post.id} </h4><hr/>
            </div>
        ))}
    </div>
    )
}