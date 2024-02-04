import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../products';
import Product from '../component/Product';

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => {
                    return (<Col key={product._id} sm={12} md={6} xl={3}>
                        {/* <h3>{product.name}</h3> */}
                        <Product product={product} />
                    </Col>)

                })}
            </Row>
        </>
    )
}

export default HomeScreen