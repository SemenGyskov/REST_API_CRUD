import React from "react";
import { useEffect, useState } from "react";

export default function Comments(){
    const[comments,setComments]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => setComments(data))
        .catch(error => console.error(error));
    }, [])
    return(
        <div>
        {comments.map(comment=>(
            <div>
            <h1>Название : {comment.name}</h1>
            <h2>комментарий №: {comment.id}</h2>
            <h3>email: {comment.email}</h3>
            <h4>Содержимое комментария: {comment.body} </h4>
           <hr/>
            </div>
        ))}
    </div>
    )
}