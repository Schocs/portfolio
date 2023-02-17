import classes from './item.module.css'

import React, { useState, useEffect, useReducer } from 'react';

const ItemProjeto = () => {

  const [isHidden, setIsHidden] = useState(true);

  const showHidden = () => {
    setIsHidden(!isHidden);
  }

  return (
    <a href='#project' className='item-projeto' onClick={showHidden}>
      <div className={!isHidden ? classes.hidden : classes.itemInicio}>
        <h3>inicio</h3>
        <div className={classes.teste}><h3>Olá</h3></div>
      </div>
      <div className={isHidden ? classes.hidden : classes.itemFinal}>
        <h3>mudou</h3>
      </div>
    </a>
  )
}

export default ItemProjeto;
