import React from 'react';
import {connect} from 'react-redux';
import hoodieGrey from '../images/hooddie-1.jpg';
import hoodieBlue from '../images/hooddie-2.jpg';
import hoodieBlack from '../images/hooddie-3.jpg';
import hoodieWhite from '../images/hooddie-4.jpg';
import {productQuantity} from '../actions/productQuantity';
import {removeProduct} from '../actions/removeProduct';

const Cart = (props) => {
    
    let productsInCart = [];

    Object.keys(props.basketProps.products).forEach(item =>{

        if(props.basketProps.products[item].inCart){
            productsInCart.push(props.basketProps.products[item])
        }
    })
    //const productImages = [hoodieGrey,hoodieBlue,hoodieBlack,hoodieWhite]
    const productImages = (product) =>{
        switch(product.tagName){
            case "greyHoddie":return hoodieGrey;
            case "blueHoddie":return hoodieBlue;
            case "blackHoddie":return hoodieBlack;
            case "whiteHoddie":return hoodieWhite;
        }
    }
    
    productsInCart = productsInCart.map(function (product, index){
       return (
        <div className="border-bottom" key={index}>
        <div className="product"> 
        <ion-icon onClick={() => props.removeProduct(product.tagName)} name="close-circle"></ion-icon>
        <img src={productImages(product)}/>
           <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price1 sm-hide">${product.price}</div>
        <div className="quantity1">
           <ion-icon onClick={() => props.productQuantity("decrease",product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
           <span>{product.numbers}</span>
           <ion-icon onClick={() => props.productQuantity("increase",product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
        </div>  
        <div className="total1">${product.numbers * product.price}</div>
        </div>
       )
    })

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-title">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
             {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal"> ${(props.basketProps.cartCost).toFixed(2)}</h4>
            </div>
        </div> 
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState,
  })
  export default connect(mapStateToProps,{productQuantity,removeProduct})(Cart);