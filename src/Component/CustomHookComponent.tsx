import React, { useEffect, useState } from 'react';

type Beverage = {
    name: string;
    productName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
}

interface AjaxReturn<T> {
    data: T | null;
    done: boolean;
}


function UseFetchData<T>(
    url: string
  ): AjaxReturn<T>{
    const [data, dataSet] = useState<T | null>(null);
    const [done, doneSet] = useState(false);
  
    useEffect(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((d: T) => {
          dataSet(d);
          doneSet(true);
        });
    }, [url]);
  
    return {
      data,
      done,
    };
  }

const CustomHookComponent = () => {
    return (
        <div>

        </div>
    );
}

export default CustomHookComponent;
