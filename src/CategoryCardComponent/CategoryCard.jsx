
import React from 'react';
import './styleCategory.css'

const urlImageLocation = 'https://localhost:7036/images/';

export class CategoryCard extends React.Component {
  
  render() {
    const { category } = this.props; 

    return (
      <div 
        className="col-md-3 card p-2 m-3 category-info" 
        style={{ border: `1px solid ${category.color}`,
                  backgroundImage: `url(${urlImageLocation+category.image+'.jpg'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '250px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
        role="button"
      >
        <div className='info-category p-2'>
          <h2 className='font-weight-bold'>{category.name}</h2>  
          <p>{category.description}</p>  
        </div>
       
      </div>
    );
  }
}