import React, { useState } from 'react';

const UseStateComponent = () => {
    const [arr, setArr] = useState<number[]>([]);
    const [name, setName] = useState<string>('');

    return (
        <div>
            <div>
                <div>
                    <button
                        onClick={() => setArr([...arr, arr.length + 1])}
                    >Add Number</button>
                </div>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button
                onClick={()=>setName("David")}
                >Set name to David</button>
            </div>
            Name: {JSON.stringify(name)}
        </div>
    );
}

export default UseStateComponent;
