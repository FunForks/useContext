/**
 * CustomContext.jsx
 */



import React, { createContext, useState } from 'react'



export const CustomContext = createContext()



export const CustomProvider = ({ children }) => {
  const [ provided, setProvided ] = useState("value provided by context (edit me)")

  return (
    <CustomContext.Provider
      value ={{
        provided,
        setProvided
      }}
    >
      {children}
    </CustomContext.Provider>
  )
}