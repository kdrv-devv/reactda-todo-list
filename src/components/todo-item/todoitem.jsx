import React, { useState, useEffect } from "react";
import style from "./todoitem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todoitem = () => {
  const [localData, setlocalData] = useState([]);
  const [editmi, isEditmi] = useState(null);
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
    const dataNew = localData.filter((item) => item.id !== id);
    setlocalData(dataNew);
    localStorage.setItem("data", JSON.stringify(dataNew));
  };

  return (
    <div className={style.todoItemContainer}>
      {localData.length > 0
        ? localData.map((itemData, idx) => (
            <div key={idx} className={style.todoItem}>
              <input type="checkbox" id={itemData.id} />
              {editmi === itemData.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <label htmlFor={itemData.id}>
                  {itemData.name || "No title"}
                </label>
              )}

              <div className={style.itemRight}>
               
                {editmi === itemData.id ? (
                  <button
                    onClick={() => handleSave(itemData.id)}
                    className={style.saveBtn}
                  >
                    <FontAwesomeIcon icon={faSave} />
                    &&
                  </button>
                ) : (
                  <button className={style.editBtn}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                )}

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
