import { Text } from '@react-navigation/elements';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { mapFeatures } from '../api/poiContent';
import { Feature, Point, GeoJsonProperties } from 'geojson';
import { StyleSheet } from 'react-native';

  
const SearchComponent = ({
    setDestinationCoords, 
  }: any) => {
    
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState<Feature<Point, GeoJsonProperties>[]>([])
  
  useEffect(() => {
    if(query){
      const OnChangeText = async () =>  {
        const res = mapFeatures.features.filter((item) => {
          const title = item?.properties?.title || "";
          return title.toLowerCase().startsWith(query.toLowerCase());
        });
        setSearchList(res);
      }
      OnChangeText();
    }
  }, [query]);


  return (
    <View style={styles.outerContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Where to?"
          value={query.trimStart()}
          onChangeText={setQuery}
        />
      </View>
      <View style={styles.selectContainer}>
        {(searchList[0] !== undefined) && (query != "") && (
          <View style={styles.innerContainer}>
            {searchList
            .map((x: any, i: number) =>{
              return (
              <View key={i}>
                <Pressable onPress={() => {
                  setDestinationCoords([
                    x.geometry.coordinates[0], x.geometry.coordinates[1]
                  ]);
                  setQuery("");
                }}
                >
                  <Text>{x.properties.title}</Text>
                </Pressable>
              </View>
              )}
            )}
          </View>
        )
    }
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
  },
  searchContainer: {
    width: "90%",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    zIndex: 9,
    elevation: 4,
  },
  selectContainer: {
    width: "90%",
    gap: 70,
    columnGap: 10,
    //flexDirection: "row",
    justifyContent: "space-between"
  },
  innerContainer: {
    
    //top: 60,   
    backgroundColor: "white",
    borderRadius: 8,
    padding: 13,
    zIndex: 9,
    elevation: 4,
    //gap: 7
  },
  input: {
    paddingHorizontal: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2180e59c',
    borderRadius: 8,
    padding: 10,
    //backgroundColor: "blue"
  }
});

export default SearchComponent