import React, { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Right,
  Button,
  Text,
} from 'native-base'
import ToDoList from '../components/ToDoList'
import useToDo from '../hooks/useToDo'

const Home = () => {
  const { toDoItems, isToDoCompleted, toggleItem } = useToDo()
  const [isSuccess, setIsSuccess] = useState(false)

  const handleListItemPress = (index: number) => {
    toggleItem(index)
  }

  return (
    <Container>
      <Image
        style={{ width: 380, height: 90 }}
        source={require('../../assets/AIR_LIQUIDE.png')}
      />

      <Header style={{ alignItems: 'center' }}>
        <Title style={{}}>Job Security List</Title>
      </Header>

      {!isSuccess ? (
        <View style={{ padding: 20 }}>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 30,
              fontSize: 24,
              textAlign: 'center',
            }}
          >
            Check your equipment. Take your security item and check the correct
            option.
          </Text>
          <ToDoList items={toDoItems} onListItemPress={handleListItemPress} />

          <Button
            style={{ margin: 20 }}
            disabled={!isToDoCompleted}
            onPress={() => setIsSuccess(true)}
            full
          >
            <Text>Finish</Text>
          </Button>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 30, textAlign: 'center' }}>
            Congratulation! You have concluded the security checklist.
          </Text>
        </View>
      )}
    </Container>
  )
}

export default Home
