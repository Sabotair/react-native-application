import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Posts = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{body}</Text>
      </View>
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 18,
    width: 266,
  },
  description: {
    width: 320,
    marginLeft: 18,
    color: '#382A2C',
    opacity: 0.54,
    paddingBottom: 10,
  },
})
