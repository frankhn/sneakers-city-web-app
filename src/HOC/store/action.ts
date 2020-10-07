import * as actionTypes from './types'

export const setTitle = (title:string) => ({
    type: actionTypes.SET_TITLE,
    payload: title
})

