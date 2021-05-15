import React, { useEffect, useMemo, useState } from 'react';

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface AjaxReturn<T> {
  data: T | null;
  done: boolean;
}

function UseFetchData<T>(url: string) :AjaxReturn<T> {
  const [datax, dataxSet] = useState<T | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: T) => {
        dataxSet(d);
        doneSet(true);
      });
  }, [url]);

  return {
    data: datax,
    done,
  };
}

const CustomHookComponent = () => {
  const { data } = UseFetchData<Users[]>('https://jsonplaceholder.typicode.com/users');

  // recalculated only when the dependencies has been changed. Optimized the performance
  const user = useMemo(() => {
    return (data || []).filter(u => u.name.includes("Leanne"))
  }, [data]);

  // console.log(user);

  return (
    <div>
      <span>Username:</span>
      {
        user.length && (
          <h3>{user[0].username}</h3>
        )}
    </div>
  );
}

export default CustomHookComponent;
