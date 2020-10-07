import { useState } from "react"
import { Alert, Button, Input } from "reactstrap"
import Cookies from 'universal-cookie';

import updateObject from "src/helpers/updateObject"
import { useRouter } from "next/router";

interface ISneakerProps {
    model: string
    brand: any,
    price: number
    realese: Date
    details: Array<any>
    id: string
    picture:string
}

const initialState = {
    Availablequantity: 1,
    size: '',
    quantity: 1,
    picture: '',
    price: '',
    model: ''
}


const sneakerItemDetails = ({ id, model, brand, picture, price, realese, details }: ISneakerProps) => {

    const [state, setState] = useState(initialState)
    const cookies = new Cookies();
    const router = useRouter()

    const updateQuantity = (e: any) => {
        return setState(updateObject(state, {
            size: details[e.target.value].Size.name,
            Availablequantity: details[e.target.value].quantity,
            price,
            picture,
            model
        }))
    }

    const quantityHandler = (e: any) => {
        const quantity = e.target.value
        if (quantity > state.Availablequantity || quantity < 1) {
            return setState(updateObject(state, {
                quantity: state.Availablequantity
            }))
        }
        return setState(updateObject(state, {
            quantity
        }))
    }

    const addToCartHandler = () => {
        let cart = cookies.get('cart');
        if (cart !== undefined) {
            let added = false
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === id && cart[i].size == state.size) {
                    cart[i] = {
                        id,
                        quantity: state.quantity,
                        size: state.size,
                        picture: state.picture,
                        price: state.price,
                        model: state.model
                    }
                    added = true
                }
            }
            if (!added) cart.push({
                id,
                quantity: state.quantity,
                size: state.size,
                picture: state.picture,
                price: state.price,
                model: state.model
            })
        }

        if (cart === undefined) cart = [{
            id,
            quantity: state.quantity,
            size: state.size,
            picture: state.picture,
            price: state.price,
            model: state.model
        }]

        cookies.set('cart', cart, { path: '/' });
        return router.push('/')
    }

    return (
        < div className="col-md-6 col-lg-6 col-sm-6 col-xs-12" style={{ height: "40vh" }}>
            <div className="single-product-description">
                <h3 className="tm-single-product-title">{model}
                    <span
                        style={{ color: "#0c61e1", fontFamily: "sans-serif", fontWeight: "bolder", fontSize: "1rem" }}> {brand?.name}</span>
                </h3>
                <h6 className="tm-single-product-title">Realesed : {new Date(`${realese}`).toUTCString()}</h6>
                <p className="product-details-paragraph">{brand?.description}</p>
                <div className="price-box">
                    <span className="price">{price} RWF</span>
                </div>
                <p>{state.size !== '' ? `Quantity ${state.Availablequantity} available` : null}</p>
                <div className="sp-size">
                    <div className="sp-size">
                        <label>Size</label>
                        <select name="product-size" className="product-size" onChange={updateQuantity}>
                            <option disabled selected >select size</option>
                            {details?.map((item, index) => <option
                                key={index}
                                value={index} >
                                {item.Size.name}
                            </option>
                            )
                            }
                        </select>
                        <span className="quantity">
                            <Input
                                type="number"
                                onChange={quantityHandler}
                                value={state.quantity}
                                disabled={state.size == ''}
                            />
                        </span>
                    </div>
                </div>
                <div className="tm-size-color-single">
                    <div className="add-to-cart">
                        <Button
                            className="add-to-cart-btn"
                            disabled={state.size == ''}
                            onClick={() => addToCartHandler()}
                        >Add To Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sneakerItemDetails

