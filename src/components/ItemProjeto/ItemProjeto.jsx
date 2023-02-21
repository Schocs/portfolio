import classes from './item.module.css'

import React, { useState, useEffect, useReducer } from 'react';

const ItemProjeto = ( { image, alt, titulo, descricao, stack, link } ) => {

  const [isHidden, setIsHidden] = useState(true);

  const showHidden = () => {
    setIsHidden(!isHidden);
  }

  return (
    <div href='#project' className='item-projeto' onMouseEnter={showHidden}>
      <div className={!isHidden ? classes.hidden : classes.itemInicio}>
        <div className={classes.tituloItem}>
          <h3>inicio</h3>
        </div>
        <div className={classes.bodyItem}>
          
        </div>
      </div>
      <div className={isHidden ? classes.hidden : classes.itemFinal}>
        <h3>mudou</h3>
      </div>
    </div>
  )
}

export default ItemProjeto;
