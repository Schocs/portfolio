import classes from './item.module.css'

import React, { useState, useEffect, useReducer } from 'react';

const ItemProjeto = ( { image, alt, titulo, descricao, stack, link } ) => {

  const [isHidden, setIsHidden] = useState(true);

  const showHidden = () => {
    setIsHidden(!isHidden);
  }

  return (
    <div href='#project' className='item-projeto' onClick={showHidden}>
      <div className={!isHidden ? classes.hidden : classes.itemInicio}>
        <div className={classes.imgItem}></div>
        <div className={classes.sideItem}></div>
      </div>
      <div className={isHidden ? classes.hidden : classes.itemFinal}>
      <div className={classes.tituloItem}>
          <h3>inicio</h3>
        </div>
        <div className={classes.bodyItem}>
          
        </div>
        <div className={classes.footItem}>
          <a href={link} target={'_blank'}>
            <h3>mudou</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ItemProjeto;
