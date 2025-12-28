import React, { useState } from 'react'
import { Button, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import PoiPager from './PoiPager';
import { Card, Image } from '@rneui/base';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
import { chapterImages } from '../api/poiContent';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const PoiModal = ({modalVisible, setModalVisible, poiFeatures}: any) => {
    const [filteredChapters, setFilteredChapters] = useState();
    const [visiblePages, setVisiblePages] = useState(false);
    console.log("poiFeatures POI Modal: ", poiFeatures)
    const handleClick = (chapter: any) => {
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
                    backgroundColor: "rgba(9, 0, 79, 1)",
                    zIndex: 2, 
                    height: "100%",
                    paddingTop: 30,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                    <View style={styles.header}>
                        <View style={{ width: 100, alignItems: "flex-start"}}>
                            {visiblePages && (
                                <FontAwesome5 onPress={() => setVisiblePages(false)} name="arrow-circle-left" size={38} color="green" />
                            )}
                        </View>
                        <Text style={{color: "white", fontSize: 20, fontFamily: "CormorantUnicase",}}>{poiFeatures?.properties.title}</Text>
                        <View style={{ width: 100, alignItems: "flex-end"}}>
                            <AntDesign onPress={() => setModalVisible(false)} name="close-circle" size={38} color="green" />
                        </View>
                    </View>
                    {!visiblePages ? (
                        <ScrollView 
                            contentContainerStyle={{
                                paddingBottom: 70, 
                                gap: 30, 
                                backgroundColor: "rgba(0,0,0,0.4)"
                            }}
                        >
                            {poiFeatures?.properties.chapters.map((chapter: any) => {
                                return (
                                    <View 
                                        key={chapter.id} 
                                        style={{ top: 20, width: 350, alignSelf: "center", backgroundColor: "rgba(10, 0, 88, 1)"}}
                                    >
                                        <Pressable 
                                            onPress={()=> handleClick(chapter.title)}  
                                        >

                                            <View 
                                                style={{
                                                    position:"relative",
                                                    alignItems:"center", 
                                                    flexDirection: "row",
                                                    width: 200
                                                }}
                                            >
                                                {/*
                                                <Text 
                                                    style={{
                                                        position: 'absolute',
                                                        color: "black", 
                                                        top: "30%",
                                                        //left: "50%",
                                                        textAlignVertical: "center", 
                                                        textAlign: "center",
                                                        fontFamily: "OldEnglish-Bold",
                                                        fontSize: 20,
                                                        zIndex: 2
                                                    }}
                                                >
                                                    {chapter.title}
                                                </Text>
                                                */}
                                                <Image
                                                    style={{ 
                                                        width:150, 
                                                        height:150,
                                                    }}
                                                    resizeMode="contain"
                                                    source={chapter.image}    
                                                />
                                                <View 
                                                    style={{
                                                        marginBottom: 0,
                                                        paddingVertical: 5,
                                                        marginRight: 2,
                                                        marginLeft: 2,
                                                    }}
                                                >
                                                    <Text 
                                                        style={{
                                                            color: "white", 
                                                            textAlignVertical: "center", 
                                                            textAlign: "center",
                                                            fontFamily: "CormorantUnicase",
                                                            fontSize: 20
                                                        }}
                                                    >
                                                        {chapter.title}
                                                    </Text>

                                                    
                                                </View>
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
                            {/*
                            <Text 
                                style={{ 
                                    fontSize: 20, 
                                    fontWeight: "bold", 
                                    alignSelf: "center", 
                                    color: "white",
                                    fontFamily: "serif"
                                }}>
                                {poiFeatures?.properties?.title}
                            </Text>
                            */}
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
        height: 60,
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PoiModal