import React from 'react'
import { NavLink, Route } from 'react-router-dom'

const CartBtn = () => {
  return (
    <>
      <button to="/cart" className="btn btn-outline-primary ms-2">
        <span className='fa fa-shopping-cart me-1'>

        </span>
        cart(0)
      </button>
      
      
    </>
  )
}

export default CartBtn
