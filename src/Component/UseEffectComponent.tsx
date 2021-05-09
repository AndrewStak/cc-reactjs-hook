import React, { useEffect, useState } from 'react';

const UseEffectComponent = () => {
    const [val, setVal] = useState(1);
    useEffect(() => {
        const timer = window.setInterval(() => {
            // Don't work, as it is closure
            // let newVal = val + 1;
            // setVal(newVal);
            
            setVal(v => v + 1);
        }, 1000);
        return () => {
            window.clearInterval(timer);
        };
    }, []);

    return (
        <div>
            {val}
        </div>
    );
}

export default UseEffectComponent;
