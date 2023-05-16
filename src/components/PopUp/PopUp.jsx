import React from "react";
import classes from './item.module.css';
import { MdClose } from 'react-icons/md';

const PopUp = (props) => {

    return props.trigger ? (
        <div className={classes.Pop}>
            <div className={classes.topPop}>
                <div className={classes.title}>
                    {props.resultado}
                </div>
                <div className={classes.closePop} onClick={() => props.setTrigger(false)}>
                    <MdClose size={25}/>
                </div>
            </div>
            <div className={classes.mainPop}>
                {props.msg}
            </div>
            <div className={classes.botPop}>
                {props.check}
            </div>
        </div>
    ) : 
    ""
}

export default PopUp;