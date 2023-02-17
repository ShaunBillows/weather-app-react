import { createContext, useState, useContext } from "react"
const TempContext = createContext()

export function TempProvider({ children }) {
  const [tempUnit, setTempUnit] = useState("°C")

  const toggleTemp = () => {
    setTempUnit(tempUnit === "°C" ? "F" : "°C")
  }

  return (
    <TempContext.Provider value={{ tempUnit, toggleTemp }}>
      {children}
    </TempContext.Provider>
  )
}

export function useTemp() {
  return useContext(TempContext)
}
