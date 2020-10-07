import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { getSneakers } from './store/action'
import { AppState } from '@Redux'
import Card from './card'
import Loader from '../common/Spinner/Loader'
import Pagination from '../common/pagination'
import updateObject from '../../helpers/updateObject'
import { useRouter } from 'next/router'

interface Sneakers {
    sneakers: Array<any>,
    meta: any
    loading: boolean
}

const initialState = {
    page: 1,
    sneakers: '',
    show: true
}


const sneakers = () => {
    const [state, setState] = useState(initialState)

    const { sneakers = [], meta, loading }: Sneakers = useSelector((state: AppState) => state.sneakers)

    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        dispatch(getSneakers({ page: state.page }))
    }, [state.page])

    const paginationHandler = (page: number) => {
        router.push(`/?page=${page}`)
        return setState(updateObject(state, {
            page
        }))
    }

    return (
        <>
            <div className="sneaker-wrapper" style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    loading
                        ? <Loader />
                        : <>
                            {
                                sneakers.map((sneaker: any, i) => (
                                    <Card {...sneaker} key={i} />
                                ))
                            }
                        </>
                }
            </div>
            { sneakers !== undefined ? <Pagination {...meta} handler={paginationHandler} /> : null}
        </>
    )
}

export default sneakers