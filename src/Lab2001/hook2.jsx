import React,{useState} from "react";
export default function Hook2Example(){
    const [user,setUser] = useState({
        name:"guest",
        age:25,
        ce:true,
        city:"rajkot"
    });
    const handleNameChange=(e)=>{
        setUser({...user,name:e.target.value})
    }
    const handleAgeChange=(e)=>{
        setUser({...user,age:e.target.value})
    }
    const handlCityChange=(e)=>{
        setUser({...user,city:e.target.value})
    }
    const handlCEChange=()=>{
        setUser({...user, ce: !user.ce})
    }
    return (
        <>
            <input type="text" value={user.name} onChange={handleNameChange} />
            <br/><br/>
            <input type="number" value={user.age} onChange={handleAgeChange} />
            <br/><br/>
            {/* <input type="checkbox" checked={user.ce}   onChange={()=>setUser({...user,ce:!user.ce})}/><br/><br/> */}
            <input type="checkbox" checked={user.ce} onChange={handlCEChange}/><br/>

            <input type="city" value={user.city} onChange={handlCityChange} /><br/><br/>

            <div>
                <h1>
                    Name:{user.name}<br/>
                    Age:{user.age}<br/>
                    CE: {String(user.ce)}<br/>
                    City:{user.city}
                </h1>
            </div>
        </>
    );
    


}