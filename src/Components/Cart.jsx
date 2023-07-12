/* import React, { useContext, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import { CartContext } from '../context/addtoCart/context';

function Cart() {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(CartContext);

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  const removeItem = (itemId) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: itemId
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="btn btn-dark position-relative"
      >
        <BsFillCartFill />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {state.cart.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Cart
            <button className="ms-4 btn btn-outline-dark" onClick={clearCart}>
              Clear Cart
            </button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart.map((val, key) => (
            <CartItems key={key} data={val} removeItem={removeItem} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart; */






import React, { useContext, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import { CartContext } from '../context/addtoCart/context';

function Cart() {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(CartContext);

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  /* const calculateGrandTotal = () => {
    let grandTotal = state.cart.reduce((total, item) => total + item.totalPrice, 0);
    return grandTotal;
  }; */
  return (
    <>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="btn btn-dark position-relative"
      >
        <BsFillCartFill />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {state.cart.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Cart
            <button className="ms-4 btn btn-outline-dark" onClick={clearCart}>
              Clear Cart
            </button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart.map((val) => (
            <CartItems key={val.id} data={val} />
          ))}
         {/*  <div className="grand-total">Grand Total: ${calculateGrandTotal()}</div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;