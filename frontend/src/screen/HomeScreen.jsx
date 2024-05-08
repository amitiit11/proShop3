import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from '../component/Product';
import Loader from "../component/Loader";
import Message from "../component/Message";
import { useParams } from "react-router-dom";
import Paginate from "../component/Paginate";

const HomeScreen = () => {
  const pageNumber = useParams();
  const { data, isLoading, error } = useGetProductsQuery({pageNumber});

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <Message varient='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
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
          <Paginate pages={data.pages} page={data.page}/>
        </>
      )}
    </>
  );
};

export default HomeScreen;
