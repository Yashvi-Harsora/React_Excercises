import React,{Component} from "react";
class ContactList extends Component{
    constructor(){
        super();
    this.state={
    fName:"",
    lName:"",
    Mobile:"",
    contacts:[],
    isEditing:false,
    

    }

    }
    handleName=(e)=>{this.setState({fName:e.target.value})}
    handleLName=(e)=>{(this.setState({lName:e.target.value}))}
    handleMobile=(e)=>{(this.setState({Mobile:e.target.value}))}
    handleSubmit=()=>{
        if(this.state.fName.trim()==="" || this.state.lName.trim()==="" || this.state.Mobile.trim()==="")
            return;
        const newContact={
            id:Date.now(),
            fName:this.state.fName,
            lName:this.state.lName,
            Mobile:this.state.Mobile,
            visible:false,
            isEditing:false
        };
        this.setState((prevState)=>({
            contacts:[newContact,...prevState.contacts],
            fName:"",
            lName:"",
            Mobile:""
        }));
        
    };
    toggleDisplay = (id) => {
    this.setState(prevState => ({
        contacts: prevState.contacts.map(c =>
            c.id === id? { ...c, visible: !c.visible }: c
        )
    }));
    };
    deleteContact=(id)=>{
        this.setState((prevState)=>({
            contacts:prevState.contacts.filter((y)=>y.id !== id),
        }));
    };
    
    toggleEdit = (id) => {
    this.setState(prevState => ({
        contacts: prevState.contacts.map(c =>
            c.id === id ? { ...c, isEditing: !c.isEditing } : c
        )
    }));}
    handleEditChange=(id,Key,value)=>{
        this.setState(prevState=>({
            contacts:prevState.contacts.map(c=>c.id===id?{...c,[Key]:value}:c)
        }))
    }
    HandleUpdate=(id)=>{
        this.setState(prevState=>({
            contacts:prevState.contacts.map(c=>c.id===id?{...c,isEditing:false}:c)
        }))
    }






    render(){
        const { fName, lName , Mobile,contacts }=this.state;
        return <>
        <div>
            Name:
            <input type="text" value={fName} onChange={this.handleName}/><br/>
            Last Name:
            <input type="text" value={lName} onChange={this.handleLName}/><br/>
            Contact:
            <input type="text" value={Mobile} onChange={this.handleMobile}/><br/>
            
            <button type="submit" onClick={this.handleSubmit}>Add Contact</button><br/>    
        </div>

        <ul>

            
            {contacts.map((y) => (
                <li key={y.id}>

                    {!y.isEditing?(
                        <>{y.fName}

                    <button onClick={() => this.toggleDisplay(y.id)}>View</button>
                    <button onClick={() => this.deleteContact(y.id)}>Delete</button>
                    <button onClick={() => this.toggleEdit(y.id)}>Update</button>
                </>
                    ):
                    (
                        <>
                <input
                    type="text"
                    value={y.fName}
                    onChange={(e) =>
                        this.handleEditChange(y.id, "fName", e.target.value)
                    }
                />
                <input
                    type="text"
                    value={y.lName}
                    onChange={(e) =>
                        this.handleEditChange(y.id, "lName", e.target.value)
                    }
                />
                <input
                    type="text"
                    value={y.Mobile}
                    onChange={(e) =>
                        this.handleEditChange(y.id, "Mobile", e.target.value)
                    }
                />
                <button onClick={() => this.HandleUpdate(y.id)}>Save</button>
            </>
                    )}
                    

                    

                    <div style={{ display: y.visible ? "" : "none" }}>
                        {y.lName} - {y.Mobile}
                    </div>
                </li>
        ))}

            

        </ul>

            

        
        </>
    }
}
export default ContactList;