import { width } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import { BackgroundImage } from "@rneui/base";
import type { FeatureCollection, Point } from "geojson";

export const chapterImages = {
    westminster_abbey: { 
        chapter1: require("../../assets/images/poi/london/westminster-abbey/chapter1/chapter1.png"),
        chapter2: require("../../assets/images/poi/london/westminster-abbey/chapter2/chapter2.png"),
        chapter3: require("../../assets/images/poi/london/westminster-abbey/chapter3/chapter3.png"),
        chapter4: require("../../assets/images/poi/london/westminster-abbey/chapter4/chapter4.png"),
        chapter5: require("../../assets/images/poi/london/westminster-abbey/chapter5/chapter5.png"),
        chapter6: require("../../assets/images/poi/london/westminster-abbey/chapter6/chapter6.png"),
        chapter7: require("../../assets/images/poi/london/westminster-abbey/chapter7/chapter7.png"),
        chapter8: require("../../assets/images/poi/london/westminster-abbey/chapter8/chapter8.png"),
        chapter9: require("../../assets/images/poi/london/westminster-abbey/chapter9/chapter9.png"),
        chapter10: require("../../assets/images/poi/london/westminster-abbey/chapter10/chapter10.png"),
        chapter11: require("../../assets/images/poi/london/westminster-abbey/chapter11/chapter11.png"),
        chapter12: require("../../assets/images/poi/london/westminster-abbey/chapter12/chapter12.png"),              
    },
};

