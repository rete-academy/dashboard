import React from 'react';

type LoadingProps = {
    size : string,
    onClick : Function,
    text: string,
    classNames: string
}
const Loading = ({size, onClick, text, classNames} : LoadingProps) => {
    return <div>Loading...</div>
}

export default Loading;