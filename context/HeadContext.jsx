import React, { useContext } from 'react'

const HeadContext = React.createContext()

export const useHeader = () => {
  return useContext(HeadContext)
}

const HeadProvider = ({ children }) => {
  return <HeadContext.Provider>{children}</HeadContext.Provider>
}

export default HeadProvider
