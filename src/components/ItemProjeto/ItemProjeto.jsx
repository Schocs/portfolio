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
        <p className={classes.tituloItem}>inicio</p>
      </div>
      <div className={isHidden ? classes.hidden : classes.itemFinal}>
        <h3>mudou</h3>
      </div>
    </div>
  )
}

export default ItemProjeto;
