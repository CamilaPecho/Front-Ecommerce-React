
import React from 'react';
import './styleProduct.css'
import HeartIcon from"../ExtraComponents/HeartIcon"

const urlImageLocation = 'https://localhost:7036/images/'

export class ProductCard extends React.Component {
  
  render() {
    const { product } = this.props; 

    return (
      <div className="col-md-3 product" >
        <div className="card p-3 m-2 product-info">
          <HeartIcon />
          <div className="image-container">
            <img 
              src={urlImageLocation + product.image + ".jpg"} 
              alt={product.name}
            />
          </div>
          <div className='product-price d-flex'>
            <h2>${product.price}</h2>
            {product.hasDiscount?<p className='discount'>-{Math.floor(Math.random() * 70) + 1}% off</p> : null}
          </div>
          <h5>{product.name}</h5>  
          <p>{product.description}</p> 
          <div className='section-actions'>
            <button className='btn w-100 btn-buy-now'>Comprar ahora</button>
            <button className='btn w-100 btn-add-cart'>Agregar al carrito</button>
          </div>
        </div>
      </div>
    );
  }
}