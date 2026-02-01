import { StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from "react-native";
import Map from "./map";
import { useEffect, useState } from "react";
import { Card } from '@rneui/themed';
import { SafeAreaView } from "react-native-safe-area-context";
import { useOfflineMap } from "../hooks/useOfflineMap";

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
      sw: [-0.2, 51.471],   // southwest corner (lng, lat)
      ne: [0.01, 51.53]     // northeast corner (lng, lat)
    },
  },
]

const Index = () => {
  const [citySelectedOn, setCitySelectedOn] = useState(false);
  const [citySelectedArray, setCitySelectedArray] = useState<City | null>(null);
  let { downloadLondon, progress, isLoading, error } = useOfflineMap();

  useEffect(() => {
    if (citySelectedOn && citySelectedArray) {
      downloadLondon(citySelectedArray);
    }
  }, [setCitySelectedOn, citySelectedArray, downloadLondon]);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(9, 0, 79, 1)', paddingVertical: 10 }}>
      {!citySelectedOn ? (
        <View style={{backgroundColor: 'rgba(19, 3, 144, 1)', height: "100%", margin: 5}}>
          {cities.map((city) => {
            return (
              <View key={city.name}>
                <Pressable 
                  onPress={() => {
                    //let citySelectedName = "";
                    let citySelectedName = city.name;
                    let filteredCity = cities.find((city) => citySelectedName === city.name);
                    setCitySelectedArray(filteredCity || null);
                    setCitySelectedOn(true)
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
        </View>
        ) : (
        <View style={{flex: 1}}>
          {progress === 100 ? (
            <Map cities={cities} citySelectedArray={citySelectedArray} /> 
          ):(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#00ff00" />
              <Text style={{ color: 'white', marginTop: 20, fontSize: 18 }}>
                Optimizing Offline Maps...
              </Text>
              <Text style={{ color: 'rgba(255,255,255,0.6)', marginTop: 10 }}>
                {progress}% Complete
              </Text>
            </View>
          )}
        </View>
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


