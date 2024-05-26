import { useRoutes, Navigate, type RouteObject } from "react-router-dom"
// components
import MainLayout from "@/layouts/Main"
import NotFound from "@/components/NotFound"
import Detail from "@/views/Detail"
import Graph from "@/views/Graph"
import Discover from "@/views/Discover"
import My from "@/views/My" //我的

import Tally from "@/views/Tally"
import Expense from "@/views/Tally/Expense"
import Income from "@/views/Tally/Income"
import TallyConfig from "@/views/Tally/Config"

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
      {
        path: "graph",
        element: <Graph />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "my",
        element: <My />,
      },
      {
        path: "tally",
        element: <Navigate to="./expense" />,
      },
      {
        path: "tally",
        element: <Tally />,
        children: [
          {
            path: "expense",
            element: <Expense />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "config",
            element: <TallyConfig />,
          },
        ],
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
