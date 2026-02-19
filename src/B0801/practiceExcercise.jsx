/*
create a react class based component that will contain
a dropdown with items
each item will have a value price an label
beside the drop down display + button, quantity and - button
when user clicks + button quantity will be increased by 1
when user clicks - button quantity will be decreased by 1
below dropdown display total price based on selected item price and quantity
if quantity = 0 then - button disabled
if quantity more than 10 then + button diabeled
initial quantity 1
*/


import React,{Component} from "react";
class ProductDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            productId:"",
            quantity:1,
            products:[{id:1,label:"pen",price:10},
                    {id:2,label:"paper",price:20},
                    
            ],
            selectProduct:null,


        }
    }
    handleProductChange=(e)=>{
        const productId=Number(e.target.value)
        const product=this.state.products.filter(p=>p.id===productId)
        this.setState({
            selectProduct:product,
        })
    }
    handleIncrease=()=>{
        this.setState(prevState=>{
            if(prevState.quantity<10 ){
               this.setState({quantity:prevState.quantity+1})
    }
        })
        

    }
    handleDecrease=()=>{
        this.setState(prevState => {
      if (prevState.quantity > 0) {
        return { quantity: prevState.quantity - 1 };
    }});
    
    }
    calculateTotal=(selectedProduct)=>{
        const total=selectedProduct.price*(this.quantity)
    }
    render(){

         const { products, selectedProduct, quantity,total}=this.state;
         const totalPrice = selectedProduct? selectedProduct.price * quantity: 0;
        return <>
            <div>
                Products:
                <select name="products" id="">
                    <option value="">Select value</option>
                    {products.map(product => (
                    <option key={product.id} value={product.id}>
                    {product.label} - ₹{product.price}
            </option>))}


                </select><br/><br/>
                <button onClick={this.handleIncrease}> + </button>
                <button onClick={this.handleDecrease}> - </button>
            <h3>
                Price:
                        {total}
                Quantity:
                        {quantity}
            </h3>

            </div>
            
            

        </>
    }
}
export default ProductDemo