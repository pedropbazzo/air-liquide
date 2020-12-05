import { combineReducers } from 'redux'
import { ReduxAction, ToDoItem } from '../types'
import * as types from './actionTypes'

interface ToDoItemsAction extends ReduxAction {
  toDoItems: ToDoItem[]
  index: number
}

const toDoItemsReducer = (
  state: ToDoItem[] = [],
  action: ToDoItemsAction
): ToDoItem[] => {
  switch (action.type) {
    case types.UPDATE_TO_DO_ITEMS:
      return action.toDoItems
    case types.CHECK_ITEM:
      return state.map((item, index) => {
        return index === action.index ? { ...item, checked: true } : item
      })
    case types.UNCHECK_ITEM:
      return state.map((item, index) => {
        return index === action.index ? { ...item, checked: false } : item
      })
    default:
      return state
  }
}

const reducer = combineReducers({
  toDoItems: toDoItemsReducer,
})

export default reducer
