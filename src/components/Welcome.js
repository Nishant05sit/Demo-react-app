import React from "react";

import "./Welcome.css";
import Product from "./Product";

function Welcome(props) {

    const {ProductListData} = props;  // destructuring

    return (
        <div className="ProductListContainer"> 
            <Product name={ProductListData[0].name}  desc={ProductListData[0].desc}  quantity={ProductListData[0].quantity}   price={ProductListData[0].price} />
            <Product name={ProductListData[1].name}  desc={ProductListData[1].desc}  quantity={ProductListData[1].quantity}   price={ProductListData[1].price} />
            <Product name={ProductListData[2].name}  desc={ProductListData[2].desc}  quantity={ProductListData[2].quantity}   price={ProductListData[2].price} />
        </div>

                
    )
}



export default Welcome;