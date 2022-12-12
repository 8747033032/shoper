import React from 'react'
import { NavLink } from 'react-router-dom'
import Abou from "../Assets/about.jpg"

const About = () => {
  return (
    <div>
      <div className="container py-5 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold  mb-4'>About us</h1>
            <p className='lead'>

              No matter the size of your online store, product descriptions play a key role in your ecommerce business.

              Effective product descriptions can possibly lure potential customers. Good product descriptions can potentially influence a purchase decision. Great product descriptions can ultimately help improve conversion rates and increase sales, as well as boost your visibility and SEO on paid channels.

              The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.

             
              Business owners, marketers and copywriters all know the importance of writing product descriptions, but what’s the best way to help reach your target audience?
            
              A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site.
            </p>
            <NavLink to="/contact" className='btn btn-outline-primary'>contact us</NavLink>         
            </div>
          <div className="col-md-6 py-5 my-5 " >
            <img src={Abou}   alt="manu" height="300px" width="500 "></img>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
