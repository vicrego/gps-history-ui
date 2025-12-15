import React from 'react'
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import POIPager from './PoiPager';



const PoiModal = ({modalVisible, setModalVisible, poiFeatures}: any) => {
  
    console.log("poiFeatures", poiFeatures?.properties?.title)
    return (
        <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                backgroundColor: "rgba(0,0,0,0.4)"
            }}>
                <View style={{
                    height: "100%",
                    backgroundColor: "white",
                    padding: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {poiFeatures?.properties?.title}
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                        {poiFeatures?.properties?.short}
                    </Text>
                    <View style={{ height: "70%", width: "100%" }}>
                        <POIPager pages={poiFeatures} />
                    </View>
                    <Pressable
                        style={{ marginTop: 20 }}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={{ color: "blue" }}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PoiModal