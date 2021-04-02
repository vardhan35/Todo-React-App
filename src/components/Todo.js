import React, { useState } from 'react'
import uuid from 'uuid/dist/v1'

const Todo = () => {
    const[item, setItem]=useState('');
    const [todo, setTodo]= useState([]);
    const handleChange =(e)=>{
        e.preventDefault();
        setItem(e.target.value);
    }

    const handleClick =(e)=>{
        e.preventDefault();
        const newItem = {id:uuid(), item}
        if (item){
            setTodo((todo)=>{
                return [...todo, newItem]
            })
        }
        setItem('');
    }
    const onDelete=(id)=>{
        setTodo(todo.filter((elem)=>{ 
            return elem.id !== id
        }))
    }

        
    return (
        <>
        <div className="main">
            <div className="input">
                <input type="text" value={item} required onChange={handleChange} placeholder="Add Your Todos Here..."/>
                <button type="button" className="btnadd" onClick={handleClick}>Add Todo</button>
            </div>
            {
                todo.map((post, key)=>{
                    const{id, item}= post;
                    return(
                        <div className="list" key={id}>
                            <h2>{item}</h2>
                            <button className="btn-delete" type="button" onClick={()=>onDelete(id)}>Delete</button>
                        </div>
                    ) 
                })
            }
            </div>
        </>
    )
}

export default Todo
