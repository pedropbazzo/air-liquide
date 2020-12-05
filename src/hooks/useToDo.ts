import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchToDoItems, checkItem, uncheckItem } from '../redux/actions'
import { ReduxState } from '../types'

const useToDo = () => {
  const dispatch = useDispatch()

  const toDoItems = useSelector((state: ReduxState) => state.toDoItems)

  const isToDoCompleted =
    toDoItems.length &&
    toDoItems.reduce((acc, item) => acc && item.checked, true)

  // Initial fetch
  useEffect(() => {
    dispatch(fetchToDoItems())
  }, [])

  const toggleItem = (index: number) => {
    if (!toDoItems.length) return
    const targetAction = toDoItems[index].checked ? uncheckItem : checkItem
    dispatch(targetAction(index))
  }

  return {
    toDoItems,
    toggleItem,
    isToDoCompleted,
  }
}

export default useToDo
