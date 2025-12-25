import { width } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import { BackgroundImage } from "@rneui/base";
import type { FeatureCollection, Point } from "geojson";

export const chapterImages = {
    westminster_abbey: { 
        chapter1: require("../../assets/images/poi/london/westminster-abbey/chapter1/chapter1.png"),
        chapter2: require("../../assets/images/poi/london/westminster-abbey/chapter2/chapter2.png"),
        chapter3: require("../../assets/images/poi/london/westminster-abbey/chapter3/chapter3.png"),
        chapter4: require("../../assets/images/poi/london/westminster-abbey/chapter4/chapter4.png")  
},
    //tower_of_london: require(""),
    //buckingham_palace: require(""),
    //houses_of_parliament: require(""),
};

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
                        description: "Hi2"
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
                //short: "",
                //description: "Full history...",
                //audio: null,
                chapters: [ 
                    {
                        id: "1",
                        title: "From Monastery to Royal Church",
                        image: chapterImages.westminster_abbey.chapter1,
                        contents:
                        [
                            {
                                id: "1",
                                //name: "From Monastery to Royal Church",
                                description: "Long before Westminster Abbey became the stage for coronations, royal weddings, and state funerals, this place was quiet, remote, and spiritual. What you see today began not as a royal monument, but as a monastery built on marshy ground, dedicated to prayer, learning, and isolation from the world. The transformation from humble religious house to England’s most important ceremonial church is a story shaped by geography, ambition, and royal power."
                            },
                            {
                                id: "2",
                                name: "The Sacred Island of Thorney",
                                description: "The story begins on Thorney Island, a marshy and isolated piece of land surrounded by branches of the River Thames. In the early Middle Ages, this was far removed from the bustle of London, making it an ideal place for prayer, contemplation, and monastic life. According to legend, the island was already considered holy before any stone church was built. One medieval tale tells of a fisherman who ferried a mysterious stranger across the river; the man later revealed himself to be Saint Peter, who consecrated the site as a sacred place. Whether fact or fiction, the legend hints at how deeply the Abbey’s sacred identity was embedded in the medieval imagination."
                            },
                            { 
                                id: "3",
                                name: "The First Monastery",
                                description: "By the 10th century, a Benedictine monastery had been formally established on Thorney Island. Benedictine monks lived according to a strict rule that balanced prayer, study, and manual labour. The early monastery was modest in scale, built primarily of wood and rough stone, and focused on community life rather than grandeur. Yet even at this stage, the site’s proximity to royal power made it significant. Kings began to see the monastery not only as a religious institution, but also as a symbol of divine legitimacy and authority."
                            },
                            { 
                                id: "4",
                                name: "Edward the Confessor's Vision",
                                description: "The true turning point came in the 11th century with King Edward the Confessor. Deeply religious and eager to assert his authority as king, Edward chose Westminster as the site for an ambitious new church. This decision was both spiritual and political. By rebuilding the monastery on an unprecedented scale, Edward created a place that linked the monarchy directly to God, while also establishing a ceremonial centre distinct from the City of London. Edward’s church, consecrated in 1065, was revolutionary for England. Inspired by Romanesque architecture he had seen in Normandy, it featured massive stone walls, rounded arches, and a towering central nave. At the time, it was one of the largest churches in Europe. Although none of Edward’s church survives intact today, its significance cannot be overstated: it laid the foundation for Westminster Abbey’s enduring role as a royal church."
                            },
                            { 
                                id: "5",
                                name: "From Monastic Church to Royal Stage",
                                description: "Edward the Confessor died just days after his church was completed, and he was buried within it, becoming the Abbey’s first royal saint. His shrine soon turned Westminster into a pilgrimage destination, further elevating its status. Only a year later, in 1066, William the Conqueror chose the Abbey as the site of his coronation. This single event permanently transformed Westminster from a monastic church into the setting for royal power. From that moment onward, coronations became inseparable from Westminster Abbey. The building was no longer only a place for monks, but a sacred theatre where kings were anointed, crowned, and bound by divine authority. The monks continued their daily prayers, but now they did so beneath the weight of national destiny unfolding around them."
                            },
                            { 
                                id: "6",
                                name: "A Place Between Heaven and Crown",
                                description: "What makes Westminster Abbey unique is this dual identity. It was never a cathedral governed by a bishop, nor a palace chapel closed to the public. Instead, it became a “royal peculiar,” directly under the authority of the monarch. This special status allowed it to evolve differently from other churches, shaped as much by politics as by faith. By the end of the medieval period, Westminster Abbey stood as a bridge between the spiritual and the secular, between heaven and crown. Its stones had witnessed quiet monastic devotion, royal ambition, and the birth of a tradition that would define the English monarchy for nearly a thousand years."
                            },
                        ],
                    },
                    {
                        id: "2",
                        title: "Edward the Confessor: The Beginning of a Legacy",
                        image: chapterImages.westminster_abbey.chapter2,
                        contents:
                        [
                            {
                                id: "1",
                                //name: "A King of Faith and Vision",
                                description: "Edward the Confessor was not a conquering warrior king but a deeply pious ruler whose vision reshaped both English monarchy and sacred architecture. Raised in exile in Normandy, Edward absorbed continental ideas of kingship and church-building that were far more monumental than anything England had yet seen. When he became king in 1042, he chose Westminster, then a quiet riverside site west of London, as the place where his spiritual ideals and royal authority would merge. His decision to rebuild the monastery there into a grand stone church was unprecedented for an English king and marked a clear statement: this would be a royal church, closely bound to the crown itself."
                            },
                            { 
                                id: "2",
                                name: "The First Romanesque Church in England",
                                description: "Edward’s Westminster Abbey, consecrated in December 1065 just days before his death, was the first great Romanesque church built in England. At the time, most English churches were still relatively modest, often wooden or built in simple stone forms. Edward’s new abbey introduced massive stone walls, rounded arches, towering proportions, and a cruciform layout inspired by the great churches of Normandy. Contemporary observers would have been astonished by its scale. Though none of Edward’s original church survives above ground today, archaeological traces beneath the present abbey reveal thick foundations and apses that testify to its imposing design."
                            },
                            { 
                                id: "3",
                                name: "A Royal Statement in Stone",
                                description: "This building was more than an act of devotion; it was a political declaration. By attaching himself so closely to Westminster, Edward established it as the symbolic heart of English kingship. The abbey stood near the royal palace at Westminster, allowing the king to move easily between secular power and sacred ritual. For the first time in England, a church was deliberately conceived as both a spiritual center and a stage for monarchy. This decision would shape English history for nearly a thousand years, making Westminster the permanent site of coronations."
                            },
                            { 
                                id: "4",
                                name: "The King Who Became a Saint",
                                description: "Edward’s reputation for holiness grew rapidly after his death in January 1066. He was remembered as gentle, charitable, and devoted to prayer, qualities that stood in contrast to the turbulent politics surrounding the Norman Conquest that followed only months later. In 1161, he was officially canonized, and his shrine became one of the most important pilgrimage destinations in medieval England. Pilgrims believed Edward could heal the sick, particularly those suffering from scrofula, a disease later known as “the king’s evil,” reinforcing the idea that English kings ruled by divine favor."
                            },
                            { 
                                id: "5",
                                name: "Edward’s Shrine and Lasting Presence",
                                description: "Although Edward’s original abbey was later rebuilt in Gothic style by Henry III, Edward the Confessor remained its spiritual anchor. Henry deliberately placed Edward’s magnificent shrine at the very heart of the new church, directly behind the high altar. Even today, the shrine marks the symbolic center of Westminster Abbey. During coronations, monarchs still pause near Edward’s resting place, maintaining an unbroken link between the modern crown and the saint-king who first imagined Westminster as the sacred home of English royalty."
                            },
                            { 
                                id: "6",
                                name: "A Legacy That Shaped the Nation",
                                description: "Edward’s greatest legacy is not only architectural but institutional. By founding Westminster Abbey as a royal church, he created a setting where faith, monarchy, and national identity became inseparable. His vision survived conquest, dynastic change, religious upheaval, and architectural transformation. Standing in the abbey today, one is not simply inside a building but within an idea born in the mind of a pious 11th-century king whose influence still defines the rituals and symbols of Britain’s monarchy."
                            }
                        ],
                    },
                    {
                        id: "3",
                        title: "Norman Power and Monumental Reconstruction",
                        image: chapterImages.westminster_abbey.chapter3,
                        contents:
                        [
                            {
                                id: "1",
                                //name: "From Anglo-Saxon Roots to Norman Ambition",
                                description: "After the Norman Conquest of 1066, Westminster Abbey entered a new phase that reflected the dramatic political and cultural shift taking place in England. William the Conqueror deliberately chose the Abbey as the site of his coronation on Christmas Day 1066, a symbolic act that bound Norman rule to the sacred authority already established there. From this moment onward, the Abbey was no longer simply an English royal church but the stage upon which Norman power presented itself as legitimate, divinely sanctioned, and permanent."
                            },
                            {
                                id: "2",
                                name: "From Anglo-Saxon Roots to Norman Ambition",
                                description: "The Norman Conquest of 1066 changed England forever, and Westminster was no exception. When William the Conqueror seized the throne, he understood the symbolic power of Westminster Abbey immediately. It was here that he chose to be crowned on Christmas Day 1066, deliberately linking his rule to that of Edward the Confessor. Yet the Norman rulers were not content merely to inherit an Anglo-Saxon legacy; they sought to reshape it. Architecture became a tool of authority. Massive stone buildings, inspired by continental Romanesque design, proclaimed strength, order, and divine approval. The earlier church of Edward, though impressive for its time, was gradually overshadowed by Norman ambitions to monumentalize Westminster as a royal and political center."
                            },
                            { 
                                id: "3",
                                name: "Coronations as Political Theatre",
                                description: "Under the Normans, Westminster Abbey began to acquire the heavy, muscular character typical of Romanesque architecture. Thick walls, rounded arches, and enormous pillars replaced lighter Anglo-Saxon forms. These were not merely aesthetic choices; they reflected a new way of building that emphasized permanence and dominance. Stone was brought from distant quarries, requiring complex logistics involving river transport along the Thames. The scale of construction itself was a statement: this was a church meant to last forever, mirroring the Normans’ claim to eternal rule. Walking through the Abbey today, the sense of solidity in the lower levels echoes this Norman desire for architectural authority.",
                            },
                            { 
                                id: "4",
                                name: "Stone, Labor, and Logistics",
                                description: "Rebuilding on a monumental scale required immense resources. Stone was transported along rivers and newly improved roads, while skilled masons—many trained in Normandy—were brought to England. These craftsmen introduced new construction techniques, including precise stone cutting and complex vaulting systems. The Abbey site itself became a hive of activity, filled with scaffolding, cranes powered by human treadwheels, and the constant sound of chisels. Even the Thames played a crucial role, serving as a highway for materials arriving directly near the Abbey precinct."
                            },
                            { 
                                id: "5",
                                name: "The Abbey as a Norman Symbol",
                                description: "While kings and bishops planned grand visions, the daily reality of reconstruction rested on the shoulders of monks, masons, carpenters, and laborers. The Abbey functioned as both a spiritual community and a bustling construction site. Monks supervised work, managed finances, and ensured religious life continued amid noise, dust, and scaffolding. Curious details survive in records describing disputes over wages, shortages of stone, and delays caused by flooding from the Thames. These glimpses remind us that the Abbey’s grandeur emerged not only from royal ambition, but from decades of human effort and improvisation.",
                            },
                            { 
                                id: "6",
                                name: "Seeds of Future Transformation",
                                description: "Although the most dramatic Gothic rebuilding would come later, the Norman period laid essential foundations. The emphasis on scale, permanence, and royal symbolism shaped every later decision made at Westminster. Even when walls were replaced and styles changed, the Norman vision of the Abbey as a monumental expression of power endured. Walking through the Abbey today, the echoes of that ambition can still be felt in its proportions, its ceremonial function, and its enduring role at the heart of British monarchy."
                            },
                        ],
                    },
                    {
                        id: "4",
                        title: "The Gothic Transformation",
                        image: chapterImages.westminster_abbey.chapter4,
                        contents:
                        [
                            {
                                id: "1",
                                name: "",
                                description: "The story of Westminster Abbey takes a decisive turn in the mid-13th century, when the building that visitors recognise today truly begins to emerge. This chapter explores how the Abbey was radically reshaped under royal ambition, continental influence, and a new architectural language that aimed to lift both stone and spirit toward heaven."
                            },
                            { 
                                id: "2",
                                name: "Henry III and a King’s Vision",
                                description: "In 1245, King Henry III made a bold decision that would forever change Westminster Abbey. Deeply devoted to Edward the Confessor, whom he revered almost as a spiritual ancestor, Henry resolved to demolish most of the Norman church and rebuild it in the latest Gothic style. This was not a practical renovation but an ideological statement. Henry wanted a shrine worthy of England’s royal saint and a setting that rivalled the great churches of France. His vision was deeply personal: the new Abbey would glorify God, honour Edward, and ultimately serve as Henry’s own burial place. Unlike many medieval patrons, Henry involved himself closely in artistic choices, colours, materials, and symbolism, leaving a surprisingly individual stamp on the building."
                            },
                            { 
                                id: "3",
                                name: "Importing Gothic Grandeur from France",
                                description: "The Gothic style chosen for Westminster Abbey was revolutionary for England. Inspired by the great cathedrals of Reims, Amiens, and Chartres, the Abbey adopted pointed arches, ribbed vaults, soaring columns, and large traceried windows designed to flood the interior with light. This was a dramatic shift from the heavy, fortress-like Norman architecture that preceded it. Westminster became one of the first English buildings to embrace the so-called “French Gothic” style so fully. The result was a church that felt taller, lighter, and more ethereal than anything previously built in the country. For medieval worshippers, this verticality was not merely aesthetic; it was theological, guiding the eye and the soul upward toward God."
                            },
                            { 
                                id: "4",
                                name: "The Shrine of Edward the Confessor",
                                description: "At the heart of the Gothic rebuilding lay the shrine of Edward the Confessor, completed in 1269. Positioned behind the high altar, the shrine was designed as the spiritual and symbolic centre of the Abbey. Constructed from richly coloured Purbeck marble and adorned with mosaic work influenced by Italian craftsmen, it was unlike anything else in England. Pilgrims would have approached it with awe, aware that they were standing before the tomb of a saint-king whose legacy legitimised centuries of monarchy. Even today, the shrine remains elevated above the surrounding floor, a subtle reminder that Edward was seen as both ruler and holy intercessor."
                            },
                            { 
                                id: "5",
                                name: "Innovation in Structure and Craftsmanship",
                                description: "The Gothic transformation demanded extraordinary engineering skill. Builders experimented with slender stone columns bundled together like reeds, allowing the weight of the roof to be distributed more efficiently. Flying buttresses, though less visible than in some continental cathedrals, played a crucial role in supporting the walls and windows. The Abbey’s masons marked their stones with personal symbols, traces of which can still be found, silent signatures of medieval craftsmen. One curious detail often overlooked is the unusual height of the nave compared to its width, creating a sense of upward movement that feels almost musical in rhythm as one walks through the space."
                            },
                            { 
                                id: "6",
                                name: "Colour, Light, and Lost Splendour",
                                description: "Modern visitors often imagine medieval churches as grey and austere, but Westminster Abbey during its Gothic transformation was rich with colour. Walls were painted, statues were vividly decorated, and stained glass windows glowed with biblical scenes and royal imagery. Gold leaf shimmered in candlelight, especially around the high altar and shrine. Much of this colour was lost during later centuries, particularly during the Reformation, but traces survive in hidden corners and written records. Understanding this lost vibrancy helps reimagine the Abbey not as a solemn monument, but as a dazzling, sensory experience meant to inspire wonder."
                            },
                            { 
                                id: "7",
                                name: "An Unfinished Masterpiece",
                                description: "Despite Henry III’s ambition, the Gothic rebuilding of Westminster Abbey was never fully completed according to the original plan. Financial strain, political challenges, and Henry’s death in 1272 slowed progress. Later kings continued the work, but often adapted it to new tastes and priorities. This is why the Abbey feels both unified and layered, Gothic at its core yet marked by centuries of additions. The transformation begun in the 13th century set the architectural tone for everything that followed, ensuring that Westminster Abbey would stand not just as a church, but as a living chronicle carved in stone. Through its Gothic transformation, Westminster Abbey became a statement of faith, power, and artistic ambition. It was no longer simply a royal church, but a masterpiece that aligned England with the great cultural movements of medieval Europe, a place where architecture itself became an act of devotion."
                            },
                        ],
                    },
                    {
                        id: "5",
                        title: "A Crowned Tradition: Coronations at the Abbey",
                        contents:
                        [
                            {
                                id: "intro",
                                description: "Hi from intro 2, page 1"
                            },
                            { 
                                id: "history",
                                description: "Hi from intro 2, page 2"
                            },
                        ],
                    },
                    {
                        id: "6",
                        title: "A Sanctuary of Kings, Queens, and Saints",
                        contents:
                        [
                            {
                                id: "intro",
                                description: "Hi from intro 2, page 1"
                            },
                            { 
                                id: "history",
                                description: "Hi from intro 2, page 2"
                            },
                        ],
                    },
                    {
                        id: "7",
                        title: "Reformation, Resistance, and Renewal",
                        contents:
                        [
                            {
                                id: "intro",
                                description: "Hi from intro 2, page 1"
                            },
                            { 
                                id: "history",
                                description: "Hi from intro 2, page 2"
                            },
                        ],
                    },
                    {
                        id: "8",
                        title: "Victorian Preservation and Rediscovery",
                        contents:
                        [
                            {
                                id: "intro",
                                description: "Hi from intro 2, page 1"
                            },
                            { 
                                id: "history",
                                description: "Hi from intro 2, page 2"
                            },
                        ],
                    },
                    {
                        id: "9",
                        title: "Modern Abbey: 20th–21st Century",
                        contents:
                        [
                            {
                                id: "intro",
                                description: "Hi from intro 2, page 1"
                            },
                            { 
                                id: "history",
                                description: "Hi from intro 2, page 2"
                            },
                        ],
                    },
                    {
                        id: "10",
                        title: "Architecture & Art: A Visual Guide",
                        contents:
                        [
                            {
                                id: "intro",
                                description: "Hi from intro 2, page 1"
                            },
                            { 
                                id: "history",
                                description: "Hi from intro 2, page 2"
                            },
                        ],
                    },
                    {
                        id: "11",
                        title: "Legends, Curiosities & Hidden Stories",
                        contents:
                        [
                            {
                                id: "intro",
                                description: "Hi from intro 2, page 1"
                            },
                            { 
                                id: "history",
                                description: "Hi from intro 2, page 2"
                            },
                        ],
                    },
                    {
                        id: "12",
                        title: "What It Means Today",
                        contents:
                        [
                            {
                                id: "intro",
                                description: "Hi from intro 2, page 1"
                            },
                            { 
                                id: "history",
                                description: "Hi from intro 2, page 2"
                            },
                        ],
                    }
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

