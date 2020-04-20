import {ADD_PRODUCT_BASKET,GET_NUMBERS_BASKET ,INCREASE_QUANTITY, DECREASE_QUANTITY , REMOVE_PRODUCT} from '../actions/types';

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        greyHoddie: {
            name: "Grey Hoddie",
            tagName: "greyHoddie",
            price: 21.99,
            numbers:0,
            inCart:false
        },
        blueHoddie: {
            name: "Blue Hoddie",
            tagName: "blueHoddie",
            price: 24.99,
            numbers:0,
            inCart:false
        },
        blackHoddie: {
            name: "Black Hoddie",
            tagName: "blackHoddie",
            price: 26.99,
            numbers:0,
            inCart:false
        },
        whiteHoddie: {
            name: "White Hoddie",
            tagName: "whiteHoddie",
            price: 29.99,
            numbers:0,
            inCart:false
        },
    }
}

export default (state = initialState, action) =>{
    let productSelected = "";
    switch(action.type){
        case ADD_PRODUCT_BASKET : { 
         productSelected = {...state.products[action.payload]}
        productSelected.numbers += 1;
        productSelected.inCart = true;
                 
        return {
            ...state,
            basketNumbers: state.basketNumbers + 1,
            cartCost: state.cartCost + state.products[action.payload].price,
            products:{
                ...state.products,
                [action.payload]: productSelected
            }
        };
        };
        case GET_NUMBERS_BASKET: return {
           ...state
        }
        case INCREASE_QUANTITY: 
            productSelected = {...state.products[action.payload]}
            productSelected.numbers += 1;
            console.log(action.payload)
            console.log(state.products)
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products:{
                  ...state.products,
                 [action.payload]: productSelected
              }
            }
        case DECREASE_QUANTITY: 
             productSelected = {...state.products[action.payload]}
            productSelected.numbers -= 1;
            productSelected.inCart = productSelected.numbers == 0?false:true
            return {
                ...state,
                basketNumbers: state.basketNumbers - 1,
              cartCost: state.cartCost - state.products[action.payload].price,
              products:{
                ...state.products,
                [action.payload]: productSelected
            }
            }

        case REMOVE_PRODUCT: 
            productSelected = {...state.products[action.payload]}
            const {numbers, price} = productSelected;
            productSelected.numbers = 0;
            productSelected.inCart = false;

            return{
                ...state,
                basketNumbers: state.basketNumbers - numbers,
                cartCost: state.cartCost - (price * numbers),
                products:{
                    ...state.products,
                    [action.payload]: productSelected
                }

            }

        default : return state;
    }

    
}