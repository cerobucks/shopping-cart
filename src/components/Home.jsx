import React from 'react';
import hoodieGrey from '../images/hooddie-1.jpg';
import hoodieBlue from '../images/hooddie-2.jpg';
import hoodieBlack from '../images/hooddie-3.jpg';
import hoodieWhite from '../images/hooddie-4.jpg';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';

const Home = (props)=>{
console.log(props)
return (
   <div className="container">
      <div className="image">
          <img src={hoodieGrey} alt="Grey Hoddie" />
          <h3>Grey Hoddie</h3>
          <h3>$21,99</h3>
          <a onClick={() => props.addBasket('greyHoddie')}  className="addToCart cart1" >Add to Cart</a>
      </div>
      <div className="image">
          <img src={hoodieBlue} alt="Blue Hoddie" />
          <h3>Blue Hoddie</h3>
          <h3>$24,99</h3>
          <a onClick={() => props.addBasket('blueHoddie')} className="addToCart cart2" >Add to Cart</a>
      </div>
      <div className="image">
          <img src={hoodieBlack} alt="Black Hoddie" />
          <h3>Black Hoddie</h3>
          <h3>$26,99</h3>
          <a onClick={() => props.addBasket('blackHoddie')} className="addToCart cart3" >Add to Cart</a>
      </div>
      <div className="image">
          <img src={hoodieWhite} alt="White Hoddie" />
          <h3>White Hoddie</h3>
          <h3>$29,99</h3>
          <a onClick={() => props.addBasket('whiteHoddie')} className="addToCart cart4" >Add to Cart</a>
      </div>
   </div>
)
}

export default connect(null, {addBasket})(Home);