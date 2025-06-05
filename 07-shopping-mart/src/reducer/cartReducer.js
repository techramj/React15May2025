export const CartReducer = (state, action) => {

    const { type, payload } = action;
    switch(type){
        case "ADD_TO_CART": return {...state, carList:payload.products}
        case "REMOVE_TO_CART": return {...state, carList:payload.products}
        default: throw new Error(`Unhandled action type: ${type}`);
    }
}