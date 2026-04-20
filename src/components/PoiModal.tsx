import React, { useState } from 'react'
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import PoiPager from './PoiPager';
import { Image } from '@rneui/base';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { chapterImages } from '../api/poiContent';

const PoiModal = ({modalVisible, setModalVisible, poiFeatures}: any) => {
    const [filteredChapters, setFilteredChapters] = useState();
    const [visiblePages, setVisiblePages] = useState(false);
    const chapters = poiFeatures?.properties.chapters;
    
    const handleClick = (chapter: any) => {
        let filteredChapters = chapters.filter((data: any) => data.title === chapter);
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
            <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.4)" }}>
                <View style={{
                    backgroundColor: "rgba(9, 0, 79, 1)",
                    zIndex: 2, 
                    height: "100%",
                    paddingTop: 30,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                    <View style={styles.header}>
                        <View style={{ width: 50, alignItems: "flex-start"}}>
                            {visiblePages && (
                                <FontAwesome5 onPress={() => setVisiblePages(false)} name="arrow-circle-left" size={38} color="green" />
                            )}
                        </View>
                        <Text style={{color: "white", fontSize: 28, fontFamily: "CormorantUnicase"}}>{poiFeatures?.properties.title}</Text>
                        <View style={{ width: 50, alignItems: "flex-end"}}>
                            <AntDesign onPress={() => setModalVisible(false)} name="close-circle" size={38} color="green" />     
                        </View>
                    </View>
                    {!visiblePages ? (
                        <ScrollView 
                            contentContainerStyle={styles.scrollViewContainer}
                        >
                            {poiFeatures?.properties.chapters.map((chapter: any) => {
                                return (
                                    <Pressable 
                                        key={chapter.id}
                                        style={styles.chapterContainer}
                                        onPress={()=> handleClick(chapter.title)}  
                                    >

                                        <View 
                                            style={styles.chapterContent}
                                        >
                                            <Image
                                                style={styles.chapterImage}
                                                resizeMode="contain"
                                                source={chapter.image}    
                                            />
                                                <Text 
                                                    style={styles.chapterTitle}
                                                >
                                                    {chapter.title}
                                                </Text>                                                    
                                        </View>
                                    </Pressable>  
                                
                                )}
                            )}
                        </ScrollView>
                        ) : (
                            <PoiPager chapter={filteredChapters} setVisiblePages={setVisiblePages} />
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
    scrollViewContainer: {
        paddingBottom: 70, 
        gap: 30, 
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    chapterContainer:{
        top: 20, 
        width: 350, 
        alignSelf: "center", 
        //backgroundColor: "rgba(10, 0, 88, 1)",
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: "#242446",
        overflow: "hidden",
        elevation: 5, // Android shadow
        shadowOpacity: 0.3, // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    chapterContent: {
        position:"relative",
        alignItems:"center", 
        flexDirection: "row",
        width: 200
    },
    chapterImage: {
        width:150, 
        height:150,
    },
    chapterTitle: {
        color: "white", 
        textAlignVertical: "center", 
        textAlign: "center",
        fontFamily: "CormorantUnicase",
        fontSize: 20,
    },
    
});

export default PoiModal