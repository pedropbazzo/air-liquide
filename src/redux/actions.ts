import { ToDoItem } from '../types'
import * as types from './actionTypes'

export const updateToDoItems = (toDoItems: ToDoItem[]) => ({
  type: types.UPDATE_TO_DO_ITEMS,
  toDoItems,
})

export const checkItem = (index: number) => ({
  type: types.CHECK_ITEM,
  index,
})

export const uncheckItem = (index: number) => ({
  type: types.UNCHECK_ITEM,
  index,
})

export const fetchToDoItems = () => ({
  type: types.FETCH_TO_DO_ITEMS,
})
