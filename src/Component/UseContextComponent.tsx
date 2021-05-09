import React, { createContext, useContext, useState } from 'react';

const userInitialState = {
    firstName:'Jacky',
    lastName:'Chan'
};

type UserState = typeof userInitialState;

const UserContext = createContext<typeof userInitialState>(userInitialState);

const ConsumerComponent = () => {
    const ctx = useContext<UserState>(UserContext);

    return (
        <div>
            <div>First Name: {ctx.firstName}</div>
            <div>Last Name: {ctx.lastName}</div>
        </div>
    );
}

const UseContextComponent = () => {
    const [user, setUser] = useState<UserState>(userInitialState);

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button
                onClick={() => 
                    setUser({ firstName: "David", lastName: "Cheung" })}
            >Change Context</button>
        </UserContext.Provider>
    );
}

export default UseContextComponent;
