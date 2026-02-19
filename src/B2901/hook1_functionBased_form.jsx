// create a registrtion form with folowing detaiks
// 1. name - text 
// 2. email - text regular expression 
// 3. password text, regular expression + password match + length and special characters
// 4. confirm password - text regulr exoression
// 5. gender radio button
// 6. country dropdown
//7. terms & conditions - checkbox
// 8. color picker - color
// 9. DOB - tale picker
// 10. submit buttom
// validate all the feilds on sumbit & if validated and not null then display all



import React,{useState} from "react";
export default function FormFunctionBased(){
    const [feild,setFeilds]=useState({
        name:"",
        email:"",
        password:"",
        cPassword:"",
        gender:"",
        country:"",
        terms:false,
        color:"black",
        DOB:"",
    });
    const handleInputFeilds=(e)=>{
         const { name, value, type, checked } = e.target;

        setFeilds({...feild, [name]: type === "checkbox" ? checked : value });
    };
    const [errors ,setErrors]=useState({});
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordValidate =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSubmit = () => {
    let newErrors = {};

    if (!feild.name.trim()) {
        newErrors.name = "Name is required";
    }

    if (!feild.email) {
        newErrors.email = "Email is required";
    } else if (!emailValidate.test(feild.email)) {
        newErrors.email = "Invalid email format";
    }

    if (!feild.password) {
        newErrors.password = "Password is required";
    } else if (!passwordValidate.test(feild.password)) {
        newErrors.password =
            "Min 8 chars, uppercase, lowercase, number & special char";
    }

    if (!feild.cPassword) {
        newErrors.cPassword = "Confirm password is required";
    } else if (feild.password !== feild.cPassword) {
        newErrors.cPassword = "Passwords do not match";
    }

    if (!feild.gender) {
        newErrors.gender = "Select gender";
    }

    if (!feild.country) {
        newErrors.country = "Select country";
    }

    if (!feild.terms) {
        newErrors.terms = "Accept terms & conditions";
    }

    if (!feild.DOB) {
        newErrors.DOB = "Select date of birth";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        alert("Form submitted successfully!");
    }
};

    return (
        <>
        <h1>Register Here !</h1><br/><br/>
        <input type="text" name="name" value={feild.name} onChange={handleInputFeilds} placeholder="Enter your name" /><span style={{ color: "red" }}>{errors.name}</span><br/><br/>
        <input type="text" name="email" value={feild.email} onChange={handleInputFeilds} placeholder="enter email" /><span style={{ color: "red" }}>{errors.email}</span><br/><br/>
        <input type="text" name="password" value={feild.password} onChange={handleInputFeilds} placeholder="password" /><span style={{ color: "red" }}>{errors.password}</span><br/><br/>
        <input type="text" name="cPassword" value={feild.cPassword} onChange={   handleInputFeilds} placeholder="confirm password" /><span style={{ color: "red" }}>{errors.cPassword}</span><br/><br/>
        Gender:
        <input type="radio" name="gender" value="Male" onChange={handleInputFeilds}   placeholder="Male"/>Male &nbsp;
        <input type="radio" name="gender" value="Female" onChange={handleInputFeilds}  placeholder="Female"/>Female <span style={{ color: "red" }}>{errors.gender}</span><br/><br/>
        Country:
        <select name="country" onChange={handleInputFeilds}>
            <option value="select"></option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="canada">canada</option>
            <option value="USA">USA</option>

        </select><span style={{ color: "red" }}>{errors.country}</span>
        <br/><br/>
        <input type="checkbox" name="terms" onChange={handleInputFeilds}  />Accept terms<span style={{ color: "red" }}>{errors.terms}</span>
        <br/><br/>
        <input type="color" name="color"  onChange={handleInputFeilds} /><span style={{ color: "red" }}>{errors.color}</span><br/><br/>
        <input type="date" name="DOB" onChange={handleInputFeilds} /><span style={{ color: "red" }}>{errors.DOB}</span><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        <h3>Form Data</h3>
        
                        <p>
                        Name: {feild.name} &nbsp; <br/>
                        Email: {feild.email} &nbsp; <br/>
                        Password: {feild.password} &nbsp; <br/>
                        Confirm Password: {feild.cPassword} &nbsp; <br/>
                        Gender: {feild.gender} &nbsp; <br/>
                        Country: {feild.country} &nbsp; <br/>
                        Terms: {String(feild.terms)} &nbsp;<br/>
                        Color: {feild.color} &nbsp; <br/>
                        Date: {feild.DOB} &nbsp; <br/>

                       
                        
                        </p>
                   
        </>

        
    );
}
 
                // email: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$

                // password: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$

                // cPassword: 
               