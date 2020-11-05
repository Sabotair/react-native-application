import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements'

const MySearchBar = ({
  children,
  name,
  userData,
  setFilteredUserData,
  posts,
  setFilteredPostData,
}) => {
  const [search, setSearch] = useState('')

  const searchFilter = (text) => {
    if (name === 'Authors') {
      if (text) {
        const newData = userData.filter((item) => {
          const itemName = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase()
          const itemEmail = item.email
            ? item.email.toUpperCase()
            : ''.toUpperCase()
          const textData = text.toUpperCase()
          return itemName.concat(itemEmail).indexOf(textData) > -1
        })
        setFilteredUserData(newData)
        setSearch(text)
      } else {
        setFilteredUserData(userData)
        setSearch(text)
      }
    }
    if (name !== 'Authors') {
      if (text) {
        const newData = posts.filter((item) => {
          const itemTitle = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase()
          const itemBody = item.body
            ? item.body.toUpperCase()
            : ''.toUpperCase()
          const textData = text.toUpperCase()
          return itemTitle.concat(itemBody).indexOf(textData) > -1
        })
        setFilteredPostData(newData)
        setSearch(text)
      } else {
        setFilteredPostData(posts)
        setSearch(text)
      }
    }
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.textHeader}>
          {name === 'Authors' ? name : name + ' Posts'}
        </Text>
        <SearchBar
          containerStyle={styles.searchStyle}
          inputContainerStyle={styles.inputStyle}
          placeholder="Search"
          onChangeText={(text) => searchFilter(text)}
          onClear={(text) => searchFilter('')}
          value={search}
        />
      </View>
      <>{children}</>
    </>
  )
}

export default MySearchBar

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
  textHeader: {
    marginTop: 40,
    fontSize: 25,
    marginBottom: 10,
    marginLeft: 10,
  },
  searchStyle: {
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
  },
  inputStyle: {
    backgroundColor: '#E5E5E5',
  },
})
