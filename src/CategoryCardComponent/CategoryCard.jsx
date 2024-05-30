
import React, { startTransition } from 'react';

export class CategoryCard extends React.Component {
  
  handleClick = () => {
    const { category, history } = this.props;
    startTransition(() => {
      history.push(`/products?filter=${category.id}`);
    });
  }

  render() {
    const { category } = this.props; 

    return (
      <div 
        className="col-md-3 card p-3 m-3 category-info" 
        style={{ border: `1px solid ${category.color}` }}
        onClick={this.handleClick}
        role="button"
      >
        <h2>{category.name}</h2>  
        <p>{category.description}</p>  
       
      </div>
    );
  }
}