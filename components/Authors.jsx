import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'

const Authors = ({ id, name, email, navigation }) => {
  const [posts, setCount] = useState([])
  useEffect(() => {
    const getCountPosts = async () => {
      const res = await Axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      )
      setCount(res.data)
    }
    getCountPosts()
  }, [])

  const goPost = () => {
    navigation.navigate('Posts', { posts, name })
  }
  return (
    <View style={styles.main}>
      <View style={styles.containerCard} onTouchEnd={goPost}>
        <Image source={require('../img/img.png')} style={styles.image} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.posts}>{posts.length} posts</Text>
        <Image style={styles.imagePost} source={require('../img/Vector.png')} />
      </View>
    </View>
  )
}

export default Authors

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  containerCard: {
    height: 72,
    marginLeft: 0,
  },
  image: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 0,
    top: 20,
  },
  title: {
    position: 'absolute',
    top: 18,
    height: 24,
    left: 88,
    right: 16,
    lineHeight: 24,
    fontSize: 16,
  },
  email: {
    position: 'absolute',
    left: 88,
    width: 200,
    right: 136,
    top: 44,
    fontSize: 12,
    color: '#382A2C',
    opacity: 0.54,
  },
  posts: {
    position: 'absolute',
    width: 80,
    right: 28,
    top: 32,
  },
  imagePost: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
})
