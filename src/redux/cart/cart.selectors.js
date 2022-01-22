import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);
export const selectCartItemCount = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, curEl) => acc + curEl.quantity, 0));

export const selectCartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, curEl) => {
    return acc + curEl.price * curEl.quantity;
}, 0))