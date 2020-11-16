import React from 'react';

type ButtonProps = {
    size : string,
    onClick : any,
    text: string,
    classNames: string
}
const Button = ({size, onClick, text, classNames} : ButtonProps) => {
    const handleOnClick = () => {
        if(onClick) onClick()
    }
    return <button onClick={handleOnClick}>{text}</button>
}

export default Button;