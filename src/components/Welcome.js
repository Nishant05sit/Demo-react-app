import React from "react";
import {useState} from "react";
import "./Welcome.css";

function Welcome(props) {

    const {ProductListData} = props;  // destructuring

    const [count, setCount] = useState(0);

    const HandleClick=()=>{
       setCount(count+1);
    }

    const HandleClick1=()=>{
        setCount(count-1);
     }
    return (
        <div className="ProductListContainer">
            <div id ="Item1">
                <span className="ProductList">{ProductListData[0].name}</span>
                <span className="ProductDescription">{ProductListData[0].desc}</span>
                <span className="quantity">{ProductListData[0].quantity}</span>
                <span className="Price">{ProductListData[0].price}</span>
                <div>
                    <button  disabled={count===0} onClick={HandleClick1}>-</button>
                    <span>{count}</span>
                    <button onClick={HandleClick}>+</button>
                </div>

            </div>

            <div id ="Item1">
                <span className="ProductList">{ProductListData[1].name}</span>
                <span className="ProductDescription">{ProductListData[1].desc}</span>
                <span className="quantity">{ProductListData[1].quantity}</span>
                <span className="Price">{ProductListData[1].price}</span>
                <div>
                    <button  disabled={count===0} onClick={HandleClick1}>-</button>
                    <span>{count}</span>
                    <button onClick={HandleClick}>+</button>
                </div>

            </div>

            <div id ="Item1">
                <span className="ProductList">{ProductListData[2].name}</span>
                <span className="ProductDescription">{ProductListData[2].desc}</span>
                <span className="quantity">{ProductListData[2].quantity}</span>
                <span className="Price">{ProductListData[2].price}</span>
                <div>
                    <button  disabled={count===0} onClick={HandleClick1}>-</button>
                    <span>{count}</span>
                    <button onClick={HandleClick}>+</button>
                </div>

            </div>
                
        </div>
    );
}



export default Welcome;