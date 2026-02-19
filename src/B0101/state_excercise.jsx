//create a class based component that will allow user ti register 
//1. name (text)
//2. email (email)
//3. password 
//4. confirm password
//5.gender (radio buttons)
//6. country ( dropdown with atleast 5 countries)
//7. terms and conditions ( checkbox)
//8. color picker
//9. date time
//on form submission , validate the inputs and display 
//an alert with the entered information ( except password feilds)

import React,{Component} from "react";

class RegisterUser extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            cPassword:"",
            gender:"",
            country:"",
            terms:false,
            color:"black",
            date:""


        }
        
    }
    handleNameChange = (e) => {this.setState({name:e.target.value});}
    handleEmailChange = (e) => {this.setState({email:e.target.value});}
    handlePasswordChange = (e) => {this.setState({password:e.target.value});}
    handleConfirmPassword = (e) => {this.setState({cPassword:e.target.value});}
    handleGenderChange = (e) => {this.setState({gender:e.target.value});}
    handleCountryChange = (e) => {this.setState({country:e.target.value});}
    handleTermsChange = (e) => {this.setState({terms:e.target.checked});}
    handleColorChange=(e)=>{this.setState({color:e.target.value});}



    render(){
        const {name , email , password , cPassword , gender , country , terms , color }=this.state;
        return <>
            <div>

                <form action="">
                    
                    Name:<input type="text" value={name} onChange={this.handleNameChange} /><br/><br/>
                    email:<input type="email" name="email" value={email} onChange={this.handleEmailChange} /><br/><br/>
                    password:<input type="password" name="password" value={password} id="pwd" onChange={this.handlePasswordChange} /><br/><br/>
                    confirm password:<input type="password" name="cPassword" value={cPassword} id="cpwd" onChange={this.handleConfirmPassword} /><br/><br/>
                    Gender:
                    male<input type="radio" name="gender" value="male"  onChange={this.handleGenderChange} />&nbsp;
                    female<input type="radio" name="gender" value="female"  onChange={this.handleGenderChange} /><br/><br/>
                    Select country: <select  value={country} onChange={this.handleCountryChange} >
                        <option value=""></option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Phillipiens">Phillipiens</option>
                    </select><br/><br/>
                    Change color to : <input type="color" value={color} onChange={this.handleColorChange} /><br/><br/>
                    Accept terms:<input type="checkbox" checked={terms} onChange={this.handleTermsChange} /> <br/><br/>

                </form>
                <div>
            <h3 style={{color: color}}> Name: {name}</h3>
            <h3 style={{color: color}}>Email: {email}</h3>
            <h3 style={{color: color}}>Gender: {gender}</h3>
            <h3 style={{color: color}}>Country: {country}</h3>
          </div>
           <button type="submit" >Register</button>
            </div>
        
        </>
    }
}
export default RegisterUser;