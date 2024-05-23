import { useRoutes, Navigate, type RouteObject } from "react-router-dom"

// components
import MainLayout from "@/layouts/Main"
import NotFound from "@/components/NotFound"
import Detail from "@/views/Detail"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/main/detail" />,
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Detail />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
]

const Router = () => {
  return useRoutes(routes)
}

export default Router
