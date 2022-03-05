import React from "react";

import  style from "./Welcome.module.css";
import Product from "./Product";

function Welcome(props) {

    const {ProductListData} = props;  // destructuring

    return (
        <div className={style.ProductListContainer}> 

            {ProductListData.map(product =>{
                  return <Product  name={product.name}  desc={product.desc}  quantity={product.quantity}   price={product.price} />
                })
            }

        </div>

                
    )
}



export default Welcome;