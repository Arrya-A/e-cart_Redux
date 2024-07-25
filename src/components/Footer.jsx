import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
      <div className='container-fluid bg-primary p-4 text-light'>
        <div className="row">
          <div className="col-md-4 px-md-5">
            <div>
              <h3><FontAwesomeIcon icon={faCartShopping} className='me-2' />E-CART</h3>
              <p className='mt-4' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolore, ipsam asperiores aut ad quis eius sapiente consequuntur quibusdam illo temporibus deserunt soluta, corporis blanditiis officiis tempore? Veritatis, aliquid odit!</p>
            </div>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-5 mt-md-0">
            <div>
              <h3>Links</h3>
              
              <Link to={'/'}><p className='mt-4 text-light'>Home</p></Link>
              <Link to={'/wishlist'}><p className='text-light'>Wishlist</p></Link>
             <Link to={'/cart'}> <p className='text-light'>Cart</p></Link>
            </div>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-5 mt-md-0">
          <div>
              <h3>Guides</h3>
              <p className='mt-4'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>
          <div className="col-md-4 px-md-5 mt-5 mt-md-0">
            <h3>Contact Us</h3>
            <div className="d-flex">
              <input type="text" placeholder='Email id' className='form-control' />
              <button className='btn btn-warning'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-4'>
            <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer