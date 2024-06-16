import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

const HeartIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <FontAwesomeIcon className='favorite'
      icon={isHovered || click? faSolidHeart : faRegularHeart} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setClick(!click)}
      style={{ cursor: 'pointer', color:'#ff6161' }}
    />
  );
}

export default HeartIcon;