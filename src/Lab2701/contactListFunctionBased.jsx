import React,{useState} from "react";
export default function Contactlist(){
    const [feild,setFeild]=useState({
        fname:"",
        lname:"",
        Mobile:"",
        contacts:[],
        
    });
    const handleInput=(e)=>{
        setFeild({...feild,[e.target.name]:e.target.value});
    }
    const handleSubmit = () => {
    setFeild({
        ...feild,
        contacts: [...feild.contacts, {
        fname: feild.fname,
        lname: feild.lname,
        Mobile: feild.Mobile,
        visible: false,
        }],
        fname: "",
        lname: "",
        Mobile: ""
    });
    };
    const toggleView=(index)=>{
        const updateContacts=feild.contacts.map((c, i) =>
            i === index ? { ...c, visible: !c.visible } : c);
         setFeild({ ...feild, contacts: updateContacts });
    }
    const deleteContact = (index) => {
        const updatedContacts = feild.contacts.filter((c, i) => i !== index);
        setFeild({ ...feild, contacts: updatedContacts });
    };
    
    return (
    <>
        <div>
            <input type="text" value={feild.fname} placeholder="first name" name="fname" onChange={handleInput}/><br/><br/>
            <input type="text" value={feild.lname} placeholder="last name" name="lname" onChange={handleInput}/><br/><br/>
            <input type="text" value={feild.Mobile} placeholder="mobile" name="Mobile" onChange={handleInput}/><br/><br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <h3>
                Contact List: <br/>
                {feild.contacts.map((contact, index) => (
                    <div key={index}>
                        <p>
                        {contact.fname} &nbsp; <button onClick={()=>{toggleView(index)}}>View</button> &nbsp;&nbsp;&nbsp;<button onClick={()=>{deleteContact(index)}}>Delete</button> <br/><br/>
                        {contact.visible ? (<span>{contact.lname} - {contact.Mobile}</span>) : null}
                        
                        </p>
                    </div>
                    ))} <br/>
                
            </h3>
        </div>
    </>
);


}