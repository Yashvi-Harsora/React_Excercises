import React,{Component} from "react";
class ThemeExample extends Component{
    constructor(props){
        super(props);

        this.state={
            color:"black",
        };
        

    }
    handleColorChange=(color)=>{
            this.setState({color:color});
        };
    render(){
        return<>
        <h2 style={{ color: this.state.color }}>
          Theme Color 
        </h2>

                <button onClick={()=>this.handleColorChange("green")} value={"green"}>green</button>
                <button onClick={()=>this.handleColorChange("red")} value={"red"}>red</button>
                <button onClick={()=>this.handleColorChange("yellow")} value={"yellow"}>yellow</button>
                <button onClick={()=>this.handleColorChange("blue")}  value={"blue"}>blue</button>
                <br />

                <button value={"green"}>green</button>
                <button value={"red"}>red</button>
                <button value={"yellow"}>yellow</button>
                <button value={"blue"}>blue</button>
                <br />
        
        </>
    }
}
export default ThemeExample;