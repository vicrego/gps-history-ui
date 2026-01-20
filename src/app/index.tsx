import { Button, StyleSheet, Text, View, Image, ImageBackground, Pressable } from "react-native";
import Map from "./map";
import { useEffect, useState } from "react";
import useLocations from "../hooks/useLocations";
import { Card, Icon } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Svg from 'react-native-svg';

type City = {
  name: string;
  image: any;
  centerCoordinate: [number, number];
  bounds: {
    sw: [number, number];
    ne: [number, number];
  }
}

const cities: City[] = [
  {
    name: "London",
    image: require("../../assets/images/initial-menu/cities/londonMenu.jpg"),
    centerCoordinate: [-0.1272, 51.5074],    
    bounds: 
    {
      sw: [-0.2, 51.471],      // southwest corner (lng, lat)
      ne: [0.01, 51.53]     // northeast corner (lng, lat)
    },
  },

  {
    name: "Paris",
    image: "",
    centerCoordinate: [-0.1272, 51.5074],    
    bounds: 
    {
      sw: [-0.233, 51.478],      // southwest corner (lng, lat)
      ne: [0.0, 51.53]     // northeast corner (lng, lat)
    },
  }
]

const Index = () => {
  const [on, setOn] = useState(false);
  let citySelectedName = "";
  const [citySelectedArray, setCitySelectedArray] = useState<City | null>(null);

  const currentLocation = useLocations();
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(9, 0, 79, 1)' }}>
      {!on ? (
        <View style={{backgroundColor: 'rgba(19, 3, 144, 1)', margin: 5}}>
          {/*
          <ImageBackground 
            source={backgroundTexture}
            resizeMode="cover" 
            style={{ width: "100%", height: "100%"}}
          >*/}
            {cities.map((city) => {
              return (
                <View key={city.name}>
                  <Pressable 
                    onPress={() => {
                      citySelectedName = city.name;
                      console.log("citySelectedName: ", citySelectedName)
                      console.log("city.name: ", city.name)
                      let filteredCity = cities.find((city) => citySelectedName === city.name);
                      console.log("filteredCity: ", typeof(filteredCity))
                      setCitySelectedArray(filteredCity || null);
                      setOn(true)
                    }}
                  >
                    <Card containerStyle={{padding: 0}} key={city.name}>
                      <Text 
                        style={{
                            position: 'absolute',
                            color: "Black", 
                            top: "30%",
                            left: "10%",
                            textAlignVertical: "center", 
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 20,
                            zIndex: 2
                        }}
                    >
                        {city.name}
                    </Text>
                    <Image
                      style={styles.image} 
                      source={city.image}
                    />
                    </Card> 
                  </Pressable>           
                </View>
              )}
            )}
          {/*</ImageBackground>  */}
          </View>
        ) : (
          <Map currentLocation={currentLocation} cities={cities} citySelectedArray={citySelectedArray} /> 
      )}
      </SafeAreaView>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "auto",
    height: 130,
    backgroundColor: '#0553',
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
});

export default Index;


