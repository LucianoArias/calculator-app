import { createContext, useState } from 'react';

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sing: '',
    num: 0,
    res: 0,
  });
  const prodiverValue = {
    calc,
    setCalc,
  };
  return (
    <CalcContext.Provider value={prodiverValue}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
