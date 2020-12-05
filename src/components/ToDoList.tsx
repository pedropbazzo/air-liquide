import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Body, CheckBox, ListItem, Text, View } from 'native-base'
import { ToDoItem } from '../types'

const ToDoList = ({ items, onListItemPress }: ToDoListProps) => {
  return (
    <>
      {items.map((toDoItem, index) => (
        <TouchableWithoutFeedback
          key={toDoItem.name}
          onPress={() => onListItemPress(index)}
        >
          <ListItem>
            <CheckBox
              checked={toDoItem.checked}
              onPress={(e) => onListItemPress(index)}
            />
            <Body>
              <Text>{toDoItem.name}</Text>
            </Body>
          </ListItem>
        </TouchableWithoutFeedback>
      ))}
    </>
  )
}

interface ToDoListProps {
  items: ToDoItem[]
  onListItemPress: Function
}

export default ToDoList
