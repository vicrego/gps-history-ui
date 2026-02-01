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
    <View>
      <View style={styles.outerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Where to?"
          value={query.trimStart()}
          onChangeText={setQuery}
        />
      </View>
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
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    top: 40,
    left: 10,
    right: 10,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    zIndex: 1,
    padding: 5,
    elevation: 4,
  },
  innerContainer: {
    position: "absolute",
    top: 100,
    left: 10,
    right: 10,
    //height: "fill",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 8,
    zIndex: 9,
    padding: 13,
    elevation: 4,
    gap: 7
  },
  input: {
    flex: 1,
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