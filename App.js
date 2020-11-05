import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'

import AuthorsPage from './pages/AuthorsPage'
import PostsPage from './pages/PostsPage'
import HeadProvider from './context/HeadContext'

const Stack = createStackNavigator()

export default function App() {
  return (
    <HeadProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={AuthorsPage} />
            <Stack.Screen name="Posts" component={PostsPage} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="none" />
      </View>
    </HeadProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    fontFamily: 'Roboto',
  },
})
