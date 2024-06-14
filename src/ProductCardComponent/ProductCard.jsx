
import React from 'react';

export class ProductCard extends React.Component {
  
  render() {
    const { product } = this.props; 

    return (
      <div className="col-md-3" >
        <div className="card p-3 m-1 product-info" >
          <h5>{product.name}</h5>  
          <p>{product.description}</p>  
        </div>
      </div>
    );
  }
}