import React from 'react';
import './advice.scss';
import Button from "./Button";
function Advice(props){
    return( 
        <div className="advice-container">
            <h1>Wise words from {props.author}</h1>
            <div className="advice-card">
            <h2>{props.advice}</h2>
            <p>- {props.author}</p>
            {/*<Button click={props.Click}/>*/}
            </div>
    
            {props.children}
        </div>
    )
};

export default Advice;