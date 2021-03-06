import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'
import axios from 'axios'

function Product({ product }) {
    console.log(product, 'bbbbbbcbbcb')

    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={`http://127.0.0.1:8000${product.image}`}/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                    </div>

                </Card.Text>
                <Card.Text>
                    ${product.price}
                </Card.Text>

            </Card.Body>


        </Card>
    )
}

export default Product
