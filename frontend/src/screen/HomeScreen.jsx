import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from '../component/Product';
import Loader from "../component/Loader";
import Message from "../component/Message";
import { Link, useParams } from "react-router-dom";
import Paginate from "../component/Paginate";
import ProductCarousel from "../component/ProductCarousel";
import Meta from "../component/Meta";

const HomeScreen = () => {
  const {pageNumber, keyword} = useParams();
  const { data, isLoading, error } = useGetProductsQuery({keyword, pageNumber});

  return (
    <>
    {!keyword ? <ProductCarousel/> : <Link to='/' className="btn btn-light">Go Back</Link>}
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <Message varient='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
        <Meta/>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} xl={3}>
                  {/* <h3>{product.name}</h3> */}
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''}/>
        </>
      )}
    </>
  );
};

export default HomeScreen;
