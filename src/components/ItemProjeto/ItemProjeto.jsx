import classes from './item.module.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import React, { useState, useEffect, useReducer } from 'react';

const ItemProjeto = ( { image, alt, titulo, descricao, stack, link } ) => {

  const [isHidden, setIsHidden] = useState(true);

  const showHidden = () => {
    setIsHidden(!isHidden);
  }

  const [seta, setSeta] = useState(true);

  const showSeta = () => {
    setSeta(!seta)
  }

  const [setaFinal, setSetaFinal] = useState(true);

  const showSetaFinal = () => {
    setSetaFinal(!setaFinal)
  }

  return (
    <div href='#project' className='item-projeto' >
      <div className={!isHidden ? classes.hidden : classes.itemInicio} onMouseEnter={showSeta} onMouseLeave={showSeta}>
        <div className={classes.imgItem}>
          <img src={image} alt={alt} className={classes.imgInicio} />
        </div>
        <div className={seta ? classes.seta : classes.sideItem} onClick={showHidden}>
          <AiOutlineArrowRight style={{width: '40px', height: '40px'}} /> 
        </div>
      </div>
      <div className={isHidden ? classes.hidden : classes.itemFinal} onMouseEnter={showSetaFinal} onMouseLeave={showSetaFinal}>
      <div className={classes.tituloItem}>
          <h3 style={{fontWeight: 'bold'}}>{titulo}</h3>
        </div>
        <div className={classes.bodyItem}>
          <div className={setaFinal ? classes.setaFinal : classes.sideItemFinal} onClick={showHidden}>
            <AiOutlineArrowLeft style={{width: '40px', height: '40px'}} />
          </div>
          <div className={classes.mainBody}><p style={{fontSize: '18px'}}>{descricao}</p></div>
        </div>
        <div className={classes.footItem}>
          <a href={link} target={'_blank'}>
            <p className={classes.linkItem}>Clique aqui para ter acesso ao código</p>
          </a>
        </div>
        <div className={classes.stackItem}><p>Stack: {stack}</p></div>
      </div>
    </div>
  )
}

export default ItemProjeto;
