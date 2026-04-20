import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import SearchComponent from './SearchComponent'
import AntDesign from '@expo/vector-icons/AntDesign' 
import { router } from 'expo-router'


const MenuBar = ({setDestinationCoords, publicToken}: any) => {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity
          //style={styles.menuButton}
          onPress={() => {
            router.push({
              pathname: "/",
            });
          }}
      >
        <AntDesign style={styles.exploreIcon} name="compass" size={30} color="white" />
      </TouchableOpacity>
        <SearchComponent
            setDestinationCoords={setDestinationCoords}
            publicToken={publicToken}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  exploreIcon: {
    marginLeft: 20,
  },
  outerContainer: {
    paddingVertical: 20,
    zIndex: 1,
    width: "100%",
    height: 150,
    backgroundColor: "#242446",
  },
})


export default MenuBar