import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getASneaker } from '../store/action'
import { AppState } from '@Redux'

import './index.css'
import Loader from 'src/components/common/Spinner/Loader'
import SneakerItemImage from './image'
import SneakerItemDetails from './details'
import { setTitle } from 'src/HOC/store/action'

interface ISneakerProps {
    sneakerId: any
}


const sneakerItem = ({ sneakerId }: ISneakerProps) => {

    const { sneaker, loading } = useSelector((state: AppState) => state.sneaker)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getASneaker(sneakerId))
    }, [sneakerId])

    useEffect(() => {
        if (sneaker !== undefined) dispatch(setTitle(`${sneaker.brand.name} ${sneaker.model}`))
    }, [sneaker, sneakerId])

    return (
        <div className="sp-container_">
            <div className="row">
                {loading ? <Loader />
                    : <>
                        <SneakerItemImage picture={sneaker?.picture} model={sneaker?.model} />
                        <SneakerItemDetails {...sneaker} />
                    </>
                }
            </div>
        </div>
    )
}

export default sneakerItem
