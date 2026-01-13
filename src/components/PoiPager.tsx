import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Alert, Button, Dimensions, FlatList, Image, Linking, ScrollView, Text, View } from 'react-native'
import WebView from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import * as WebBrowser from 'expo-web-browser';

const PoiPager = ({chapter, setVisiblePages}: any) => {
    const listRef = useRef<FlatList>(null);
    const [page, setPage] = useState(0);
    const PARENT_PADDING = 25;
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    const ITEM_WIDTH = SCREEN_WIDTH; // //ITEM_WIDTH is the width of each content
    const [isDisabledBack, setIsDisabledBack] = useState(false);
    const [isDisabledNext, setIsDisabledNext] = useState(false);
    const handleOpenBrowser = async () => {
        await WebBrowser.openBrowserAsync('https://www.virtualststephens.org.uk/sites/virtualststephens.org.uk/files/panoramas/1360s/tour.html');
    };
    
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

    return (
        <View>
            <View style={{height: 700}}>
                {chapter?.map((item: any) => {
                    const goToPage = (index: number) => {
                        if(index < 0 || index >= item.contents.length) return;
                        listRef.current?.scrollToIndex({
                            index,
                            animated: true,
                        });
                    };
                    console.log("item.id: ", item.id)
                    return (
                        <View key={item.id} style={{justifyContent: "space-between", flex: 1}}>
                            <Text 
                                style={{ 
                                    fontSize: 20, 
                                    color: "white", 
                                    textAlign: "center",
                                    margin: 5,
                                    fontFamily: "CormorantUnicase",
                                }}
                            >
                                {item.title}
                            </Text>
                            <FlatList
                                ref={listRef}
                                data={item.contents}
                                scrollEnabled
                                persistentScrollbar
                                style={{backgroundColor: "black", overflowY: "scroll"}}
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
                                        <View style={{ width: ITEM_WIDTH }}>
                                            <ScrollView 
                                                // This allows the vertical content to scroll within the page
                                                showsVerticalScrollIndicator={true}
                                                contentContainerStyle={{ 
                                                    padding: PARENT_PADDING, 
                                                    gap: 16, 
                                                    alignItems: "center" 
                                                }}
                                            >
                                                {(content.item.name !== "") && content.item.name !== undefined &&
                                                    <Text 
                                                        style={{ 
                                                            fontSize: 23, 
                                                            color: "white", 
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {content.item.name}
                                                    </Text>
                                                }
                                                {content.item.description.split('\n').map((line: any, index: any) => (
                                                    <Text style={{ fontSize: 19, color: "white", textAlign: "justify"/*, width: "100%"*/ }}>
                                                        {line}
                                                    </Text>
                                                ))}
                                                <View style={{position:"relative",alignItems:"center", backgroundColor: "red", margin: 0}}>
                                                    {content.item.image &&
                                                    <Image
                                                        style={{ 
                                                            width: 300, 
                                                            height: 300,
                                                        }}
                                                        resizeMode="contain"
                                                        source={content.item.image}    
                                                    />
                                                    }
                                                </View>
                                                {(content.item.videoId !== "") && content.item.videoId !== undefined && 
                                                    <View key={`video-${content.item.id}`} style={{ flex: 1, backgroundColor: "black" }}>
                                                        <YoutubePlayer
                                                            width={SCREEN_WIDTH - PARENT_PADDING}
                                                            height={350}
                                                            //play={playing}
                                                            videoId={content.item.videoId}
                                                            //onChangeState={onStateChange}
                                                        />
                                                        {/*<Button title={playing ? "pause" : "play"} onPress={togglePlaying} />*/}
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
                                                            style={{ 
                                                                width: 300, 
                                                                height: 300,
                                                                margin: 0,
                                                            }}
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
                            
                            <View style={{backgroundColor: "black"}}>
                                <View 
                                    style={{
                                        display: "flex", 
                                        flexDirection: "row", 
                                        marginLeft: "auto", 
                                        marginRight: "auto"
                                    }}
                                >
                                    {item.contents.map((_: any, i: any) => (
                                        <View
                                            key={i}
                                            style={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: 4,
                                                margin: 4,
                                                backgroundColor: i === page ? "red" : "gray",
                                            }}
                                        />
                                    ))}
                                </View>
                                <View 
                                    style={{
                                        display: "flex", 
                                        justifyContent: "flex-end", 
                                        backgroundColor: "blue",
                                        //height: "100%"
                                    }}>
                                    <View 
                                        style={{
                                            flexDirection: "row", 
                                            top: 0, 
                                            gap: 50, 
                                            justifyContent: "center",
                                        }}>
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
        </View>
    )
}

export default PoiPager
