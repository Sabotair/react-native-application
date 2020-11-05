import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Authors from '../components/Authors'
import SearchBar from '../components/SearchBar'

export default function AuthorsPage({ navigation }) {
  const [userData, setUserData] = useState([])
  const [filteredUserData, setFilteredUserData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const res = await Axios.get('https://jsonplaceholder.typicode.com/users')
      setUserData(res.data)
      setFilteredUserData(res.data)
      setLoading(false)
    }
    getUsers()
  }, [])

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <SearchBar
            name="Authors"
            userData={userData}
            setFilteredUserData={setFilteredUserData}
          >
            <FlatList
              style={styles.authorsCard}
              data={filteredUserData}
              keyExtractor={({ id }, index) => id.toString()}
              renderItem={({ item }) => (
                <Authors
                  id={item.id}
                  name={item.name}
                  email={item.email}
                  navigation={navigation}
                />
              )}
            />
          </SearchBar>
        </>
      )}
    </>
  )
}
const styles = StyleSheet.create({
  authorsCard: {
    flex: 1,
    backgroundColor: 'white',
  },
})
