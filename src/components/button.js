import React from 'react';

const SampleButton = (props) => {
    console.log(props);
    return (
        <button onClick={props.buttonClick}>{props.text}</button>
    )
}


export default SampleButton;
