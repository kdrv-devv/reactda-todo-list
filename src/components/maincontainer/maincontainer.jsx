import React, { useRef, useState } from 'react'
import style from "./maincontainer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Todoitem from '../todo-item/todoitem';

const Maincontainer = () => {
    const [name,setName] = useState("")
    const inputRef = useRef()
    const submit  = (e)=>{
      if(name.trim() == "")return
        let Data ={
          id:Date.now(),
          name,
        }
        let oldData = JSON.parse(localStorage.getItem("data")) || []
        localStorage.setItem("data",JSON.stringify([...oldData,Data]))
        inputRef.current.value = ""
      }

  return (
    <div className={style.fullscren}>
        {/* <h1 className={style.nameApp}>To do List</h1> */}
        <div className={style.todocontainer}>
            <form onSubmit={submit} className={style.todoHeader}>
                <input onChange={(e) => setName(e.target.value)} ref={inputRef}  type="text"  placeholder='Add a new task' />
                <button><FontAwesomeIcon icon={faPlus} /></button>
            </form>
          
          <Todoitem/>

        </div>


    </div>
  )
}

export default Maincontainer