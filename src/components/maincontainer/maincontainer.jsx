import React, { useRef, useState } from 'react'
import style from "./maincontainer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Todoitem from '../todo-item/todoitem';
import { v4 as uuidv4 } from 'uuid';

const Maincontainer = () => {
    const [name,setName] = useState("")
    const submit  = (e)=>{
      if(name.trim() == "")return
        let Data ={
          id:uuidv4(),
          name,
        }
        let oldData = JSON.parse(localStorage.getItem("data")) || []
        localStorage.setItem("data",JSON.stringify([...oldData,Data]))
        setName("")
      }

  return (
    <div className={style.fullscren}>


        <div className={style.todocontainer}>
            <form onSubmit={submit} className={style.todoHeader}>
                <input onChange={(e) => setName(e.target.value)}  type="text"  placeholder='Add a new task' />
                <button><FontAwesomeIcon icon={faPlus} /></button>
            </form>
          
          <Todoitem  />

        </div>


    </div>
  )
}

export default Maincontainer