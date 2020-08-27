import { useState, useEffect } from 'react';

const useInitialState = (API) => {

//   const [list, setList] = useState({ '': [] });
const [list, setList] = useState({ '': [] });


  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        // console.log(data);
        return setList(data);
      } catch {
        console.log(error);
      }
    };
    fetchList();
  }, []);
  return list;
};

export default useInitialState;