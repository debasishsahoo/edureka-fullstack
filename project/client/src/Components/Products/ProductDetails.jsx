import React, { useEffect, useState } from 'react'
import {Link,useParams} from 'react-router-dom'
import api from '../../Services/Api'

const ProductDetails = () => {
  const {id}=useParams();
  const [name,setName]=useState("");
  const [desc,setDesc]=useState("");
  const [price,setPrice]=useState(0);


  useEffect(()=>{
    const fetchProduct = async () => {
      const res = await api.get(`/product/view/${id}`);
      setName(res.data.name);
      setDesc(res.data.desc);
      setPrice(res.data.price);
    };
    fetchProduct()
  },[id]);

  return (
    <div className='card'>
      <h2>{name}</h2>
      <h3>Price:${price}</h3>
      <h3>Description</h3>
      <p>{desc}</p>
      <Link to={`/product`}>Product List</Link>
    </div>
  )
}

export default ProductDetails