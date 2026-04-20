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
    bounds: {
      sw: [-0.2, 51.471],
      ne: [0.01, 51.53]
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
  }, [citySelectedOn, citySelectedArray, downloadLondon]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {!citySelectedOn ? (
          <View style={styles.cityContainer}>
            <Text style={styles.headerText}>Select a City to Explore</Text>
            {cities.map((city) => (
              <Pressable 
                key={city.name} 
                onPress={() => {
                  setCitySelectedArray(city);
                  setCitySelectedOn(true);
                }}
                style={({ pressed }) => [
                  styles.card,
                  pressed ? styles.cardPressed : null,
                ]}
              >
                <Card containerStyle={styles.cardContainer}>
                  <Text style={styles.cityName}>{city.name}</Text>
                  <Image style={styles.image} source={city.image} />
                </Card> 
              </Pressable>           
            ))}
          </View>
        ) : (
          <View style={styles.mapContainer}>
            {progress === 100 ? (
              <Map cities={cities} citySelectedArray={citySelectedArray} /> 
            ) : (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={styles.loadingText}>Optimizing Offline Maps...</Text>
                <Text style={styles.progressText}>{progress}% Complete</Text>
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
    backgroundColor: 'rgba(9, 0, 79, 1)',
  },
  safeArea: {
    flex: 1,
    paddingVertical: 10,
  },
  headerText: {
    color: "white", 
    fontSize: 28, 
    fontFamily: "CormorantUnicase",
    textAlign: "center",
    marginBottom: 10
  },
  cityContainer: {
    backgroundColor: 'rgba(19, 3, 144, 1)',
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    //alignItems: 'center',
  },
  card: {
    marginBottom: 10,
  },
  cardContainer: {
    padding: 0,
    borderRadius: 10,
    elevation: 5, // Android shadow
    shadowOpacity: 0.3, // iOS shadow
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  cityName: {
    position: 'absolute',
    color: "white",
    top: "30%",
    left: "10%",
    fontWeight: "bold",
    fontSize: 20,
    zIndex: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 10,
  },
  mapContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'white',
    marginTop: 20,
    fontSize: 18,
  },
  progressText: {
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 10,
  },
  cardPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Feedback on press
  },
});

export default Index;