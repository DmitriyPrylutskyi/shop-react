import * as types from '../constants/ActionTypes'

export const addCart = productId => ({
    type: types.ADD_TO_CART,
    productId
})

export const incCount = productId => ({
    type: types.INC_COUNT,
    productId
})

export const decCount = productId => ({
    type: types.DEC_COUNT,
    productId
})

export const deleteProduct = productId => ({
    type: types.DEL_PRODUCT,
    productId
})
