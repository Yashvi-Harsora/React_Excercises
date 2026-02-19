import React,{Component} from "react";
class MultiPartForm extends Component{
    constructor(){
        super();
    this.state={
        state1:"",
        state2:"",
        state3:"",
        state4:"",
        state5:"",
        state6:"",
        state7:"",
        state8:"",
        state9:"",
        index:0
    }
    }
    btnNext=()=>{
        this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
    }
    btnPrev=()=>{
         this.setState((prevState) => ({
      index: prevState.index - 1,
    }));    }

    
    render(){
        const{state1,state2,state3,state4,state5,state6,state7,state8,state9,index}=this.state
        return<>
        <div>
            <h1>part1</h1>
            <div style={{display:index===0?"":"none"}}>
            <input type="text" value={state1} onChange={(e)=>this.setState({state1 :e.target.value})} placeholder="name" /><br/><br/>
            <input type="text"  value={state2} onChange={(e)=>this.setState({state2:e.target.value})} placeholder="lastname"/><br/><br/>
            <input type="text" value={state3} onChange={(e)=>this.setState({state3:e.target.value})} placeholder="mobil eno"/><br/><br/>
            </div>

        </div>
       
        <div style={{display:index===1?"":"none"}}>
            <h1>part2</h1>
            <div >
                Gender:
            <input type="radio" name="gender" value="Female" checked={state4 === "Female"} onChange={(e) => this.setState({ state4: e.target.value })} />Female
            <input type="radio"name="gender"  value="Male" checked={state4 === "Male"} onChange={(e) => this.setState({ state4: e.target.value })} />Male
            <br/><br/>
            
            <select value={state5} onChange={(e) => this.setState({ state5: e.target.value })}> 
                <option value="">select</option>
                <option value="rajkot">rajkot</option>
                <option value="ahmedabad">ahmedabad</option>
                <option value="anand">anand</option>

            </select><br/><br/>
            t6: branch -checkbox
            <input type="checkbox" value="CSE" onChange={(e) => this.setState({ state6: e.target.checked ? "CE" : "" })}  />CE
            <input type="checkbox" value="IT"  onChange={(e) => this.setState({ state6: e.target.checked ? "IT" : "" })}  />IT
            <br/><br/>
            </div>

        </div>
        <div style={{display:index===2?"":"none"}}>
            <h1 >part3</h1>
            <div>
                t7: color:
                <input type="color" value={state7} onChange={(e) => this.setState({ state7: e.target.value })} /><br/><br/>
                t8: dob date picker
                <input type="date" value={state8} onChange={(e) => this.setState({ state8: e.target.value })} /><br/><br/>
                t9: about- textarea
                <textarea value={state9}  onChange={(e) => this.setState({ state9: e.target.value })} ></textarea><br/><br/>
            </div>

        </div>
        <div>
             <button disabled={index === 2} onClick={this.btnNext}>Next</button>
            <button disabled={index === 0} onClick={this.btnPrev}>Prev</button>
        </div>
        
        <div>
            <p>{state1}</p>
            <p>{state2}</p>
            <p>{state3}</p>
        </div>
        <div>
            <p>{state4}</p>
            <p>{state5}</p>
            <p>{state6}</p>
        </div>
        <div>
            <p>{state7}</p>
            <p>{state8}</p>
            <p>{state9}</p>
        </div>
        
        </>
    }
}
export default MultiPartForm;


/**
 * t4: radio
 * t5: city dropdown
 * t6: branch checkox
 * t7: color color picker
 * t8: do date picker
 * t9: about you textarea
 */