import { CartActionTypes } from "./cart.types";


export const toggleCartVisibility = () => ({
    type: CartActionTypes.TOGGLE_CART_VISIBILITY,


});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item

});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: item
});