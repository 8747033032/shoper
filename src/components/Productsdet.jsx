import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from "../Data"; 


const ProductsDet = () => {
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id  === proid.id)
    const products = proDetail[0];
    console.log(products);
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-md-6">
            <img src={products.img} alt={products.title}/>
        </div>
      <div className="col-md-6">
        <h1>{products.title}</h1>
        <hr/>
        <h2>{products.price}</h2>
        <p>{products.desc}</p>
        <button className='btn btn-outline-primary'>add yo cart</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default ProductsDet
