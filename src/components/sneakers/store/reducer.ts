import updateObject from '../../../helpers/updateObject';
import * as actionTypes from './types'


let initialState = {
    loading: false
}

export const sneakers = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_SNEAKERS: return updateObject(state, {
            loading: true
        })
        case actionTypes.GET_SNEAKERS_SUCCESS: return updateObject(state, {
            loading: false,
            sneakers: action.payload.sneakers,
            meta: action.payload.meta
        })
        case actionTypes.GET_SNEAKERS_API_ERROR: return updateObject(state, {
            loading: false,
            error: action.payload.message,
            errorStatus: action.payload.status
        })
        default: return state
    }
}

initialState = {
    loading: false
}

export const sneaker = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_A_SNEAKER: return updateObject(state, {
            loading: true,
        })
        case actionTypes.GET_A_SNEAKER_SUCCESS: return updateObject(state, {
            loading: false,
            sneaker: action.payload
        })
        case actionTypes.GET_A_SNEAKER_API_ERROR: return updateObject(state, {
            loading: false,
            error: action.payload
        })
        default: return state
    }
}