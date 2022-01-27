export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find((itm) => itm.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id

            ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}


export const removeFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((itm) => itm.id === cartItemToRemove.id && cartItemToRemove.quantity > 1);
    if (existingCartItem) {
        //console.log('EXISTS :: ', existingCartItem);
        return cartItems.map(cartItem => {

            //  console.log('MAPPING :: ', cartItem);
            return cartItem.id === cartItemToRemove.id

                ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
        })
    }
    else {
        //  console.log('ELSE ', existingCartItem);
        cartItems.splice(cartItems.findIndex(itm => {
            // console.log('ITEM : ', itm);
            //console.log('ITEM TO REMOVE : ', cartItemToRemove);
            return itm.name === cartItemToRemove.name;
        }), 1);
    }
    // console.log('REMOVED ITEM : ', JSON.stringify(removedItem));
    return [...cartItems];
}