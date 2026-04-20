import React, { useEffect, useRef, useState } from 'react'
import { Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import * as WebBrowser from 'expo-web-browser';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ITEM_WIDTH = SCREEN_WIDTH; // //ITEM_WIDTH is the width of each content
const PARENT_PADDING = 25;

const PoiPager = ({chapter, setVisiblePages}: any) => {
    const [page, setPage] = useState(0);
    const [isDisabledBack, setIsDisabledBack] = useState(false);
    const [isDisabledNext, setIsDisabledNext] = useState(false);
    const listRef = useRef<FlatList>(null);
    

    useEffect(() => {
        if(page <= 0){
            setIsDisabledBack(true);
        } else {
            setIsDisabledBack(false);
        }
        if(page >= chapter[0].contents.length - 1 ){
            setIsDisabledNext(true);
        } else {
            setIsDisabledNext(false);
        }
    }, [page])

    const goToPage = (index: number) => {
        if(index < 0 || index >= chapter[0].contents.length) return;
        listRef.current?.scrollToIndex({
            index,
            animated: true,
        });
    };

    return (
        <View style={styles.container}>
            {chapter?.map((item: any) => {
                return (
                    <View key={item.id} style={styles.pageContainer}>
                        <Text 
                            style={styles.title}
                        >
                            {item.title}
                        </Text>
                        <FlatList
                            ref={listRef}
                            data={item.contents}
                            scrollEnabled
                            persistentScrollbar
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            getItemLayout={(data, index) => (
                                { length: SCREEN_WIDTH, offset: SCREEN_WIDTH * index, index }
                            )}
                            onMomentumScrollEnd={(e) => {
                                const index = Math.round(
                                    e.nativeEvent.contentOffset.x /
                                    SCREEN_WIDTH
                                );
                                setPage(index);
                            }}
                            renderItem={( content : any) => {
                                return (
                                    <View style={styles.itemContainer}>
                                        <ScrollView 
                                            showsVerticalScrollIndicator={true}
                                            contentContainerStyle={styles.scrollViewContent}
                                        >
                                            {(content.item.name !== "") && content.item.name !== undefined &&
                                                <Text 
                                                    style={styles.itemName}
                                                >
                                                    {content.item.name}
                                                </Text>
                                            }
                                            {content.item.description.split('\n').map((line: any, index: any) => (
                                                <Text key={index} style={styles.itemDescription}>
                                                    {line}
                                                </Text>
                                            ))}
                                            <View style={{position:"relative",alignItems:"center", backgroundColor: "red", margin: 0}}>
                                                {content.item.image &&
                                                <Image
                                                    style={styles.itemImage}
                                                    resizeMode="contain"
                                                    source={content.item.image}    
                                                />
                                                }
                                            </View>
                                            {(content.item.videoId !== "") && content.item.videoId !== undefined && 
                                                <View key={`video-${content.item.id}`} style={styles.externalLinkContainer}>
                                                    <YoutubePlayer
                                                        width={SCREEN_WIDTH - PARENT_PADDING}
                                                        height={350}
                                                        videoId={content.item.videoId}
                                                    />
                                                </View>
                                            }
                                            {(content.item.externalLink !== "") && content.item.externalLink !== undefined && 
                                                <View key={`video-${content.item.id}`}>
                                                    <Button 
                                                        title={content.item.externalLink.title}
                                                        onPress={
                                                            async () => await WebBrowser.openBrowserAsync(content.item.externalLink.link)
                                                        } 
                                                    />
                                                    <Image
                                                        style={styles.externalLinkImage}
                                                        resizeMode="contain"
                                                        source={content.item.externalLink.image}    
                                                    />
                                                </View>
                                            }
                                        </ScrollView>
                                    </View>
                                )
                            }}
                        />
                        
                        <View style={styles.paginationContainer}>
                            <View 
                                style={styles.indicatorWrapper}
                            >
                                {item.contents.map((_: any, i: any) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.indicatorDot,
                                            { backgroundColor: i === page ? "red" : "gray" }
                                        ]}
                                    />
                                ))}
                            </View>
                            <View 
                                style={styles.buttonContainer}>
                                <View 
                                    style={styles.buttonWrapper}
                                >
                                    <Button
                                        title="Back"
                                        disabled={isDisabledBack}
                                        onPress={() => goToPage(page - 1)}
                                    />
                                    <Button
                                        title="Next"
                                        disabled={isDisabledNext}
                                        onPress={() => goToPage(page + 1)}
                                    />
                                </View>
                                
                            </View>
                        </View>
                    </View>
                )      
            })}
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: 700
    },
    pageContainer:{
        justifyContent: "space-between", 
        flex: 1
    },
    title: {
        fontSize: 20, 
        color: "white", 
        textAlign: "center",
        margin: 5,
        fontFamily: "CormorantUnicase",
    },
    itemContainer: {
        backgroundColor: "#86131367", 
        width: ITEM_WIDTH,
        borderRadius: 15,
    },
    itemName: {
        fontSize: 23, 
        color: "white", 
        textAlign: "center",
    },
    itemDescription: {
        fontSize: 19, 
        color: "white", 
        textAlign: "justify", 
        lineHeight: 24
        /*, width: "100%"*/
    },
    itemImage: {
        width: 300, 
        height: 300,
    },
    externalLinkContainer: {
        flex: 1, 
        backgroundColor: "black" 
    },
    externalLinkImage: {
        width: 300, 
        height: 300,
        margin: 0,
    },
    indicatorWrapper: {
        display: "flex", 
        flexDirection: "row", 
        marginLeft: "auto", 
        marginRight: "auto"
    },
    indicatorDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,  
    },
    buttonContainer: {
        display: "flex", 
        justifyContent: "flex-end", 
        backgroundColor: "#86131367",
    },
    buttonWrapper: {
        flexDirection: "row", 
        gap: 50, 
        justifyContent: "center",
    },
    paginationContainer:{
        backgroundColor: "black"
    },
    scrollViewContent: {
        padding: PARENT_PADDING, 
        gap: 16, 
        alignItems: "center" 
    }
});

export default PoiPager