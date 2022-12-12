import React from 'react'
import { NavLink } from 'react-router-dom';

import DATA  from "../Data"

const Products = () => {

  const cardItem = (item) => {
    return (
      <div class="card my-4 py-3" key={item.id} style={{width: "18rem"}}>
        <img src={item.img} class="card-img-top py-2" height="300px" alt={item.title}/>
        <div class="card-body text-center">
          <h5 class="title ">{item.title}</h5>
          <h6 class="card-subtitle mb-2 ">${item.price}</h6>
          
        <NavLink to="/productsDet"  class="btn btn-outline-primary justify-content-center ">Buy Now</NavLink>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 manu text-center p-1 ms-3">
            <h1 >Products</h1>
            <hr />

          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row  justify-content-around  ">
            { DATA.map (cardItem)}
           
           
        </div>
      </div>

    </div>
  );
}

export default Products
