import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';




function Home() {
  const data=useFetch('https://dummyjson.com/products')
  console.log(data);
  const dispatch=useDispatch()

  


  return (
    <>
      <div className="container-fluid" style={{marginTop:'100px'}}>
        <div className="row px-md-4">
          
          {
          data?.length>0?
          data?.map((item)=>(<div className="col-md-3 px-4 my-4 d-flex justify-content-center">
            <Card style={{ width: '100%' }} className='shadow border-0' >
              <Card.Img variant="top" src={item?.thumbnail} style={{width:'100%' , height:'260px'}}/>
              <Card.Body>
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>
                  {item?.description}
                  <p className='fw-bolder'>Price :${item?.price}</p>
                </Card.Text>
    
                <div className='d-flex justify-content-between'>
                  <Button variant="danger" onClick={()=>dispatch(addToWishList(item))}><FontAwesomeIcon icon={faHeart}  /></Button>
                  <Button variant="success" onClick={()=>dispatch(addToCart(item))}><FontAwesomeIcon icon={faCartShopping} /></Button>
                </div>
              </Card.Body>
            </Card>
          </div>))
          :
          <p>Nothing to display</p>}

        </div>
      </div>
    </>
  )
}

export default Home