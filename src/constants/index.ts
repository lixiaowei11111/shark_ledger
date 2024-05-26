import { enumToArray } from "@/lib"

export enum TabBarValueEnum {
  DETAIL = "detail",
  GRAPH = "graph",
  TALLY = "tally",
  DISCOVER = "discover",
  MY = "my",
}

export const tabbarValueList = enumToArray(TabBarValueEnum)

export enum TallyEnum {
  EXPENSE = "expense",
  INCOME = "income",
}
