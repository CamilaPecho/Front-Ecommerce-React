
import React from 'react';

export class CategoryCard extends React.Component {
  render() {
    const { category } = this.props; 

    return (
      <div className="col-md-3 card p-3 m-3 category-info" style={{  border: `1px solid ${category.color}`}}>
        
        <h2>{category.name}</h2>  
        <p>{category.description}</p>  
       
      </div>
    );
  }
}