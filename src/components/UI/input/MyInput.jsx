import React from "react";
import './MyInput.css'

export default function MyInput(props){
    return(
        <input type='text' {...props} className={'myInput'}/>
    )
}