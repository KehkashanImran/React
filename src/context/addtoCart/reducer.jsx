export const reducer=(state,action)=>{
    switch (action.type) {
   



        case "ADD_TO_CART":
            return{...state,cart:[...state.cart,action.payload]}
    
            case "CLEAR_CART":
                return { ...state , cart : []}

                 
                    case "REMOVE_ITEM":
                        return {
                          ...state,
                          cart: state.cart.filter(item => item.id !== action.payload)
                        };
                  

        default:
            return state;
    }
}   