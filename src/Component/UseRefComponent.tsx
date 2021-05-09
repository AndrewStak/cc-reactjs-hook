import React, { useRef } from 'react';

const UseRefComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const onButtonClick = () => {
        alert(inputRef.current?.value);
    }

    return (
        <div>
            <input type="text" ref={inputRef} /> &nbsp;
            <button onClick={onButtonClick}>Get the Input Value</button>
        </div>
    );
}

export default UseRefComponent;
