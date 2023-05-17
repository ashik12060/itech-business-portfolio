import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json()) 
        .then(data=>setItems(data));
    },[])

  return (
    <div className=" grid grid-cols-3 gap-2 pt-10">
        
        {
            items.map((item) =><Product key={item.id} title={item.title} category={item.category} image={item.image} price={item.price}></Product>)
        }
    </div>
  )
}

export default Products;