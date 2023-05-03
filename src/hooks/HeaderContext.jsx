import React, { createContext, useContext, useState} from 'react';

export const HeaderContext = createContext('');

function HeaderProvider({ children , value}) {
  const [searchValue, setSearchValue] = useState(value);
  
  
  return (
    <HeaderContext.Provider value={{searchValue, setSearchValue}}>
      {children}
    </HeaderContext.Provider>
  )
}

function useHeader(){
  const headerSearchValue = useContext(HeaderContext)

  return headerSearchValue;
}

export {HeaderProvider, useHeader}
