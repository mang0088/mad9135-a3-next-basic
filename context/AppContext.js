import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [list, setList] = useState([]);
  console.log(list);

  useEffect(() => {
    fetch('/api/userlist')
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <AppContext.Provider value={list}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
