// HOOKS
import React, { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
//CONTEXTS
import { PreviousRouteContext } from "@/hooks/usePreviousRoute"

const PreviousRouteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  const previousLocation = useRef<string | null>(null)

  useEffect(() => {
    previousLocation.current = location.pathname
  }, [location])

  return (
    <PreviousRouteContext.Provider value={previousLocation.current}>
      {children}
    </PreviousRouteContext.Provider>
  )
}

export default PreviousRouteProvider
