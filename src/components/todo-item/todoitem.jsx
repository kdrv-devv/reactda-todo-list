import React, { useState, useEffect } from "react";
import style from "./todoitem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todoitem = () => {
  const [localData, setlocalData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      try {
        setlocalData(JSON.parse(storedData));
      } catch (error) {
        console.error("Xato bor krch ", error);
      }
    }
  }, []);

  const deleteData = (id) => {
    let dataNew = localData.filter((item) => item.id !== id);

    localStorage.setItem("data", JSON.stringify(dataNew));
  };

//   todoni taxrirlash uchun
//   const editData =(id)=>{
//     let inputUSer = prompt("Yangi malumot kiriting:")
//     console.log(inputUSer.length);
    
//     if(inputUSer.length === 0){
//         alert("Xavotir olmang tekshirilgan ")
//     }else{
//         let editData = localData.map((item) => item.id === id ? item.name = inputUSer:item.name );
//         console.log(editData);
        
//         localStorage.setItem("data", JSON.stringify(editData));
//     }
 

//   }




  return (
    <div className={style.todoItemContainer}>
      {localData.length > 0
        ? localData.map((itemData, idx) => (
            <div key={idx} className={style.todoItem}>
              <h6>{itemData.name || "No title"}</h6>
              <div className={style.itemRight}>

                <button  className={style.editBtn}>
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button
                  onClick={() => deleteData(itemData.id)}
                  className={style.trashBtn}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Todoitem;
