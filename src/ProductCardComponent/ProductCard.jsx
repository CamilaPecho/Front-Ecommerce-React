
import React from 'react';

export class ProductCard extends React.Component {
  
  render() {
    const { product } = this.props; 

    return (
      <div className="col-md-3 card p-3 m-3 product-info" >
        <h2>{product.name}</h2>  
        <p>{product.description}</p>  
      </div>
    );
  }
}