import {useState} from "react";


const Product =(props) =>{

    const {name, desc, quantity, price} = props;

    const [count, setCount] = useState(0);

    const HandleClick=()=>{
       setCount(count+1);
    }

    const HandleClick1=()=>{
        setCount(count-1);
     }

    return(
        
        <div className ="Item">
            <span className="ProductList">{name}</span>
            <span className="ProductDescription">{desc}</span>
            <span className="quantity">{quantity}</span>
            <span className="Price">{price}</span>
            <div className="stepper">
                <button  disabled={count===0} onClick={HandleClick1}>-</button>
                <span>{count}</span>
                <button onClick={HandleClick}>+</button>
            </div>

        </div>
    
    )
}

export default Product;