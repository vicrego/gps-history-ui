import { center } from '@turf/turf';
import React, { useRef, useState } from 'react'
import { Button, Dimensions, FlatList, Text, View } from 'react-native'


const PoiPager = ({pages}: any) => {
    const listRef = useRef<FlatList>(null);
    const [page, setPage] = useState(0);

    const goToPage = (index: number) => {
        if(index < 0 || index >= pages.properties?.pages.length) return;
        listRef.current?.scrollToIndex({
            index,
            animated: true,
        });
    };

    
    return (
        <View>
        <FlatList
            ref={listRef}
            data={pages.properties?.pages}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            onMomentumScrollEnd={(e) => {
                const index = Math.round(
                    e.nativeEvent.contentOffset.x /
                    Dimensions.get("window").width
                );
                console.log("index", index)
                setPage(index);
            }}
            renderItem={({ item }) => (
                <View style={{ width: Dimensions.get("window").width}}>
                    <Text style={{ fontSize: 20 }}>{item.id}</Text>
                    <Text style={{ fontSize: 20 }}>{item.description}</Text>
                </View>
            )}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {pages.properties?.pages.map((_: any, i: any) => (
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
        <View style={{flexDirection: "row", top: 640, gap: 50, justifyContent: "center"}}>
            <Button
                title="Back"
                onPress={() => goToPage(page - 1)}
            />
            <Button
                title="Next"
                onPress={() => goToPage(page + 1)}
            />
        </View>
    </View>
  )
}

export default PoiPager
