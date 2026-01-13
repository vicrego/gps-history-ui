import { Button, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Map from "./map";
import { useEffect, useState } from "react";
import useLocations from "../hooks/useLocations";
import { Card, Icon } from '@rneui/themed';

//import { Image } from "expo-image";
//import london from '../../assets/images/splash-icon.png';

// with import


const cities = [
  {
    name: "London",
    image: require("../../assets/images/intial-menu/cities/londonMenu.jpg"),
    bounds: [
      {
        ne: [ -0.2607, 51.4129],     // northeast corner (lng, lat)
        sw: [ 0.1287, 51.5745 ]      // southwest corner (lng, lat)
      }
    ]
  },
  {
    name: "France",
    //image: require("../../assets/images/londonMenu.jpg")
  }
]
const backgroundTexture = require("../../assets/images/intial-menu/old-paper-texture.jpg");

const Index = () => {
  const [on, setOn] = useState(false);
  //console.log(cities.london.image)
  //useEffect(() => {console.log("localCoodinates: ", localCoodinates)}, [])
  const currentLocation = useLocations();
  return (
      <View style={{flex: 1}}>
        {!on ? (
          <ImageBackground 
            source={backgroundTexture}
            resizeMode="cover" 
            style={{ width: "100%", height: "100%"}}

          >
          {cities.map((city) => {
            return (
              <Card key={city.name}>
                <Card.Title><Text>{city.name}</Text></Card.Title>
                <Card.Divider/>
                <Image
                  style={styles.image} 
                  source={city.image}
                />
                <Button title="Choose" onPress={() => setOn(true)}/>
              </Card>            
            )}
          )}
          </ImageBackground>     
        ) : (
            <Map currentLocation={currentLocation} cities={cities}/>
          )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
          
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 130,
    height: 130,
    backgroundColor: '#0553',
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
});

export default Index;


