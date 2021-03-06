import {ADD_TO_CART, INC_COUNT, DEC_COUNT, DEL_PRODUCT} from '../constants/ActionTypes'

const initialState = {
    addedIds: [],
    quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state
            }
            return [ ...state, action.productId ]
        case DEL_PRODUCT:
            return state.filter(item => item !== action.productId)
        default:
            return state
    }
}

const quantityById = (state = initialState.quantityById, action) => {
    const { productId } = action
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state,
                [productId]: (state[productId] || 0) + 1
            }
        case INC_COUNT:
            return { ...state,
                [productId]: (state[productId]) + 1
            }
        case DEC_COUNT:
            return { ...state,
                [productId]: (state[productId]) - 1
            }
        default:
            return state
    }
}

export const getQuantity = (state, productId) =>
    state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
    return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
    }
}

export default cart