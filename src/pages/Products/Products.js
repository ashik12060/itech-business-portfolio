<<<<<<< HEAD
import React from 'react'
import maintanance from '../../images/Maintenance.png'
const Products = () => {
  return (
    <div>
                <img className='lg:w-full md:w-full sm:w-full w-full' src={maintanance} alt="" />

=======
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
>>>>>>> e2e3b9fb60f7e5c7ddc6c90976d30157bdbab061
    </div>
  )
}

<<<<<<< HEAD
export default Products
=======
export default Products;
>>>>>>> e2e3b9fb60f7e5c7ddc6c90976d30157bdbab061
