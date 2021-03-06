// @flow
import * as React from "react"

import type { Item } from "src/types/menu"
type ItemContextData = {|
  +item: ?Item,
  +setItem: (item: ?Item) => void,
|}

const defaultValues = {
  item: null,
  setItem: () => {
    throw new Error("ItemContext.setItem called but not initialised")
  },
}

export const ItemContext: React.Context<ItemContextData> = React.createContext<ItemContextData>(
  defaultValues
)

export function useItemContext(): ItemContextData {
  return React.useContext(ItemContext)
}
