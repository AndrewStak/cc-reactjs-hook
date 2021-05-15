import React, { ReactElement, ReactNode } from 'react';

interface MyHeadingProps {
    title: string;
}

interface MyListProps<T> {
    items: T[];
    render: (item: T) => ReactNode;
}

const MyHeading = (props: MyHeadingProps) => {
    return <h3>{props.title}</h3>
}

const MyList: <T>(props: MyListProps<T>) => ReactElement = (props) => {
    return (
        <div>
            {
                props.items.map((item, idx) => (
                    // do render here to produce React Node 
                    <div key={idx}>{props.render(item)}</div>
                ))
            }
        </div>
    );
}


const CustomElementComponent = () => {
    return (
        <div>
            <MyHeading title='My Custom Heading' />
            <h4>MyList Element:</h4>
            <MyList items={['aa', 'bb', 'cc']} render={(str) => <span>{str}</span>} />
        </div>
    );
}

export default CustomElementComponent;
