import updateObject from '../../helpers/updateObject';
import * as actionTypes from './types'


let initialState = {
    title: 'Sneakers city | brand new online-only store for sneaker enthusiasts. This isn’t your average e-commerce shop – it’s a curated experience that shows just the latest in sneaker trends.'
}

export const layout = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_TITLE: return updateObject(state, {
            title: action.payload,
        })
        default: return state
    }
}