export const contentImages = {
    westminster_abbey: { 
        unknown_warrior: require("../../assets/images/poi/london/westminster-abbey/chapter9/unknown-warrior.jpg"),
    },
}

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
                        image: chapterImages.westminster_abbey.chapter5,
                        contents:
                        [
                            {
                                id: "1",
                                name: "",
                                description: "For nearly a thousand years, Westminster Abbey has been the sacred stage upon which the story of the English and later British monarchy has been ritually renewed. More than a church, the Abbey is a living theatre of kingship, where stone, ceremony, and memory combine to legitimize royal power. Almost every coronation since 1066 has taken place here, making it one of the most continuous ceremonial traditions in the world."
                            },
                            {
                                id: "2",
                                name: "The Origins of the Coronation Tradition",
                                description: "The tradition of coronations at Westminster Abbey begins with William the Conqueror, crowned on Christmas Day in 1066. Although earlier Anglo-Saxon kings had been crowned elsewhere, William deliberately chose Westminster to anchor his rule to the legacy of Edward the Confessor, the saint-king whose shrine lay at the heart of the church. This choice was political as much as spiritual: by being crowned beside Edward’s tomb, William presented himself not merely as a conqueror, but as a rightful successor. From that moment on, Westminster Abbey became inseparable from the idea of legitimate monarchy."
                            },
                            {
                                id: "3",
                                name: "The Coronation Theatre: Architecture as Ceremony",
                                description: "The very layout of the Abbey serves the coronation ritual. The long nave creates a dramatic processional route, allowing the monarch to be seen by clergy, nobles, and later representatives of the people. The crossing, beneath the soaring Gothic arches, forms the symbolic center of the ceremony, where heaven and earth are believed to meet. The high altar, glowing with gold and mosaics, represents divine authority, reminding all present that the monarch rules by God’s grace. Over centuries, architectural additions subtly adapted the space to accommodate ever more elaborate rituals, seating thousands of spectators while preserving an atmosphere of sacred mystery."
                            },
                            {
                                id: "4",
                                name: "The Coronation Chair and the Stone of Destiny",
                                description: "At the heart of every coronation stands one of the Abbey’s most extraordinary objects: the Coronation Chair. Commissioned by Edward I in the late 13th century, it was built to house the Stone of Scone, also known as the Stone of Destiny, a block of sandstone taken from Scotland as a symbol of English dominance. For centuries, every crowned monarch sat above this stone, linking English kingship to ancient traditions of sovereignty. The chair itself is scarred with graffiti carved by schoolboys and visitors during the 18th and 19th centuries, a curious reminder that even the most sacred royal object was once surprisingly accessible."
                            },
                            {
                                id: "5",
                                name: "Rituals, Regalia, and Sacred Drama",
                                description: "A coronation is not a single act, but a sequence of deeply symbolic moments. The monarch is first recognized by the congregation, then anointed with holy oil in a moment so sacred it is partially concealed from view. This anointing, echoing biblical kings, is often described as the spiritual heart of the ceremony. The monarch is then invested with regalia: the orb symbolizing Christian dominion over the world, the scepter representing authority, and finally the crown itself. Each object is brought from the Abbey’s side chapels and placed upon the monarch with carefully preserved words that have changed little over centuries."
                            },
                            {
                                id: "6",
                                name: "Curious Moments and Unusual Coronations",
                                description: "Not every coronation has gone smoothly. William the Conqueror’s crowning famously ended in chaos when Norman guards, mistaking English cheers for rebellion, set fire to nearby buildings. Henry IV’s coronation was overshadowed by illness, while Edward VI’s ceremony reflected the religious upheaval of the Reformation. Queen Victoria’s coronation in 1838 was marred by multiple mistakes, including peers placing rings on the wrong fingers. These human errors, played out beneath the Abbey’s timeless arches, reveal that even the most ancient traditions are shaped by very human hands."
                            },
                            {
                                id: "7",
                                name: "The Abbey as a Witness to Changing Monarchy",
                                description: "Over time, coronations at Westminster Abbey have reflected shifts in power and society. Medieval ceremonies emphasized divine right, while modern coronations increasingly acknowledge constitutional monarchy and the role of the people. The Abbey itself has borne witness to these changes, its medieval stones hosting ceremonies broadcast worldwide, blending ancient ritual with modern technology. Yet despite these transformations, the core elements remain the same, linking today’s monarchs to a lineage stretching back almost a millennium."
                            },
                            {
                                id: "8",
                                name: "A Living Tradition",
                                description: "Today, Westminster Abbey remains the coronation church not because of law, but because of tradition so deeply rooted it feels inseparable from the nation’s identity. Each coronation adds another invisible layer to the Abbey’s history, enriching its walls with memory and meaning. To stand in the nave is to stand where kings and queens have stood for centuries, beneath the same vaults, before the same altar, participating in a ritual that continues to define the British crown and the enduring power of Westminster Abbey itself."
                            },
                        ],
                    },
                    {
                        id: "6",
                        title: "A Sanctuary of Kings, Queens, and Saints",
                        image: chapterImages.westminster_abbey.chapter6,
                        contents:
                        [
                            {
                                id: "1",
                                name: "",
                                description: "For nearly a thousand years, Westminster Abbey has served not only as a place of worship, but as Britain’s most sacred resting place. More than any other building in the country, it embodies the idea that history, faith, and monarchy are inseparable. Walking through the Abbey is like walking through the nation’s collective memory, where tombs, shrines, and chapels tell stories of power, devotion, ambition, and sanctity."
                            },
                            { 
                                id: "2",
                                name: "The Abbey as a Royal Mausoleum",
                                description: "Westminster Abbey is the burial place of over thirty monarchs, a tradition that began with Edward the Confessor in 1066. His decision to be buried here transformed the Abbey into a royal mausoleum, elevating it above all other churches in England. Almost every medieval king and queen who followed sought burial within its walls, believing proximity to Edward’s shrine would secure both prestige and spiritual favor. The positioning of royal tombs was never random. Kings were laid to rest near the high altar or along the main processional routes, ensuring their memory would be encountered during daily worship. Many tombs were once brightly painted and gilded, adorned with effigies that portrayed rulers as eternally alive, crowned and robed in stone. Though time has softened the colors, the symbolism remains powerful: even in death, monarchy was meant to endure. One curiosity often overlooked is that some monarchs buried here do not have visible tombs at all. Their remains lie beneath the floor, marked only by modest inscriptions, a reminder that status in death sometimes depended as much on changing tastes as on royal rank."
                            },
                            {
                                id: "3",
                                name: "Edward the Confessor and the Cult of a Saint-King",
                                description: "At the heart of the Abbey lies the shrine of Edward the Confessor, the building’s spiritual anchor. Completed in the 13th century, the shrine is one of the finest examples of medieval Cosmatesque decoration in England, crafted using colored stone and glass by Italian artisans. It was designed not merely as a tomb, but as a pilgrimage destination. Edward was revered as a model Christian king, known for his piety, generosity, and alleged miracles. After his canonization in 1161, pilgrims flocked to the Abbey, seeking healing and divine intervention. The shrine’s elevated position forced visitors to look upward, reinforcing Edward’s role as an intercessor between heaven and earth. A fascinating detail is that the shrine was once so sacred that only monks and monarchs were permitted to approach it closely. Even today, the area around it feels markedly quieter, as if centuries of reverence have left an invisible imprint on the space."
                            },
                            {
                                id: "4",
                                name: "Queens, Consorts, and Forgotten Lives",
                                description: "While kings dominate the popular imagination, the Abbey also preserves the stories of queens, consorts, and royal women whose influence shaped dynasties behind the scenes. Queens such as Eleanor of Castile and Elizabeth I lie here, their tombs reflecting both political power and personal legacy. Some queens were buried alongside their husbands, while others rest alone, either by choice or circumstance. Their monuments often emphasize virtues like wisdom, fertility, and faith, revealing medieval expectations placed upon royal women. Elizabeth I’s tomb, shared with her half-sister Mary I, is particularly striking. In life they were bitter rivals; in death they were united beneath a single monument, an unintentional symbol of England’s turbulent religious past. Less prominent memorials commemorate royal children who died young, reminding visitors that even kings and queens were not spared the fragility of life in earlier centuries."
                            },
                            {
                                id: "5",
                                name: "Saints, Martyrs, and the Sacred Landscape",
                                description: "Beyond royalty, Westminster Abbey is also a sanctuary for saints and martyrs whose presence reinforces its spiritual authority. Figures such as Hugh Latimer, Nicholas Ridley, and Thomas Cranmer, leaders of the English Reformation, are honored within the Abbey, despite their execution for heresy under Mary I. Their memorials reflect changing religious attitudes over time. Once condemned, they were later celebrated as champions of Protestant faith, illustrating how the Abbey itself evolved alongside England’s beliefs. This layering of memory makes the building a living record of theological conflict and reconciliation. One particularly moving area is the modest memorials to modern martyrs of the 20th century, carved above the west door. Their inclusion shows that sainthood and sacrifice are not confined to the distant past, but continue into the modern age."
                            },
                            {
                                id: "6",
                                name: "The Meaning of Burial in the Abbey",
                                description: "Being buried in Westminster Abbey has never been merely about honor; it was about belonging to a sacred national narrative. Space within the Abbey is limited, and over the centuries, burial here became a privilege granted only to those deemed essential to the story of Britain. This exclusivity led to some surprising choices and notable exclusions. Several monarchs were buried elsewhere due to political turmoil, personal preference, or changing burial fashions. Meanwhile, some individuals of non-royal birth were granted burial here because of exceptional service to the crown or church. Today, new burials are rare, but the Abbey remains a place of remembrance rather than finality. Memorial stones and plaques continue to be added, ensuring that while the space may be finite, the story it tells is still growing."
                            },
                            {
                                id: "7",
                                name: "Walking Among the Dead, Living History",
                                description: "What makes Westminster Abbey unique is not simply who is buried here, but how seamlessly the living and the dead coexist. Daily services take place amid tombs and monuments, echoing the medieval belief that worship united past, present, and future generations. As visitors walk through the nave and chapels, they tread the same stones crossed by monarchs, pilgrims, and mourners across centuries. Every tomb, every inscription, contributes to a layered narrative where kings, queens, saints, and ordinary worshippers share the same sacred ground. In this way, Westminster Abbey is less a cemetery and more a conversation across time, a sanctuary where memory, faith, and history are permanently intertwined."
                            },
                        ],
                    },
                    {
                        id: "7",
                        title: "Reformation, Resistance, and Renewal",
                        image: chapterImages.westminster_abbey.chapter7,
                        contents:
                        [
                            {
                                id: "1",
                                name: "",
                                description: "On the eve of the 16th century, Westminster Abbey was one of the richest and most powerful Benedictine monasteries in England. Its vast estates stretched across the countryside, its monks lived according to ancient rhythms of prayer, and its church was filled with shrines, candles, relics, and the steady flow of pilgrims. The shrine of St Edward the Confessor was at the heart of this spiritual economy, drawing devotion and wealth alike. Architecturally, the Abbey stood as a masterpiece of medieval Catholic England, its Gothic spaces designed for processions, chanting, and the veneration of saints. Few could have imagined how abruptly this world was about to change."
                            },
                            {
                                id: "2",
                                name: "Henry VIII and the Dissolution of the Monasteries",
                                description: "The English Reformation arrived at Westminster not as a theological debate, but as a political earthquake. When Henry VIII broke with Rome in the 1530s, monasteries became targets of royal authority. In 1539, Westminster Abbey was dissolved, its monks pensioned off, its treasures seized by the Crown. Unlike many religious houses that were stripped or demolished, the Abbey survived largely intact, but its purpose was violently altered. Shrines were dismantled, including that of St Edward, whose jewels and offerings were confiscated. Ironically, Henry VIII chose the Abbey as his burial place, lying today beneath a plain black marble slab that contrasts starkly with the riches he once removed from the church."
                            },
                            {
                                id: "3",
                                name: "From Monastery to Cathedral and Back Again",
                                description: "In a twist of history, Westminster Abbey briefly became a cathedral under Henry VIII, serving as the seat of a new bishopric. This experiment lasted barely a decade. Under Edward VI, the Abbey lost its cathedral status; under Mary I, the Benedictine monks briefly returned, restoring Catholic worship and re-establishing the shrine of St Edward. Their return was short-lived. With Elizabeth I’s accession in 1558, Protestantism was reinstated, the monks were expelled once more, and the Abbey entered its final transformation. Rather than becoming a parish church or cathedral, it was refounded as a “Royal Peculiar,” directly under the authority of the monarch rather than any bishop, a unique status it still holds today."
                            },
                            {
                                id: "4",
                                name: "Protestant Worship in a Medieval Space",
                                description: "The Reformation reshaped not only governance but also the way the Abbey was used and understood. The rich visual language of medieval Catholicism was toned down. Altars were simplified, statues removed or defaced, wall paintings whitewashed. Yet the building itself resisted complete transformation. The soaring Gothic architecture, designed to lift the eye toward heaven, remained unchanged, creating a striking contrast between Protestant restraint and medieval grandeur. This tension is still visible today, where plain wooden pews sit beneath ribbed vaults and glowing stained glass that predate the Reformation."
                            },
                            {
                                id: "5",
                                name: "The Abbey as a Place of Resistance and Memory",
                                description: "Despite official reforms, Westminster Abbey became a quiet witness to resistance, memory, and continuity. Tombs and monuments preserved England’s medieval past even as theology shifted. Elizabeth I herself was buried here, not far from her Catholic sister Mary I, their shared tomb a powerful symbol of a divided religious legacy. The Abbey also became a place where national identity increasingly overshadowed religious division. Funerals, thanksgivings, and state services transformed it into a stage for public memory rather than monastic devotion."
                            },
                            {
                                id: "6",
                                name: "Renewal Through Learning and Culture",
                                description: "One of the most unexpected outcomes of the Reformation was the Abbey’s rebirth as a center of learning and culture. The establishment of Westminster School within the former monastic precincts ensured that the site remained alive with daily activity. Over time, the Abbey evolved into a national pantheon, welcoming the tombs and memorials of poets, scientists, politicians, and reformers. This shift reflected a broader renewal: the Abbey no longer served a single religious community, but the spiritual and cultural life of the nation as a whole."
                            },
                            {
                                id: "7",
                                name: "A Building That Outlived Upheaval",
                                description: "By surviving dissolution, religious reversal, and political reform, Westminster Abbey emerged transformed but unbroken. Its stones absorbed centuries of conflict and adaptation, becoming a layered monument where medieval Catholicism, Protestant reform, and modern national identity coexist. Walking through the Abbey today, one can still sense this turbulent chapter in its history, not as a story of destruction alone, but as one of remarkable resilience and reinvention."
                            },
                        ],
                    },
                    {
                        id: "8",
                        title: "Victorian Preservation and Rediscovery",
                        image: chapterImages.westminster_abbey.chapter8,
                        contents:
                        [
                            {
                                id: "1",
                                name: "",
                                description: "By the early nineteenth century, Westminster Abbey stood as a monument of immense national importance, yet one that had suffered centuries of neglect, ad hoc repairs, and changing tastes. The Victorian era marked a turning point, when the Abbey was not only preserved but reinterpreted, rediscovered, and reshaped according to new ideas about history, heritage, and national identity."
                            },
                            {
                                id: "2",
                                name: "A Medieval Giant in Peril",
                                description: "At the dawn of the Victorian age, Westminster Abbey was structurally vulnerable and visually inconsistent. Medieval stonework had been patched with cheap materials, classical monuments obscured Gothic architecture, and pollution from London’s rapid industrial growth blackened the façade. Visitors in the early 1800s often remarked that the Abbey felt cluttered, dim, and chaotic, more like a crowded museum than a coherent sacred space. Roof leaks threatened priceless tombs, while fragile medieval carvings were eroding under soot and damp. For the first time, the Abbey faced the possibility that without serious intervention, parts of it could be lost forever."
                            },
                            {
                                id: "3",
                                name: "The Gothic Revival and a New Way of Seeing the Past",
                                description: "Victorian Britain experienced a powerful fascination with the Middle Ages, driven by the Gothic Revival movement. Architects, historians, and churchmen began to see Gothic architecture not as outdated but as morally and spiritually superior. Westminster Abbey, as one of the greatest Gothic buildings in Europe, became a focal point of this renewed admiration. This shift transformed restoration from simple repair into an almost ideological mission: to strip away later additions and recover what Victorians believed was the Abbey’s “true” medieval character. Ironically, this rediscovery of the past was deeply shaped by Victorian values rather than medieval ones."
                            },
                            {
                                id: "4",
                                name: "Sir George Gilbert Scott and the Great Restoration",
                                description: "The central figure of the Abbey’s Victorian transformation was Sir George Gilbert Scott, one of the most influential Gothic Revival architects of the age. Appointed Surveyor to the Fabric of Westminster Abbey in 1849, Scott embarked on decades of restoration work. He repaired crumbling stone, redesigned roofs, and replaced worn carvings with new ones faithful to medieval styles. Some tombs were moved, monuments rearranged, and later architectural features removed to create visual harmony. While Scott saved the Abbey from serious structural decline, modern historians note that his work also imposed a Victorian interpretation of medieval Gothic, blurring the line between preservation and reinvention."
                            },
                            {
                                id: "5",
                                name: "Rediscovering Lost Spaces and Forgotten Details",
                                description: "Victorian restoration led to remarkable rediscoveries. Medieval wall paintings, long hidden under layers of whitewash, were uncovered in areas such as the Chapter House. Ancient floor tiles, some dating back to Henry III’s rebuilding in the thirteenth century, were studied, copied, and sometimes reconstructed. The Cosmati Pavement before the High Altar, once worn and partially obscured, was recognized as one of the finest medieval mosaic floors in Europe. Victorians approached these finds with a sense of archaeological wonder, treating the Abbey not just as a church but as a historical text to be carefully read."
                            },
                            {
                                id: "6",
                                name: "The Abbey as a National Shrine",
                                description: "During the Victorian era, Westminster Abbey’s role expanded beyond religion into the realm of national memory. The nineteenth century saw a dramatic increase in monuments to writers, scientists, and public figures, reinforcing the Abbey’s identity as Britain’s symbolic heart. Poets’ Corner grew rapidly, reflecting Victorian reverence for literature and moral achievement. This period also witnessed grand state ceremonies, funerals, and memorial services that reinforced the Abbey’s connection to empire, monarchy, and national unity. Preservation was therefore not merely about saving stone and glass, but about maintaining a powerful symbol of British continuity."
                            },
                            {
                                id: "7",
                                name: "Controversy, Criticism, and Lasting Impact",
                                description: "Victorian restoration was not without controversy. Critics argued that replacing medieval stone with Victorian replicas erased authentic history. Others felt the Abbey had become too orderly, losing the layered complexity that centuries had given it. These debates laid the foundation for modern conservation principles, which favor minimal intervention and respect for all historical periods. Despite criticism, the Victorian effort ensured the Abbey’s survival into the modern age. The structure that visitors admire today—coherent, majestic, and legible—owes much to nineteenth-century preservation, even as it continues to spark discussion about how history should be protected."
                            },
                            {
                                id: "8",
                                name: "A Rediscovered Legacy",
                                description: "By the end of the Victorian era, Westminster Abbey had been transformed from a weathered medieval relic into a consciously preserved national monument. It emerged not frozen in time, but newly understood, its architectural language clarified and its historical importance reaffirmed. Victorian preservation shaped how generations would experience the Abbey, turning it into both a place of worship and a living archive of England’s past. In rediscovering Westminster Abbey, the Victorians ensured that it could continue telling its story well into the future."
                            },
                        ],
                    },
                    {
                        id: "9",
                        title: "Modern Abbey: 20th–21st Century",
                        image: chapterImages.westminster_abbey.chapter9,
                        contents:
                        [
                            {
                                id: "1",
                                name: "",
                                description: "As the 20th century dawned, Westminster Abbey stood as a monument to continuity in a rapidly changing world, but it soon faced one of the greatest threats in its history. During the First and Second World Wars, London became a primary target of aerial bombardment, and the Abbey was not spared danger. Though miraculously it avoided catastrophic destruction, several bombs fell nearby, shattering windows and damaging the roof. Abbey staff and volunteers worked tirelessly to protect priceless treasures, lowering medieval manuscripts, coronation regalia, and fragile relics into underground shelters. Sandbags were once stacked around royal tombs and statues, transforming the sacred interior into something resembling a fortified stronghold. The survival of the Abbey during wartime reinforced its symbolic role as a spiritual anchor for the nation."
                            },
                            { 
                                id: "2",
                                name: "A National Stage for Mourning and Hope",
                                description: "In the modern era, Westminster Abbey evolved into the principal setting for events that united the British people in moments of grief and renewal. Memorial services for the fallen of both World Wars established the Abbey as a place not only of royal ritual but of collective remembrance. The Tomb of the Unknown Warrior, unveiled in 1920, became one of the most powerful symbols of modern Britain. Unlike other graves, it is forbidden to walk upon it, a rare exception within the Abbey’s floor. This simple slab of black Belgian marble draws visitors into silence, reminding them that the Abbey is as much about ordinary sacrifice as royal splendor.",
                                image: contentImages.westminster_abbey.unknown_warrior,
                            },
                            { 
                                id: "3",
                                name: "Coronations, Weddings, and a Global Audience",
                                description: "The 20th and 21st centuries transformed Westminster Abbey into a global stage. Coronations continued to follow ancient traditions, but new technologies carried these ceremonies far beyond its stone walls. The coronation of Queen Elizabeth II in 1953 was the first to be televised, allowing millions worldwide to witness the ancient rites performed beneath the Gothic vaults. In later decades, royal weddings, most notably that of Prince William and Catherine Middleton in 2011, showcased the Abbey’s architectural beauty to a global audience. Viewers saw the long nave, the fan-vaulted ceilings, and the glowing stained glass, reinforcing the Abbey’s role as both a medieval masterpiece and a living institution.",
                                videoId: "pVEIPrvLO9s",
                            },
                            { 
                                id: "4",
                                name: "Preservation in a Living Monument",
                                description: "Modernity brought new challenges of conservation. Pollution, heavy visitor traffic, and the natural aging of stone required constant care. The Abbey became a laboratory for advanced preservation techniques, blending traditional craftsmanship with modern science. Stone masons continue to work using medieval methods, while laser scanning and environmental monitoring help protect fragile surfaces. One often-overlooked curiosity is that some of the stone used in recent repairs comes from the same quarries that supplied medieval builders, ensuring visual and structural continuity across centuries."
                            },
                            { 
                                id: "5",
                                name: "A Spiritual Home in a Secular Age",
                                description: "In the 21st century, Westminster Abbey balances its identity as a historic monument with its role as a functioning church. Daily services, choral music, and major religious festivals continue much as they have for nearly a thousand years. At the same time, the Abbey engages with contemporary issues, hosting services and discussions on peace, reconciliation, and global responsibility. This dual role gives the building a unique atmosphere: visitors may arrive as tourists, but they often leave with the sense that they have entered a living space shaped by prayer, history, and national identity."
                            },
                            { 
                                id: "6",
                                name: "The Abbey Today: Past and Present Intertwined",
                                description: "Today, Westminster Abbey stands as a dialogue between past and present. Medieval kings rest beneath modern memorials to poets, scientists, and civil rights figures. Ancient coronation rituals coexist with modern state occasions and interfaith services. As guides often remark, the Abbey is not frozen in time; it is a place where history continues to be written. Walking through its nave in the 21st century, one experiences nearly a millennium of continuity, resilience, and renewal, embodied in stone, ceremony, and shared memory."
                            },
                        ],
                    },
                    {
                        id: "10",
                        title: "Architecture & Art: A Visual Guide",
                        image: chapterImages.westminster_abbey.chapter10,
                        contents:
                        [
                            {
                                id: "1",
                                name: "",
                                description: "This chapter invites you to look up, down, and all around Westminster Abbey, reading the building as a vast stone manuscript written over nearly a thousand years. Every pier, window, monument, and sculpture tells a story not only of faith, but of power, artistry, and changing ideas of beauty."
                            },
                            { 
                                id: "2",
                                name: "The Ground Plan: A Church Built for Ceremony",
                                description: "Westminster Abbey follows the traditional cruciform plan of a medieval church, shaped like a cross. The long nave was designed to accommodate large processions, coronations, and public worship, while the crossing marks the symbolic heart of the building. Unlike many monastic churches, the Abbey was conceived early on as a royal stage as much as a religious space. Its exceptional length and height were deliberate, allowing kings to be seen, heard, and ritually transformed in front of the nation."
                            },
                            { 
                                id: "3",
                                name: "Gothic Ambition: Height, Light, and Stone",
                                description: "The Abbey is one of the earliest and most ambitious examples of Gothic architecture in England. Inspired by French cathedrals, its pointed arches, ribbed vaults, and flying buttresses allowed the walls to rise higher and the windows to grow larger. The stone skeleton carries the weight outward and downward, freeing space for light to flood the interior. When Henry III rebuilt the Abbey in the 13th century, this architectural style was meant to signal not only piety but sophistication and royal authority on a European scale."
                            },
                            { 
                                id: "4",
                                name: "The Nave: Vertical Drama and Human Scale",
                                description: "The nave, completed later than the eastern end, reaches an impressive height, yet its proportions feel surprisingly harmonious. Slender clustered columns draw the eye upward, while the rhythmic bays guide visitors forward. The pale stone creates a sense of calm, broken only by the color and texture of memorials added over centuries. The nave ceiling, with its delicate vaulting, demonstrates how engineering and artistry merged to create an impression of weightlessness."
                            },
                            { 
                                id: "5",
                                name: "Windows of Story and Color",
                                description: "The stained glass windows of Westminster Abbey are visual sermons in light. Medieval glass fragments survive in places, though much was lost to time, iconoclasm, and war. Later windows, especially those installed after World War II, blend modern design with traditional themes. Look closely and you will find biblical scenes, saints, poets, scientists, and even abstract patterns that reflect 20th-century artistic language. The windows are not static decorations; they change constantly with the movement of the sun."
                            },
                            { 
                                id: "6",
                                name: "The Cosmati Pavement: Geometry Beneath Your Feet",
                                description: "One of the Abbey’s most extraordinary artworks lies underfoot in front of the High Altar. The Cosmati Pavement, laid in 1268, is a dazzling mosaic of colored stone, glass, and marble imported from across Europe and the Mediterranean. Its intricate geometric patterns are not merely decorative. They reflect medieval ideas about cosmic order, time, and eternity. The pavement even contains an inscription calculating the end of the world according to medieval belief, a reminder that coronations took place literally on a vision of the universe."
                            },
                            { 
                                id: "7",
                                name: "Sculpture and Monuments: Stone Faces of Memory",
                                description: "Westminster Abbey is often called a museum of British sculpture. Tombs and memorials line the walls, ranging from austere medieval effigies to dramatic Baroque compositions. Some figures lie peacefully with hands folded in prayer, while others sit upright, caught mid-gesture. Materials vary from alabaster to marble to bronze, reflecting both changing fashions and evolving ideas about death and remembrance. Many monuments were designed by leading artists of their time, turning commemoration into high art."
                            },
                            { 
                                id: "8",
                                name: "The Lady Chapel: Ornament and Royal Symbolism",
                                description: "Henry VII’s Lady Chapel is a masterpiece of late Gothic design. Its fan-vaulted ceiling spreads like stone lace overhead, intricately carved with pendants and Tudor symbols. The walls are richly decorated with niches, once filled with statues of saints. This space was intended to overwhelm the senses, creating a vision of heavenly splendor on earth. It also served as a dynastic statement, linking the Tudor monarchy with divine approval and artistic magnificence."
                            },
                            { 
                                id: "9",
                                name: "Wood, Metal, and the Art of Craftsmanship",
                                description: "Beyond stone and glass, the Abbey is rich in craftsmanship. Choir stalls display delicate medieval carvings, including mischievous faces and animals hidden beneath the seats. Wrought iron screens separate sacred spaces while remaining visually transparent. Gilded details, embroidered textiles, and painted surfaces reveal the collaborative work of artisans whose names are often lost, but whose skill still speaks clearly centuries later."
                            },
                            { 
                                id: "10",
                                name: "Architecture as a Living Palimpsest",
                                description: "Westminster Abbey is not a single artistic vision frozen in time. It is a palimpsest, a layered work of art continuously revised. Medieval Gothic stands beside Victorian restoration, and modern additions coexist with ancient stone. Rather than erasing the past, each generation has added its own voice. Walking through the Abbey is like moving through a timeline of architectural thought, where continuity and change exist side by side. By learning to see Westminster Abbey through its architecture and art, the building becomes more than a backdrop to history. It becomes an active storyteller, using space, light, and form to communicate ideas that words alone could never fully express."
                            },
                        ],
                    },
                    {
                        id: "11",
                        title: "Legends, Curiosities & Hidden Stories",
                        image: chapterImages.westminster_abbey.chapter11,
                        contents:
                        [
                            {
                                id: "1",
                                name: "The Coronation Chair and the Stone of Destiny",
                                description: "One of the most quietly powerful objects in the Abbey is the Coronation Chair, standing worn and scarred in St George’s Chapel. Built in 1300 for Edward I, it was designed to house beneath its seat the Stone of Destiny, a sacred relic taken from Scotland. For centuries, every English and British monarch has been crowned seated above this stone, believing it conferred divine legitimacy. Over time, the chair became a target for graffiti by bored schoolboys and visitors in the 18th and 19th centuries, whose carved initials are still visible today. In 1950, the Stone of Destiny was famously stolen by Scottish nationalists on Christmas Day and later recovered, adding a modern legend to an ancient ritual."
                            },
                            { 
                                id: "2",
                                name: "The Shrine of Edward the Confessor and Royal Healing Beliefs",
                                description: "At the heart of the Abbey stands the shrine of Edward the Confessor, the medieval king regarded as a saint and miracle worker. Pilgrims once flocked here believing the shrine had healing powers, especially for illnesses that defied medieval medicine. Kings themselves participated in rituals inspired by these beliefs, such as the “royal touch,” in which monarchs claimed to cure scrofula by laying on hands. The shrine’s elevated position, surrounded by Cosmati pavement and royal tombs, reinforces its mystical importance and reflects how faith, kingship, and legend merged seamlessly in medieval England."
                            },
                            { 
                                id: "3",
                                name: "The Cosmati Pavement and the End of Time",
                                description: "The Cosmati Pavement, laid in 1268 before the high altar, is not only a masterpiece of medieval craftsmanship but also a cosmic riddle in stone. Inlaid with porphyry, glass, and precious marbles, it was designed by Italian craftsmen using ancient Roman techniques. Inscribed in Latin, the pavement contains a calculation that some interpret as predicting the end of the world 19,683 years after creation. Whether symbolic or literal, this hidden message reveals how medieval builders saw the Abbey as a reflection of divine order, where time, space, and eternity converged beneath the feet of kings."
                            },
                            { 
                                id: "4",
                                name: "Poets’ Corner and the Afterlives of Writers",
                                description: "Poets’ Corner is less a single place than an evolving story of fame, rivalry, and remembrance. Some writers buried here, like Geoffrey Chaucer, earned the honor through royal service rather than literary greatness, while others were added centuries later as reputations grew. William Shakespeare, for example, is commemorated with a monument but is not buried here, while others memorialized nearby fiercely debated their inclusion even in death. The Corner reflects changing ideas of cultural value, showing how legends are built not only through deeds, but through who chooses to remember them."
                            },
                            { 
                                id: "5",
                                name: "Ghosts, Whispering Walls, and Unseen Presences",
                                description: "Like any building layered with a thousand years of death and devotion, Westminster Abbey has accumulated ghost stories. Vergers and night guards have reported footsteps in empty cloisters, unexplained lights, and the sensation of being watched near royal tombs. One persistent tale tells of a monk seen praying in the early hours near the shrine of Edward the Confessor, vanishing when approached. Whether imagination or atmosphere, these stories endure because the Abbey’s silence, shadows, and history make it a natural home for the uncanny."
                            },
                            { 
                                id: "6",
                                name: "Forgotten Tombs and Lost Identities",
                                description: "Beneath the Abbey floor lie countless burials whose identities have been lost or confused over time. During renovations, coffins have been discovered stacked in forgotten vaults, some without names, others reburied hastily during plagues or periods of upheaval. Even today, historians debate the exact locations of certain remains, reminding visitors that the Abbey is not only a place of carefully curated memory, but also of historical amnesia. These forgotten dead form a hidden population beneath the stone, silent witnesses to centuries of change."
                            },
                            { 
                                id: "7",
                                name: "The Abbey as a Living Legend",
                                description: "Beyond individual stories, Westminster Abbey itself has become a legend, shaped by coronations, funerals, whispers, and myths. It is a place where stone remembers what people forget, where symbols outlast empires, and where history is never entirely settled. Every carving, crack, and candle flame adds another layer to its story, ensuring that even after a thousand years, the Abbey remains not just a monument, but a living narrative filled with mystery, belief, and wonder."
                            },
                        ],
                    },
                    {
                        id: "12",
                        title: "What It Means Today",
                        image: chapterImages.westminster_abbey.chapter12,
                        contents:
                        [
                            {
                                id: "1",
                                name: "",
                                description: "After nearly a thousand years of prayer, power, ceremony, conflict, and change, Westminster Abbey is no longer simply a relic of the past. It is a living building, shaped daily by worship, remembrance, tourism, and national life. To walk through the Abbey today is to encounter a place where medieval stone and modern concerns coexist, where ancient rituals still unfold under Gothic vaults, and where history is not frozen but continuously reinterpreted. This final chapter explores what Westminster Abbey represents in the present day, both as a sacred space and as a symbol of identity."
                            },
                            {
                                id: "2",
                                name: "A Working Church in a Modern World",
                                description: "Despite its fame as a historical monument, Westminster Abbey is first and foremost a working church. Unlike a cathedral, it has no bishop; it remains a “Royal Peculiar,” directly under the authority of the monarch. Daily services continue much as they have for centuries, with morning prayer, evensong, and Eucharist still sung beneath the same arches that once echoed with medieval chants. One curiosity often missed by visitors is that large areas of the Abbey are closed during services, reminding everyone that worship takes precedence over tourism. The sound of the choir, particularly the boys’ voices of the Westminster Abbey Choir, connects modern worshippers to a musical tradition stretching back to the Middle Ages, even though today’s singers rehearse with digital schedules and modern training methods."
                            },
                            {
                                id: "3",
                                name: "The Abbey and the British Monarchy Today",
                                description: "Westminster Abbey remains inseparable from the monarchy, even in a democratic and media-driven age. Coronations, royal weddings, funerals, and national services continue to take place here, carefully balancing tradition with contemporary values. The coronation of King Charles III in 2023 demonstrated this balance vividly, combining ancient rituals, such as the anointing behind a screen, with modern elements like multilingual readings and broader representation. Architectural features like the Coronation Chair are no longer just historic artifacts; they are still used, repaired, and conserved for future ceremonies. The Abbey thus functions as a bridge between centuries, ensuring continuity while subtly adapting to changing expectations of monarchy and nationhood."
                            },
                            {
                                id: "4",
                                name: "A Place of National Memory and Reflection",
                                description: "In the 20th and 21st centuries, Westminster Abbey has increasingly become a space for collective remembrance. The Tomb of the Unknown Warrior, once a symbol of grief after the First World War, now anchors national acts of silence on Remembrance Day and during times of crisis. Memorial services for figures ranging from wartime leaders to victims of terrorism highlight the Abbey’s role as a place where the nation pauses to reflect. One striking detail is how modern memorials are integrated into ancient spaces, using understated stone, simple inscriptions, or contemporary symbolism to avoid overwhelming the historic fabric. This careful dialogue between old and new allows the Abbey to remain relevant without losing its character."
                            },
                            {
                                id: "5",
                                name: "Education, Scholarship, and Public Access",
                                description: "Today, Westminster Abbey is also an educational institution. Scholars study its architecture, tombs, and archives to better understand English and European history, while school groups explore it as a tangible classroom. Guided tours, audio guides, and digital resources help visitors decode layers of meaning that would otherwise remain hidden. For example, subtle changes in stone color reveal different construction phases, while worn steps and polished tomb slabs silently testify to centuries of footsteps. The Abbey’s librarians and conservators work behind the scenes, preserving manuscripts, textiles, and monuments so that future generations can continue to learn from them."
                            },
                            {
                                id: "6",
                                name: "Preservation in the Age of Climate and Tourism",
                                description: "Modern challenges pose new questions for an ancient building. Millions of visitors each year place physical strain on floors, monuments, and air quality, while climate change affects stone erosion and moisture levels. Conservation today involves laser scanning, environmental monitoring, and carefully controlled cleaning methods, far removed from the heavy-handed restorations of the Victorian era. One modern curiosity is that some stones are left deliberately untouched, allowing conservators to study how pollution affects them over time. The Abbey thus serves as a laboratory for heritage preservation, influencing conservation practices worldwide."
                            },
                            {
                                id: "7",
                                name: "A Global Symbol Beyond Britain",
                                description: "In the present day, Westminster Abbey is no longer just a British landmark; it is a global symbol. Visitors arrive from every continent, often encountering English history through the Abbey for the first time. International services, interfaith events, and global commemorations reflect a broader understanding of the Abbey’s role in a connected world. Even popular culture, from films to televised ceremonies, projects the image of the Abbey far beyond London. Yet, despite its global reach, the building retains an intimate quality, especially in quieter chapels where a single candle or modest inscription can feel deeply personal."
                            },
                            {
                                id: "8",
                                name: "Continuity, Change, and Living Meaning",
                                description: "What Westminster Abbey means today cannot be reduced to a single function. It is simultaneously a church, a royal stage, a museum, a memorial, and a living community. Its power lies precisely in this layered identity. The Abbey teaches that history is not something left behind but something carried forward, reshaped by each generation. As visitors leave the building, stepping back into modern London, they carry with them the sense that Westminster Abbey is not only about what has been, but about how the past continues to inform the present and inspire the future."
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

