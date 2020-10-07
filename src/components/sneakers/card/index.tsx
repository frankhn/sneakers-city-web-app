import { useRouter } from 'next/router'

//#region  Local imports
import './index.css'

interface ISneakersProps {
    id: string
    model: string
    realese: Date,
    picture: string
    price: number
    brand: any
    details: Object
}



const card = ({ id, model, picture, price, brand, realese }: ISneakersProps) => {

    const router = useRouter()

    return (
        <>
            <div className="product-card" style={{ cursor: "pointer" }} onClick={() => router.push(`/sneakers/${id}`)}>
                <div className={`badge ${brand.name}`}>{brand.name}</div>
                <div className="product-tumb">
                    <img src={picture} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">{model} - {new Date(`${realese}`).toDateString()}</span>
                    <div className="product-bottom-details">
                        <div className="product-price">{price} RWF</div>
                        <span className="product-catagory">{brand.description}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card