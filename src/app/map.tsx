import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Text } from '@react-navigation/elements';
import Mapbox from '@rnmapbox/maps';
import 'expo-dev-client';
import React, { useEffect, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import ArrivalModal from '../components/ArrivalModal';
import NavigationInfo from '../components/NavigationInfo';
import SearchComponent from '../components/SearchComponent';
import useLocations from '../hooks/useLocations';
import { calculationDistanceAndDuration } from '../utils/navigationUtils';
import { mapFeatures, poiImages } from '../api/poiContent';
import PoiModal from '../components/PoiModal';

let publicToken = "pk.eyJ1IjoidmljcmVnbyIsImEiOiJjbWc2OWQ2cjkwYmR3MmxzZHZ4aWpzcDM2In0.7_PNb8rw61ISZt1Q7ysIuw";
Mapbox.setAccessToken(publicToken);


const Map = ({currentLocation, cities, citySelectedArray}: any) => {
  console.log("citySelectedArray Map: ", citySelectedArray.bounds)
  //Index manages every state that will be displayed or used by shared component
  const [destinationRoute, setDestinationRoute] = useState(null);
  const [destinationDistance, setDestinationDistance] = useState(0);
  const [destinationDuration, setDestinationDuration] = useState(0);
  const [placeName, setPlaceName] = useState();
  const [shortName, setShortName] = useState();
  const [poiFeatures, setPoiFeatures] = useState<any>();
  const [poiModalView, setPoiModalView] = useState(false);
  const [currentDistanceDuration, setCurrentDistanceDuration] = useState<any>(0);
  const [searchComponent, setSearchComponent] = useState(false);
  const [destinationCoords, setDestinationCoords] = useState<any>([null]);
  const [destinationReached, setDestinationReached] = useState(false);

  //Gets permission and sets coordinates based on user's location
  
  useEffect(() => {   
    destinationDistance && (
      setCurrentDistanceDuration(calculationDistanceAndDuration(currentLocation, destinationDistance, destinationDuration, destinationRoute))
    )   
    if(currentDistanceDuration !== 0){
      if(currentDistanceDuration.remainingMiles.toFixed(3) <= 0.03){
        //RESET DESTINATION STATE
        setDestinationReached(true);
        setCurrentDistanceDuration(0);
        setDestinationDuration(0);
        setDestinationDistance(0);
      }
    }
  }, [destinationDistance, currentLocation, destinationRoute]);

  const handlePress = () => {
    setSearchComponent(true);
  }
  
  return (
    <View style={styles.container}>
      {!destinationDistance || searchComponent ? (
        <SearchComponent
          publicToken={publicToken}
          currentLocation={currentLocation}
          setDestinationRoute={setDestinationRoute}
          setDestinationDistance={setDestinationDistance}
          setDestinationDuration={setDestinationDuration}
          destinationCoords={destinationCoords}
          setDestinationCoords={setDestinationCoords}
          setPlaceName={setPlaceName}
          setShortName={setShortName}
          //currentDistance={setCurrentDistance}
          //setCurrentDistanceDuration={setCurrentDistanceDuration}
          onSelect={(coords: any) => {
            //console.log("currentLocation", currentLocation)
            // Move Mapbox camera or request directions
          }}    
        />) : (
          <View style={{position: 'absolute', top: 50, right: 25, alignSelf: "flex-end", zIndex: 1}}>
            <Pressable onPress={handlePress}>
                <FontAwesomeIcon icon={faEllipsis} style={{color: "white"}} size={30} />
            </Pressable>
          </View>
        )
      }
      
      { (destinationDistance && currentDistanceDuration && !destinationReached) &&
        <NavigationInfo placeName={placeName} shortName={shortName} currentDistanceDuration={currentDistanceDuration}/>
      }
      {
        <ArrivalModal destinationReached={destinationReached} setDestinationReached={setDestinationReached}/>
      }
      <Mapbox.MapView
        style={styles.map}
        //styleURL={Mapbox.StyleURL.Light}
        styleURL="mapbox://styles/vicrego/cmkkzon37000901s8ev408spz"
        rotateEnabled={false}
        pitchEnabled={true}
        onPress={() => setSearchComponent(false)}
      >
      {currentLocation ? (
        <>
          <Mapbox.Camera
            zoomLevel={13}
            maxZoomLevel={16}
            minZoomLevel={13}
            centerCoordinate={citySelectedArray.centerCoordinate}
            animationMode={'flyTo'}
            pitch={0}
            animationDuration={6000}
            maxBounds={
                //ne: [ -0.2607, 51.4129],     // northeast corner (lng, lat)
                //sw: [ 0.1287, 51.5745 ]      // southwest corner (lng, lat)
              citySelectedArray.bounds
            }
          /> 
          <View>
            <Mapbox.Images
              images={
                poiImages
              }
            />
          </View>
          <Mapbox.ShapeSource 
            onPress={(e) => {
              console.log("event map: ", e.features[0].properties?.title);
              setPoiFeatures(e.features[0]);
              setPoiModalView(true)
            }} 
            id="pois" 
            shape={mapFeatures}
          >
            <Mapbox.SymbolLayer
              id="poiLayer"
              style={{
                iconImage: ["get", "icon"],
                iconAllowOverlap: true,
                iconSize: [
                  "interpolate",
                  ["linear"],
                  ["zoom"],
                  8,  ["*", ["get", "iconSize"], 0],
                  10, ["*", ["get", "iconSize"], 0],
                  13, ["*", ["get", "iconSize"], 0.2],
                  16, ["*", ["get", "iconSize"], 0.9],
                ],
              }}
            />
          </Mapbox.ShapeSource>
          <PoiModal modalVisible={poiModalView} setModalVisible={setPoiModalView} poiFeatures={poiFeatures}/>
          {(destinationCoords.latitude && destinationCoords.longitude) && 
            <Mapbox.PointAnnotation
              id="userLocation"
              coordinate={[
                destinationCoords.latitude, 
                destinationCoords.longitude
              ]}
            >
              <View style={{
                height: 30, 
                width: 30, 
                backgroundColor: '#00cccc', 
                borderRadius: 50, 
                borderColor: '#fff', 
                borderWidth: 3
                }} 
              />
            </Mapbox.PointAnnotation>
          }
          {currentDistanceDuration && 
            <Mapbox.ShapeSource id="routeSource" shape={currentDistanceDuration.remainingLine.geometry}>
              <Mapbox.LineLayer
                id="routeLine"
                style={{
                  lineColor: "#007AFF",
                  lineWidth: 9,
                  lineJoin: "round",
                  lineCap: "round",
                  
                }}
              />
            </Mapbox.ShapeSource>
          }
        </>
      ) : (
        <View>
          <Text>Waiting for location...</Text>
        </View>
      )}
      </Mapbox.MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
});



