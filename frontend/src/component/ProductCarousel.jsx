import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader.jsx";
import Message from "./Message.jsx";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import { Carousel, Image } from "react-bootstrap";

const ProductCarousel = () => {
  const { data: prducts, isLoading, error } = useGetTopProductsQuery();
  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message varient="danger">{error}</Message>
  ) : (
    <Carousel pause="hver" className="bg-primary mb-4">
      {prducts.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>{product.name} (${product.price})</h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
