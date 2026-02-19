// //create a shopping cart component that manages items, quantities and totals.
// Requirements :
// add items to cart ( name , price , quantity)
// display cart items with individual totals 
// update quantity for each item 
// remove items from cart
// calculatte and display subtotal, tax(10%) and total 
// ckear entire cart 

// Objective :
// create a theme switcher that toggles between light ad dark modes 
// Requirements :
// toggle between light and dark themes
// apply themes to component styles 
// display current theme 





import React,{useState} from "react";
import './ex.css'
export default function ExcerciseCart(){
   
    const [product,setProducts]=useState([
        {name:"x",price:50,quantity: 0},
        {name:"y",price:60,quantity: 0},
        {name:"z",price:70,quantity: 0}
    ]);
     const [selectedItems, setSelectedItems] = useState([]);
    const addToCart=()=>{
        setSelectedItems(product.filter(p=>p.quantity>0));
    }
    const removeFromCart=(name)=>{
        setSelectedItems(items=>items.filter(item=>item.name!==name))
    }
    const subTotal=()=>{
        return selectedItems.reduce(
            (sum,item)=>sum + item.price*item.quantity,0
        )
    };
    const tax = subTotal() * 0.10;
    const total = subTotal() + tax;
    
    return(<>
    <div className="cart-wrapper">
        {product.map((item,index)=>(
            <div className="cart-item" key={index}>
                <p>Name: {item.name}</p>
            <p>Price: ₹{item.price}</p>
            <input type="number" name="quantity" value={item.quantity} placeholder="ENter Quantity" onChange={(e)=>setProducts(products => products.map((p, i) => i === index ? { ...p, quantity: Number(e.target.value) } : p)  )} />
            <p>Quantity: {item.quantity}</p>
            </div>
        ))}
        <button onClick={addToCart} >Add to Cart</button>


        <h3>Selected Items</h3>
      {selectedItems.map((item, index) => (
        <p key={index}>
          {item.name}  {item.price} × {item.quantity} = ₹{item.price * item.quantity}

          <button onClick={()=>removeFromCart(item.name)}>Remove</button>
        </p>

      ))}
      <hr />
      <p><strong>Subtotal:</strong> ₹{subTotal()}</p>
      <p><strong>Tax (10%):</strong> ₹{tax}</p>
      <p><strong>Total:</strong> ₹{total}</p>
    </div>
    </>);
}