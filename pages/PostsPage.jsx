import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import SearchBar from '../components/SearchBar'

import Posts from '../components/Posts'

const PostsPage = ({ route }) => {
  const [posts, setPosts] = useState(route.params.posts)
  const [filteredPostData, setFilteredPostData] = useState(route.params.posts)

  return (
    <SearchBar
      name={route.params.name}
      posts={posts}
      setFilteredPostData={setFilteredPostData}
    >
      {posts.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.postsCard}
          data={filteredPostData}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <Posts id={item.id} title={item.title} body={item.body} />
          )}
        />
      )}
    </SearchBar>
  )
}

export default PostsPage

const styles = StyleSheet.create({
  postsCard: {
    flex: 1,
    backgroundColor: 'white',
  },
})
