import React from 'react';
import classes from './button.module.scss';


function Button(props){
    let btn = [classes.button];
   

    return <button className={btn.join(' ')} onClick={props.click}>
      New Quote
    </button>
}

export default Button;