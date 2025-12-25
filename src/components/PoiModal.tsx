import React, { useState } from 'react'
import { Button, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import PoiPager from './PoiPager';
import { Card, Image } from '@rneui/base';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
import { chapterImages } from '../api/poiContent';


const PoiModal = ({modalVisible, setModalVisible, poiFeatures}: any) => {
    const [filteredChapters, setFilteredChapters] = useState();
    const [visiblePages, setVisiblePages] = useState(false);
  
    console.log("poiFeatures: ", poiFeatures?.properties.chapters)
    console.log("poi tile: ", poiFeatures?.properties?.title)
    const handleClick = (chapter: any) => {
        console.log("chapter: ", chapter);
        console.log("chapters: ", poiFeatures?.properties.chapters[0].title);
        let filteredChapters = poiFeatures?.properties.chapters.filter((data: any) => data.title === chapter);
        setFilteredChapters(filteredChapters);
        setVisiblePages(true);
    }
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
                    backgroundColor: "purple",
                    zIndex: 2, 
                    height: "100%",
                    paddingTop: 30,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                    <View style={styles.header}>
                        <View style={{ width: 100, // reserve space
                            alignItems: "flex-start"}}>
                            {visiblePages && (
                                <Button
                                    title="CLOSE!"
                                    onPress={() => setVisiblePages(false)}
                                />
                            )}
                        </View>

                        <View style={{ width: 100, alignItems: "flex-end"}}>
                            <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={{ color: "blue" }}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                    {!visiblePages ? (
                        <ScrollView 
                            contentContainerStyle={{
                                paddingBottom: 20, 
                                gap: 22, 
                            }}
                        >
                            {poiFeatures?.properties.chapters.map((chapter: any) => {
                                return (
                                    <View 
                                        key={chapter.id} 
                                        style={{ top: 20, width: 300, alignSelf: "center"}}
                                    >
                                        <Pressable 
                                            onPress={()=> handleClick(chapter.title)} style={{ backgroundColor: "blue" }} 
                                        >
                                            <Card.Title 
                                                style={{
                                                    color: "white", 
                                                    textAlignVertical: "center", 
                                                    marginBottom: 0,
                                                    paddingVertical: 5,
                                                    //margin: 0,
                                                    backgroundColor: "blue",
                                                }}
                                            >
                                                {chapter.title}
                                            </Card.Title>
                                            
                                            <View style={{position:"relative",alignItems:"center"}}>
                                                <Image
                                                    style={{ 
                                                        width:300, 
                                                        height:300,
                                                    }}
                                                    resizeMode="contain"
                                                    source={chapter.image}    
                                                />
                                            </View>
                                        </Pressable>  
                                    </View>
                                )}
                            )}
                        </ScrollView>
                        ) : (
                        <View style={{
                            justifyContent: "center", 
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", color: "white"}}>
                                {poiFeatures?.properties?.title}
                            </Text>
                            <Text style={{alignSelf: "center", fontSize: 18, color: "white"}}>
                                {poiFeatures?.properties?.short}
                            </Text>

                            <View >
                                <PoiPager chapters={filteredChapters} setVisiblePages={setVisiblePages} />
                            </View>

                            
                        </View>
                    )}
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
    header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PoiModal