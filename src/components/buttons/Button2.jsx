import React from 'react';

const Button2 = (props) => {
    return (
        <button
            onClick = {props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button2;