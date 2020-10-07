import Cookies from 'universal-cookie';
import { UncontrolledPopover, PopoverHeader, PopoverBody, Button } from 'reactstrap'

import './index.scss';
import CartProducts from './products'
import { useState } from 'react';
import updateObject from 'src/helpers/updateObject';
import Checkout from './products/checkout'


const initialState = {
  checkout: false,
  placeOrder: false
}

const popover = () => {

  const [state, setState] = useState(initialState)

  const cookies = new Cookies();

  const checkoutHandler = () => {
    setState(updateObject(state, {
      checkout: true
    }))
  }

  const placeOrderHandler = () => {
    setState(updateObject(state, {
      checkout: false,
      placeOrder: true
    }))
    cookies.remove('cart')
  }

  const cart: Array<any> = cookies.get('cart')

  return (
    <UncontrolledPopover trigger="legacy" placement="bottom" target="Popover">
      <PopoverHeader>Cart</PopoverHeader>
      <PopoverBody>
        {cart !== undefined
          ? state.checkout
            ? <Checkout handler={placeOrderHandler} />
            : state.placeOrder
              ? <div style={{ margin: "4rem" }}>Thanks for Shopping with us, Futher details will be emailed to you</div>
              : <CartProducts products={cart} />
          : <div style={{ margin: "4rem" }}>Your Cart is Empty</div>
        }

        {cart !== undefined && !state.checkout && !state.placeOrder
          ? <>
            <div className="checkout">
              <h5 style={{ alignSelf: "flex-end", fontSize: "1rem", fontWeight: "bolder" }}>Total: 4343</h5>
              <Button style={{ padding: "0 .5rem" }} onClick={checkoutHandler}>Checkout</Button>
            </div>
          </>
          : null
        }
      </PopoverBody>
    </UncontrolledPopover>
  );
}

export default popover;
