import React, {useContext} from "react";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Container, Form } from 'react-bootstrap'
import {  Link } from 'react-router-dom'
import AuthContext from "./AuthContext";

function Product(props) {
  const {passings} = useContext(AuthContext);
    return(
        <Container className='pt-3' >
        <Link to='/' className='btn btn-light  text-info' >
        <ion-icon name="caret-back-sharp"></ion-icon> back to home
        </Link>
          <>
            <Row>
              <Col md={5}>
                <Card>
                  <Row>
                      <Col className='m-auto'>
                        
                        <Image style={{width:"540px" ,height:"450px"}}
                        src={passings.image}
                         alt=""
                          fluid
                          height='200'
                          width='150'
                          rounded
                          className='ml-auto'
                        />
                      </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={6}>
                <ListGroup variant='flush' className='shadow rounded border-0'>
                  <ListGroupItem>
                    <h3>{passings.title}</h3>
                  </ListGroupItem>
                  <ListGroupItem>
                    <h4>Category :{passings.category}</h4>
                  </ListGroupItem>

                    <ListGroupItem className='text-success h5'><strong>{passings.price}$</strong></ListGroupItem>

                  <ListGroupItem className='h6'>
                   <span className='text-secondary'> Description:</span>{passings.description}
                  </ListGroupItem>
                </ListGroup>
                <Card className='shadow rounded border-0'>
                  <ListGroup variant='flush'>
                    <ListGroupItem className='h6'>
                      <Row>
                        <Col>
                          rating:{passings.rating.rate}
                        </Col>
                      </Row>
                    </ListGroupItem>

                    <ListGroupItem className='d-flex'>
                    <Button  className='mx-auto px-5 bg-info' type='button' >Add To Cart</Button>
                      <Button className='mx-auto px-4 bg-info' type='button' >Add To Favorites</Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
              
            </Row>
          </>
      </Container>
    )
}
export default  Product;