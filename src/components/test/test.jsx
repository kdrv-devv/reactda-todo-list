import React, { useState,useEffect } from 'react'

const Test = () => {

    const [count,setCount] = useState(0)
    const [active,isActive] =useState(false)

    const checkActive = ()=> isActive(!active)

    // didmount - component  yaratilganda  bir marta ishlayadi(ichida joylashgan codlar). 
    // useEffect(()=>{
    //     console.log("update 1marta ishlaydi chunki bu didmount ichida joylashgan ");
    // },[])


    // didupdate - faqatgian qayisidur state alishganada ishlaydi 
    // useEffect(()=>{
    //     console.log("men haqat qaysidur state o'zgarganda ishlayman");
    
    // },[active])


    useEffect(()=>{
        return ()=>{
                console.log("UI dan o'chiib ketgandan keyin ishlaydi");

        }
    },[])




    return (
        <>
            <button onClick={()=>{setCount(p=> p+=1)}} >+</button>
            <span>{count}</span>
            <button  onClick={()=>{setCount(p=> p-=1)}}>-</button>
            <button onClick={checkActive}>show active</button>
        </>


  )
}

export default Test