import { width } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import { BackgroundImage } from "@rneui/base";
import type { FeatureCollection, Point } from "geojson";

export const mapFeatures: FeatureCollection<Point> =
{
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            id: "london_tower",
            geometry: {
                type: "Point",
                coordinates: [ -0.0761, 51.5081 ]
            },
            properties: {
                title: "Tower of London",
                icon: "tower_of_london",
                iconSize: 0.6,                
                image: "tower.jpg",
                short: "Historic castle built by William the Conqueror.",
                //description: "Full history...",
                //audio: null,
                pages: [
                    {
                        description: "Hi"
                    },
                    {
                        description: "Hi"
                    },
                ],
            },

        }, 
        {
            type: "Feature",
            id: "buckingham",
            geometry: {
                type: "Point",
                coordinates: [-0.1419, 51.5014],
            },
            properties: {
                title: "Buckingham Palace",
                icon: "buckingham_palace",
                short: "Official residence of the monarch.",
                description: "",
                iconSize: 0.7,
                pages: [
                    {
                        description: "Hi"
                    },
                    {
                        description: "Hi"
                    },
                ]
            },
        },
        {
            type: "Feature",
            id: "westminster",
            geometry: {
                type: "Point",
                coordinates: [-0.1273, 51.4994],
            },
            properties: {
                title: "Westminster Abbey",
                icon: "westminster_abbey",
                iconSize: 0.3,
                short: "Coronation church since 1066.",
                //description: "Full history...",
                //audio: null,
                pages: [
                    { 
                        id: "intro",
                        description: "Hi"
                    },
                    { 
                        id: "history",
                        description: "Hi2"
                    },
                ],
            },
        },
        {
            type: "Feature",
            id: "houses_of_parliament",
            geometry: {
            type: "Point",
            coordinates: [-0.1246, 51.4995],
            },
            properties: {
                title: "Houses of Parliament",
                icon: "houses_of_parliament",
                iconSize: 0.5,
                short: "Seat of the UK government.",
                description: "Officially known as the Palace of Westminster.",
                pages: [
                    {
                        description: "Hi"
                    },
                    {
                        description: "Hi"
                    },
                ],
            },
        },
        {
            type: "Feature",
            id: "big_ben",
            geometry: {
            type: "Point",
            coordinates: [-0.1246, 51.5007],
            },
            properties: {
                title: "Big Ben",
                icon: "big_ben",
                short: "Iconic clock tower.",
                description: "Big Ben refers to the Great Bell, not the tower itself.",
            },
        },
        {
            type: "Feature",
            id: "st_pauls_cathedral",
            geometry: {
            type: "Point",
            coordinates: [-0.0983, 51.5138],
            },
                properties: {
                title: "St Paul’s Cathedral",
                icon: "st_pauls_cathedral",
                short: "Anglican cathedral with iconic dome.",
                description: "Designed by Sir Christopher Wren in the 17th century.",
            },
        },
        {
            type: "Feature",
            id: "trafalgar_square",
            geometry: {
            type: "Point",
            coordinates: [-0.1281, 51.5080],
            },
            properties: {
            title: "Trafalgar Square",
            icon: "trafalgar_square",
            short: "Public square commemorating naval victory.",
            description: "Features Nelson’s Column at its center.",
            },
        },
        {
            type: "Feature",
            id: "tower_bridge",
            geometry: {
            type: "Point",
            coordinates: [-0.0754, 51.5055],
            },
            properties: {
            title: "Tower Bridge",
            icon: "tower_bridge",
            short: "Victorian bascule bridge.",
            description: "Completed in 1894 across the River Thames.",
            },
        },
        {
            type: "Feature",
            id: "london_bridge",
            geometry: {
            type: "Point",
            coordinates: [-0.0877, 51.5079],
            },
            properties: {
            title: "London Bridge",
            icon: "london_bridge",
            short: "Historic crossing of the Thames.",
            description: "Several versions have stood here since Roman times.",
            },
        },
        {
            type: "Feature",
            id: "british_museum",
            geometry: {
            type: "Point",
            coordinates: [-0.1269, 51.5194],
            },
            properties: {
            title: "British Museum",
            icon: "british_museum",
            short: "World-renowned historical museum.",
            description: "Founded in 1753, housing artifacts from human history.",
            },
        },
        {
            type: "Feature",
            id: "greenwich_observatory",
            geometry: {
            type: "Point",
            coordinates: [0.0005, 51.4769],
            },
            properties: {
            title: "Royal Observatory Greenwich",
            icon: "greenwich_observatory",
            short: "Home of the Prime Meridian.",
            description: "Established in 1675 for astronomical research.",
            },
        },
        {
            type: "Feature",
            id: "westminster_cathedral",
            geometry: {
            type: "Point",
            coordinates: [-0.1407, 51.4952],
            },
            properties: {
                title: "Westminster Cathedral",
                icon: "westminster_cathedral",
                short: "Largest Catholic church in England.",
                description: "Completed in 1903 in Byzantine style.",
            },
        },
        {
            type: "Feature",
            id: "kensington_palace",
            geometry: {
            type: "Point",
            coordinates: [-0.1877, 51.5059],
            },
            properties: {
            title: "Kensington Palace",
            icon: "kensington_palace",
            short: "Royal residence and birthplace of Queen Victoria.",
            description: "Used by the royal family since the 17th century.",
            },
        },
    ]
}



export const poiImages = {
    westminster_abbey: require("../../assets/images/poi/london/westminster-abbey.png"),
    tower_of_london: require("../../assets/images/poi/london/tower-of-london.png"),
    buckingham_palace: require("../../assets/images/poi/london/buckingham-palace.png"),
    houses_of_parliament: require("../../assets/images/poi/london/houses-of-parliament.png"),
};