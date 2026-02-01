import Mapbox from '@rnmapbox/maps';
import 'expo-dev-client';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { mapFeatures, poiImages } from '../api/poiContent';
import PoiModal from '../components/PoiModal';

let publicToken = "pk.eyJ1IjoidmljcmVnbyIsImEiOiJjbWc2OWQ2cjkwYmR3MmxzZHZ4aWpzcDM2In0.7_PNb8rw61ISZt1Q7ysIuw";
Mapbox.setAccessToken(publicToken);


const Map = ({citySelectedArray}: any) => {
  //Index manages every state that will be displayed or used by shared component
  const [poiFeatures, setPoiFeatures] = useState<any>();
  const [poiModalView, setPoiModalView] = useState(false);
  const [destinationCoords, setDestinationCoords] = useState(citySelectedArray.centerCoordinate);
  
  return (
    <View style={styles.container}>
      <SearchComponent
        setDestinationCoords={setDestinationCoords}
        publicToken={publicToken}
      />
      <Mapbox.MapView
        style={styles.map}
        styleURL="mapbox://styles/vicrego/cmkkzon37000901s8ev408spz"
        rotateEnabled={false}
        pitchEnabled={true}
      >
        <Mapbox.Camera
          zoomLevel={13}
          maxZoomLevel={14.5}
          minZoomLevel={13}
          centerCoordinate={destinationCoords}
          animationMode={'flyTo'}
          pitch={0}
          animationDuration={2000}
          maxBounds={citySelectedArray.bounds}
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



