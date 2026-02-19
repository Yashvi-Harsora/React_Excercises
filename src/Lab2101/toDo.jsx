import React,{useState} from "react";
import "./ToDo.css";

export default function ToDo(){
    const [arr1,setArr1]=useState(["task1","task2"]);
    const [t1,setT1]=useState("");
    const [t2,setT2]=useState("");
    const addTask=(task1)=>{
        setArr1([...arr1,task1]);
    }
    const removeTask=(task2)=>{
        setArr1(arr1.filter((x)=>x!=task2));
    }
    const updateTask=(task1,task2)=>{
        setArr1(arr1.map((x)=>x==task1?x=task2:x));
    }
    return(
        <>
          <div className="todo-page">
            <h1>Task List : {arr1.join("\n")}</h1>
            <br/><br/>
            <input type="text" onChange={(e)=>setT1(e.target.value)} placeholder="task to add" value={t1}/>
            <br/><br/>
            <input type="text" onChange={(e)=>setT2(e.target.value)} placeholder="task to remove" value={t2}/>
            <br/><br/>
            <button onClick={()=>addTask(t1)}>Add Task </button>
            <br/><br/>
            <button onClick={()=>removeTask(t2)}>Remove task</button>
            <br/><br/>
            <button onClick={()=>updateTask(t1,t2)}>Update Task</button>

            {/* <h3>
                added : {t1}<br/>
                removed: {t2}
                
            </h3> */}
        </div>
        </>
    );
}