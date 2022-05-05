import classes from './input.module.css';
import React from 'react';

export const Input = React.forwardRef((props, ref) => {
    // console.log(ref, "----+++")
    return (
        <div
            className={classes.input}
        >
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
});