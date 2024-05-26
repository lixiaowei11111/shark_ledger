import { useContext, createContext } from "react"
export const PreviousRouteContext = createContext<string | null>(null)

/**
 * @description 获取上一个路由
 * @returns
 */
export const usePreviousRoute = () => {
  return useContext(PreviousRouteContext)
}
