import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';


const TodoListTutorial = () => {
    const [todoList,setToDoList] = useState([]);
    const [title,setTitle] = useState(""); 
    const [editId,setEditId] = useState(null);
    const [editValue,setEditValue] = useState("");
    const handleChange = (e) =>{
        setTitle(e.target.value);
    }
    const handleChangeEdit = (e) =>{
        setEditValue(e.target.value);
    }
    const handleAdd = () =>{
        if(title.trim()===""){
            return;
        }
        const newTask  = {id:uuidv4(),title:title};
        const newToDoList = [...todoList];
        newToDoList.push(newTask);
        setToDoList(newToDoList);
        setTitle('');
        
    }
    const handleEdit = (id,val) =>{
        console.log(id);
        setEditId(id);
        setEditValue(val);

    }
    const handleSave = (id) =>{
        console.log(editValue);
        if(editValue===""){
            return;
        }
        const newList = todoList.map((t)=>{
            if(t.id===id){
                const updatedTask = {id:id,title:editValue};
                return updatedTask;
            }
            else{
                return t;
            }
        });
        setToDoList(newList);
        setEditId(null);

    }
    const handleCancel = () =>{
        setEditId(null);

    }
    const handleDelete = (id) =>{
        if(!id){
            return;
        }
        const newList = todoList.filter((t)=>t.id!==id);
        setToDoList(newList);
    }

  return (

    <div>
        <div className='addTask'>
            <input type='text' value={title} onChange={handleChange}/>
            <button onClick={handleAdd}>Add Task</button>
        </div>

        <div className='list'>
            <ul>
            {todoList.map((t)=>{
                return (<li styles={{listStyle: "none"}} key={t.id}>
                    {editId===t.id?(
                        <>
                        <input type='text' value={editValue} onChange={handleChangeEdit}/>
                        <button onClick={()=>handleSave(t.id)}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                        </>
                        
                    ):
                    (
                        <>
                        <p>{t.title}</p>
                        <button onClick={()=> handleEdit(t.id,t.title)}>Edit</button>
                        <button onClick={()=> handleDelete(t.id)}>Delete</button>
                        </>
                    )
                }
                        
                  </li>  
                );
                  
            })}
            </ul>
        </div>
    </div>
  )
};

export default TodoListTutorial