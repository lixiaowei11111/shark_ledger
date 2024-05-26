import { enumToArray } from "@/lib"

export enum routeAliasEnum {
  DETAIL = "/main/detail",
  MY = "/main/my",
  GRAPH = "/main/graph",
  DISCOVER = "/main/discover",
  TALLY = "/main/tally",
}

export const routeAliasList = enumToArray(routeAliasEnum)
