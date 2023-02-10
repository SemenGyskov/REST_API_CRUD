import React from "react";
import MyInput from './UI/input/MyInput'
import Mybutton from './UI/button/MyButton'

const AddPost = ({ onAdd })=>{
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        onAdd(e.target.title.value, e.target.body.value)
        e.target.title.value = '';
        e.target.body.value = '';
    }
    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <h3>New Post!</h3>
                <MyInput placeholder="Название" name="title"/>
                <MyInput placeholder="Статья" name="body"/>
                <Mybutton onSubmit={handleOnSubmit}>Добавить</Mybutton>
                <hr/>
            </form>
        </div>
    )
}
export default AddPost