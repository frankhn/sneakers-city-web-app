
interface CartProps {
    products: Array<any>
}



const cartProducts = ({ products }: CartProps) => {

    return (
        <>{
            products.map((item: any) => (
                <div className="cart-card">
                    <img src={item.picture} alt={item.model} className="cart-image" style={{ maxWidth: "5rem" }} />
                    <div style={{ marginLeft: ".3rem" }}>
                        <div>Model : {item.model}</div>
                        <div>Price: {item.price}</div>
                        <div>Size: {item.size}</div>
                        <div>Quantity: {item.quantity}</div>
                    </div>
                </div>
            ))
        }
        </>
    );
}

export default cartProducts;
