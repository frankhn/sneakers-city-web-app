import { Error } from '@Redux/interfaces'
import * as actionTypes from './types'

export const getSneakers = ({ page = 1 }) => ({
    type: actionTypes.GET_SNEAKERS,
    payload: {page}
})

export const getSneakersSuccess = (sneakers: Array<any>, meta: Object) => ({
    type: actionTypes.GET_SNEAKERS_SUCCESS,
    payload: {
        sneakers,
        meta
    }
})

export const getSneakerApiError = (error: Error) => ({
    type: actionTypes.GET_SNEAKERS_API_ERROR,
    payload: {
        status: error.status,
        message: error.message,
    }
})


// 

export const getASneaker = (id: string) => ({
    type: actionTypes.GET_A_SNEAKER,
    payload: { id }
})

export const getASneakerSuccess = (sneaker: Object) => ({
    type: actionTypes.GET_A_SNEAKER_SUCCESS,
    payload: sneaker
})

export const getASneakerApiError = (error: Object) => ({
    type: actionTypes.GET_A_SNEAKER_API_ERROR,
    payload: error
})

