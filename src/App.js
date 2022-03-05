import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";


const ProductListData =[
  {
    id: 1,
    name: 'Apple',
    desc: 'Kashmiri',
    quantity :'1 kg',
    price : 'Rs 20'

  },
  {
    id: 2,
    name: 'Mango',
    desc: 'Maldha',
    quantity :'1 kg',
    price : 'Rs 40'

  },
  {
    id: 3,
    name: 'Lichi',
    desc: 'Mujaffarpur',
    quantity :'1 kg',
    price : 'Rs 50'

  }
]

function App() {
 return (
  <Welcome  ProductListData={ProductListData}/>
  );
}

export default App;
