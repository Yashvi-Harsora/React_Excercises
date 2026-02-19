import React, {Component} from "react";
import "./card.css";
class CardComponent extends Component{
    render(){
        return <>
            <div className="user-card">
                <h1>Image1</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&s" alt="image" />
                <button>follow</button>
                <p>this is a image</p>


            </div>
        </>
    }
}
export default CardComponent;