
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-stars";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import ImageSection from "../Components/ImageSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../Components/Loader';
import { CartContext } from '../context/addtoCart/context'; 
export default function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [Review, setReview] = useState();
  const [ratingstar, setRatingStar] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  const { dispatch } = useContext(CartContext); 

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const addToCart = () => {
    const payload = {
      ...product,
      productQuantity: productQuantity,
      totalPrice: productQuantity * product.price,
    };
    dispatch({ type: "ADD_TO_CART", payload }); 

    Swal.fire({
      title: 'Added to Cart',
      text: 'Check your Cart to CheckOut',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    });
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      Review: Review,
      rating: ratingstar,
    };
    console.log(payload);

    Swal.fire({
      title: 'Successfully Submitted',
      text: 'Thanks for Reviewing Our Product',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    });
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((response) => setProduct(response.data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="text-center my-5">
          <h1 className="ProductName" style={{ color: "black" }}>
            {product.title}-{product.price}$
          </h1>
          <p className="text-secondary my-3">{product.description}</p>
          <div className="d-flex justify-content-center">
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={product.rating}
              color2={"#ffd700"}
            />
          </div>

          <div className="my-3">
            <button
              className="btn btn-dark mx-3"
              disabled={productQuantity > 1 ? false : true}
              onClick={() => setProductQuantity(productQuantity - 1)}
            >
              -
            </button>
            {productQuantity}
            <button
              className="btn btn-dark mx-3"
              onClick={() => setProductQuantity(productQuantity + 1)}
            >
              +
            </button>
          </div>
          <button className="btn btn-warning my-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6  ProductCard" data-aos="zoom-in">
            {product?.images?.length > 0 && (
              <ImageSection images={product.images} />
            )}
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 text-center" data-aos="fade-up">
              <div className="my-5">
                <h2 className="mb-5 my-5 text-center">Review Us</h2>
                <div className="text-secondary">
                  <p>
                    We greatly value your opinion and would appreciate it if
                    you could take a moment to share your experience with us
                    and our Product.
                  </p>
                </div>
              </div>
              <div className="row-md-6  text-center">
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    id="ReviewText"
                    style={{ height: '100px' }}
                    defaultValue={Review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </FloatingLabel>
                <div className="mt-5  d-flex justify-content-center">
                  Rate Us:
                  <div className="dflex align-item-center">
                    <ReactStars
                      count={5}
                      size={20}
                      value={ratingstar}
                      onChange={ratingChanged}
                      color2={"#ffd700"}
                    />
                    <span className="ms-3">({ratingstar})</span>
                  </div>
                </div>
                <Button
                  className="my-4 btn btn-warning my-button"
                  variant="primary"
                  type="submit"
                  onClick={submitReview}
                >
                  Submit Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}