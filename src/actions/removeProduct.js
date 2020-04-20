import {REMOVE_PRODUCT} from './types';

export const removeProduct = (name) =>{
  return (dispatch) =>{
     dispatch({
         type:REMOVE_PRODUCT,
         payload: name
     })
  }
}