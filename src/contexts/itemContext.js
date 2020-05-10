// @flow
import * as React from "react"

import type { Item } from "../types"
type RecipeContextData = {|
  +item: Item,
  +setItem: (item: Item) => void,
|}

const defaultValues = {
  item: null,
  setItem: () => {
    throw new Error("ItemContext.setItem called but not initialised")
  },
}

export const ItemContext = React.createContext<ItemContextData>(defaultValues)

export function useItemContext(): ItemContextData {
  return React.useContext(ItemContext)
}
