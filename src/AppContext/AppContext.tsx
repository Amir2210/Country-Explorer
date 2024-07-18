import { createContext, useContext, useState, ReactNode } from 'react'

interface GlobalContextType {
  searchInput: string
  onSearchFlags: (input: string) => void
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

// Custom hook to use the GlobalContext
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider')
  }
  return context
}

// Define the type for the AppContext props
interface AppContextProps {
  children: ReactNode
}

// AppContext component
export default function AppContext({ children }: AppContextProps) {
  const [searchInput, setSearchInput] = useState<string>('')

  const onSearchFlags = (input: string) => {
    setSearchInput(input)
  }
  console.log('searchInput:', searchInput)

  return (
    <GlobalContext.Provider value={{ onSearchFlags, searchInput }}>
      {children}
    </GlobalContext.Provider>
  )
}
