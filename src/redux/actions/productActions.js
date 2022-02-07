import { ActionTypes } from "../constants/actionsTypes";

export const setProducts = (product) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: product
    }
}
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}