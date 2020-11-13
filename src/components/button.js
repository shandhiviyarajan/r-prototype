import React from 'react';

const SampleButton = (props) => {
    console.log(props);

    const template = () =>{
        <button onClick={props.buttonClick}>{props.text}</button>
    }

    return (
        template();
    )
}


export default SampleButton;
