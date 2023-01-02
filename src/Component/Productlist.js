import React, {useEffect, useState, useContext, createContext} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap'
import AuthContext from "./AuthContext";



function Productlist() {
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const {search, passings, setPassings} = useContext(AuthContext);

    const navigate = useNavigate();


    const roomTypeData = async () => {
        try {
          const { data } = await axios({
            url: 'https://fakestoreapi.com/products',
            method: "get",
          })
          setProduct(data)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error.message)
        }
      }
      
    useEffect(() => {
      let newData = []
      if (search) {
        newData =  product?.filter(item => item.title.toString().includes(search)
        )
        setProducts(newData)
      } else {
        setProducts(product)
      }
    }, [search, product])

      useEffect(() => {
        roomTypeData()
      },[])
      function passing(item){
        setPassings(item)
        navigate("/product");
      }
    return(
        <div className='d-flex flex-wrap justify-content-between align-items-center pt-5'>
        {products.map((item)=>
         <Card style={{ width: '13rem', height: 'auto' }}>
      <Card.Img variant="top" src={item.image} style={{width: '10rem', height: '30vh'}} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
      </Card.Body> 
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price{item.price}</ListGroup.Item>
        <ListGroup.Item>Category{item.category}</ListGroup.Item>
        <ListGroup.Item>Rating{item.rating.rate}</ListGroup.Item>
      </ListGroup>
     
      <Card.Body>
        <Button variant="danger">Add to cart</Button>{' '}
        <Button variant="success" onClick={()=>passing(item)}>Buy </Button>{' '}
      </Card.Body>
    </Card>
    )}
        </div>
    )
}
export default Productlist;
