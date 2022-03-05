import {useState} from "react";
import styles from "./Product.module.css";


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
        
        <div className ={styles.Item}>
            <span className={styles.ProductList}>{name}</span>
            <span className={styles.ProductDescription}>{desc}</span>
            <span className={styles.quantity}>{quantity}</span>
            <span className={styles.Price}>{price}</span>
            <div className={styles.stepper}>
                <button  disabled={count===0} onClick={HandleClick1}>-</button>
                <span>{count}</span>
                <button onClick={HandleClick}>+</button>
            </div>

        </div>
    
    )
}

export default Product;