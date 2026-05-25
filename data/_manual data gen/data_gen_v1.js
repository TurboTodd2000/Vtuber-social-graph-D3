/*
SHORTHAND NOTATION FOR VIZ.JS GRAPHS
-----------------------------------------------
*/

//this as the prototype I used to get the graph up and running to start, I then switched to having a more general google sheet based backend to make editing the graph data simplier
//leaving this in as it couild be a useful example for manually building data sets


/*
CONSTANTS
-----------------------------------------------
*/

//group node,shape, size, label and edge colors

//interest node, shape, size, label and edge colors

//talent shape?



/*
VARIABLES
-----------------------------------------------
*/

//init node and edge arrays


//variables for node styles, this is for properties for nodes by type


//FOR GROUP NODES

//size and shape
var typeGroupNodeShape = "dot";
var typeGroupNodeSize = 30;

//label size
var typeGroupNodeLabelSize = 25;


//subgroups node size
var typeSubgroupSize = 17;


//for interests



//edge styles



//output array containers
var outputNodeAcc = [];
var outputEdgeAcc = [];





/*
DATA
-----------------------------------------------
*/



//arrays for node/edge gen

//increment 0-100
const interestNode = [

	//INTEREST NODE
	//index, type, GROUP, label, size var, shape var, physics
	
	[ 0, "interests", "INTERESTS", "Yapping", [9034, 9028, 1000, 1001, 1003, 9042, 9024, 9038, 1012, 9039, 9019, 9032, 9003, 7003, 1002, 11001, 5001, 6004, 9004, 9016, 5005, 1008, 1010, 9009, 9029, 1011, 10007, 10003, 10002, 9036, 9040, 6001, 1015, 9052, 9053  ], false ],

	[ 1, "interests", "INTERESTS", "Gaming", [10005, 10006, 10007, 10008, 10001, 10003, 10004, 9004, 1001, 9033, 9018, 9009, 1008, 1010, 1013, 1003, 9017, 9016, 7002, 9043, 1000, 1009, 1011, 1012, 1014, 1007, 9025, 9021, 9024, 9020, 9019, 9002, 9006, 9007, 9013, 3001, 3002, 3003, 3004, 2001, 2002, 4001, 4002, 4003, 4004, 6003, 1002, 9031, 7004, 9022, 13001, 9045, 6006, 9051, 6002, 9030, 9050, 9044, 9049, 9035, 9027, 11003, 11001, 9036, 1015, 9034, 9052, 12001, 9023, 10090 ], false ],

	[ 2, "interests", "INTERESTS", "Music", [1000, 1002, 1005, 1006, 1007, 1009, 1011, 1014, 1015, 2001, 2002, 2003, 3001, 3002, 3003, 3004, 4001, 4002, 4003, 4004, 6001, 6002, 6003, 6004, 9001, 9002, 9003, 9005, 9006, 9007, 9008, 9010, 9011, 9013, 9014, 9015, 9019, 9026, 9031, 9037, 9041, 9043, 5002, 11001, 11014, 11015, 11002, 11016, 11017, 11018, 11019, 11003, 11020, 11021, 11022, 11004, 11005, 11006, 11007, 11008, 11009, 5005, 7001, 7004, 5001, 6005, 10004, 10002, 10001, 11013, 13001, 9046, 9047 ], true ],

	[ 3, "interests", "INTERESTS", "IRL", [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 9016, 9008, 9033, 9053, 10090 ], false ],
	[ 4, "interests", "INTERESTS", "Art", [9032, 9003, 7003, 13001], false ],
	[ 5, "interests", "INTERESTS", "STEM", [5005, 8001, 5003, 7002, 9048], false ],
	[ 6, "interests", "INTERESTS", "Sexuality", [1012, 9039, 9036, 9040, 9024, 9035, ], false ],
	[ 7, "interests", "INTERESTS", "N/A", [8002, 8003], false ],
	[ 8, "interests", "INTERESTS", "Educational", [10002, 1012, 9048, ], false ],
	[ 9, "interests", "INTERESTS", "Media/React", [9034, 9052], false ],
	[ 10, "interests", "INTERESTS", "ASMR", [12001, 9008, 5005, 9038 ], false ],

];





//GROUP NODE
//index, type, GROUP, label, node shape, node size, label size

//increment 101-200
const formalGroupNodes = [

	// dentsu.exe
	[ 102,  "group", "DENTSU", "dentsu.exe",  typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [2001, 2002, 2003] ],

	// nova
	[ 103, "group", "NOVA", "Nova", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [3001, 3002, 3003, 3004] ],

	// beastiez
	[ 104, "group", "BEASTIEZ", "Beastiez", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [4001, 4002, 4003, 4004] ],

	// vichi ban
	[ 105, "group", "VICHIBAN", "VchiBan", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [7001, 7002, 7003, 7004] ],

	// hololive
	[ 110, "group", "HOLOLIVE", "Hololive", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [111, 113, 114] ],


	[ 111, "group", "HOLOLIVE", "Hololive EN", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [112, 116, 117, 120, 121] ],

	[ 112, "group", "HOLOLIVE", "Myth", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11001, 11014, 11015] ],

	[ 116, "group", "HOLOLIVE", "Justice", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11003, 11020, 11021, 11022] ],

	[ 117, "group", "HOLOLIVE", "Advent", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11002, 11016, 11017, 11018, 11019] ],

	[ 120, "group", "HOLOLIVE", "Holostars EN", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11013] ],

	[ 121, "group", "HOLOLIVE", "Promise", typeGroupNodeShape, typeSubgroupSize, typeGroupNodeLabelSize, [11023, 11024, 11025, ] ],


	[ 113, "group", "HOLOLIVE", "Hololive Indo", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [11004, 11005, 11006, 11007, 11008, 11009] ],

	//[ 114, "group", "HOLOLIVE", "Hololive JP", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [] ],

	// first stage
	//[ 115, "group", "FIRST_STAGE", "First Stage", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [12001] ],

	// teri-yaki
	[ 118, "group", "TERI-YAKI", "TERI-yaki", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [13001] ],
	
	// nijisanji
	//[ 119, "group", "NIJISANJI", "Nijisanji", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [] ],

	//lab brats
	[ 202,  "group", "LAB_BRATS", "Lab Brats", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [5001, 5002, 5003, 5005] ],

	// neuroverse
	[ 208, "group", "NEUROVERSE", "Neuroverse", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [8001, 8002, 8003] ],

];



//increment 201-300
const informalGroupNodes = [

	// vein gang
	[  201,  "group", "VEIN_GANG", "Vein Gang", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [1000, 1014, 9013, 10003] ],

	// EN girlypops
	[  203,  "group", "EN_GIRLYPOPS", "EN Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [6001, 6002, 6003, 6004, 6005, 6006] ],

	// crashout crew
	[  204,  "group", "CRASHOUT_CREW", "Crashout Crew", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [1009, 9021, 9017, 9020] ],

	//vshojo
	[ 205,  "group", "VSHOJO", "ex-Vshjo", typeGroupNodeShape,  typeGroupNodeSize,  typeGroupNodeLabelSize, [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 102, 103, 104 ] ],

	// fleshtubers
	[ 206, "group", "FLESHTUBERS", "Fleshtubers", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10090 ] ],

	// indies
	[ 207, "group", "INDIES", "Indies", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [5001, 5002, 5003, 5005, 6001, 6002, 6003, 6004, 7001, 7002, 7003, 7004, 8001, 8002, 8003, 9001, 9002, 9003, 9004, 9005, 9006, 9007, 9008, 9009, 9010, 9011, 9012, 9013, 9014, 9015, 9016, 9017, 9018, 9019, 9020, 9021, 9022, 9023, 9024, 9025, 9026, 9027, 9028, 9029, 9030, 9031, 9032, 9033, 9034, 9035, 9036, 9037, 9038, 9039, 9040, 9041, 9042, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 2001, 2002, 2003, 4001, 4002, 4003, 4004, 6005, 9043, 3001, 3002, 3003, 3004, 9044, 6006, 9045, 9046, 9047, 9048, 9049, 9050, 9051, 9052, 9053,  ] ],

	// indo girlypops
	[ 209, "group", "INDO_GIRLYPOPS", "Indo Girlypops", typeGroupNodeShape, typeGroupNodeSize, typeGroupNodeLabelSize, [11004, 11005, 11006, 11007, 11008, 11009, 13001, 1002,  ] ],

];





//TALENT node
//index, type, GROUP, label, youtube, twitch, wiki, [collabs],  - color is set by group node

//increment by group in steps of 1000
const talentNodes = [

	//INFORMAL GROUPS

	//ex vshjo and vshojo affliated
	[ 1000, "talent", "INDIES", "Ironmouse", "https://www.youtube.com/@IronMouseParty", "https://www.twitch.tv/ironmouse", "https://en.wikipedia.org/wiki/Ironmouse", [1014, 9013, 10003, 7001, 7002, 7003, 7004, 11001, 11002, 11003, 10001, 10001, ], ],
	[ 1001, "talent", "INDIES", "Zentraya", "http://youtube.com/c/Zentreya", "https://www.twitch.tv/zentreya", "https://virtualyoutuber.fandom.com/wiki/Zentreya", [10090, 1005, ],  ],
	[ 1002, "talent", "INDIES", "Michi Mochievee", "https://www.youtube.com/channel/UCnS5IYNyGKOti9cFlK5SefQ", "https://www.twitch.tv/michimochievee", "https://virtualyoutuber.fandom.com/wiki/Michi_Mochievee", [1000, 1001, 1003, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 6001, 6004, 9007, 9009, 9015, 9016, 9017, 9018, 9034, 9042, 9045, 9053, 10002, 10007, 11004, 11005, 11006, 11007, 11009, 11013, 13001, 1015, 9014, 11008, 9028, 3001, 3002, 3003, 3004, ], ],
	[ 1003, "talent", "INDIES", "Geega", "https://www.youtube.com/@GEEGA/", "https://www.twitch.tv/geega", "https://virtualyoutuber.fandom.com/wiki/GEEGA", [], ],
	[ 1005, "talent", "INDIES", "Silvervale", "https://www.youtube.com/channel/UCm8Dj7dQ0oRHXNUXF31kjEw", "https://www.twitch.tv/silvervale", "https://virtualyoutuber.fandom.com/wiki/Silvervale", [], ],
	[ 1006, "talent", "INDIES", "K9 Kuro", "https://www.youtube.com/channel/UCN5J_HKNGFCPtqAnSjBekcA", "https://www.twitch.tv/k9kuro", "https://virtualyoutuber.fandom.com/wiki/Kuro_Kurenai", [], ],
	[ 1007, "talent", "INDIES", "Apricot (froot)", "https://www.youtube.com/c/ApricottheLichVS", "https://www.twitch.tv/apricot", "https://virtualyoutuber.fandom.com/wiki/Apricot", [], ],
	[ 1008, "talent", "INDIES", "Haruka Karibu", "https://www.youtube.com/c/HarukaKaribu", "https://www.twitch.tv/harukakaribu", "https://virtualyoutuber.fandom.com/wiki/Haruka_Karibu", [9025, ], ],
	[ 1009, "talent", "INDIES", "AmaLee", "https://youtube.com/leeandlie", "https://www.twitch.tv/amalee", "https://virtualyoutuber.fandom.com/wiki/AmaLee", [9021,], ],
	[ 1010, "talent", "INDIES", "Henya the Genius", "https://www.youtube.com/channel/UCVhRMzNWYcg8XDTgB9NFRTw", "https://www.twitch.tv/henyathegenius", "https://virtualyoutuber.fandom.com/wiki/Henya_the_Genius", [9002, ], ],
	[ 1011, "talent", "INDIES", "Matara Kan", "https://www.youtube.com/channel/UCxx2uRmAwkhb3QJMfLssgsw", "https://www.twitch.tv/matarakan", "https://virtualyoutuber.fandom.com/wiki/Matara_Kan", [2001, 9004, ], ],
	[ 1012, "talent", "INDIES", "Projket Melody", "https://www.youtube.com/c/ProjektMelodyOfficial", "https://www.twitch.tv/projektmelody", "https://virtualyoutuber.fandom.com/wiki/Projekt_Melody", [9039, ], ],
	//[ 1013, "talent", "INDIES", "Hime Hajime", "https://www.youtube.com/@himehajime1570", "https://www.twitch.tv/hajime", "https://virtualyoutuber.fandom.com/wiki/Hime_Hajime", [], ],
	[ 1014, "talent", "INDIES", "Nyatasha Nyanners", "https://youtube.com/nyanners", "https://www.twitch.tv/nyanners", "https://virtualyoutuber.fandom.com/wiki/Nyatasha_Nyanners", [], ],
	[ 1015, "talent", "INDIES", "Kson", "https://www.youtube.com/channel/UC9ruVYPv7yJmV0Rh0NKA-Lw", "https://www.twitch.tv/ksonsouchou", "https://virtualyoutuber.fandom.com/wiki/Kson", [], ],
	//[ 1016, "talent", "INDIES", "Veibae", "https://www.youtube.com/channel/UCsBFeCb82qOXyUP19nmD9xw", "https://www.twitch.tv/vei", "https://virtualyoutuber.fandom.com/wiki/Veibae", [], ],

	//EN girlypops
	[ 6001, "talent", "INDIES", "Akuma Nihmune", "https://www.youtube.com/c/AkumaNihmuneCh", "https://www.twitch.tv/nihmune", "https://virtualyoutuber.fandom.com/wiki/Akuma_Nihmune", [6002, 6003, 6005, 6006, 9044, 9046, ], ],
	[ 6002, "talent", "INDIES", "Bao the Whale", "https://www.youtube.com/@baovtuber", "https://www.twitch.tv/bao", "https://virtualyoutuber.fandom.com/wiki/Bao", [], ],
	[ 6003, "talent", "INDIES", "Yuzu", "https://www.youtube.com/channel/UCKvij44VV9TWt-EM3evoRWg", "https://www.twitch.tv/yuzu", "https://virtualyoutuber.fandom.com/wiki/Sanagi_Yuzu", [], ],
	[ 6004, "talent", "INDIES", "Camila", "https://www.youtube.com/channel/UCdjLJvro7Q3V0M2V2pwWfZA", "https://www.twitch.tv/camila", "https://virtualyoutuber.fandom.com/wiki/Camila", [8001, ], ],
	[ 6005, "talent", "INDIES", "Lucy Pyre", "https://www.youtube.com/channel/UC5VWF53rrEiuYvO5e5Ecn9Q", "https://www.twitch.tv/lucypyre", "https://virtualyoutuber.fandom.com/wiki/Lucy_Pyre", [], ],
	[ 6006, "talent", "INDIES", "Trickywi", "https://www.youtube.com/@Trickywi", "https://www.twitch.tv/trickywi", "https://virtualyoutuber.fandom.com/wiki/Trickywi", [], ],

	
	

	//indie general population
	[ 9001, "talent", "INDIES", "Bajiru", "https://www.youtube.com/c/bajiru_EN", "https://www.twitch.tv/bajiru_en", "https://virtualyoutuber.fandom.com/wiki/Bajiru", [], ],
	[ 9002, "talent", "INDIES", "dooby3D", "https://www.youtube.com/@dooby3d", "https://www.twitch.tv/dooby3d", "https://virtualyoutuber.fandom.com/wiki/Dooby3D", [], ],
	[ 9003, "talent", "INDIES", "FroggyLoch", "https://www.youtube.com/channel/UCyHiAEZfJmXO_cBRtgzcWZA/featured", "https://www.twitch.tv/froggyloch", "https://virtualyoutuber.fandom.com/wiki/FroggyLoch", [], ],
	[ 9004, "talent", "INDIES", "Limealicious", "https://www.youtube.com/c/Limealicious", "https://www.twitch.tv/limealicious", "https://virtualyoutuber.fandom.com/wiki/Laimu", [9006, ], ],
	[ 9005, "talent", "INDIES", "Sameko Saba", "https://www.youtube.com/@SamekoSaba", "", "https://virtualyoutuber.fandom.com/wiki/Sameko_Saba", [], ],
	[ 9006, "talent", "INDIES", "Nimi Nightmare", "https://www.youtube.com/@niminightmare", "", "https://virtualyoutuber.fandom.com/wiki/Nimi_Nightmare", [9005], ],
	[ 9007, "talent", "INDIES", "SixteenInMono", "https://www.youtube.com/@SixteenInMono", "https://www.twitch.tv/sixteeninmono", "", [9008, ], ],
	[ 9008, "talent", "INDIES", "Cottontail_VA", "https://www.youtube.com/cottontailva", "https://www.twitch.tv/cottontailva", "https://virtualyoutuber.fandom.com/wiki/CottontailVA", [], ],
	[ 9009, "talent", "INDIES", "Arielle_VT", "https://www.youtube.com/@Arielle-VT", "https://www.twitch.tv/arielle", "https://virtualyoutuber.fandom.com/wiki/Arielle", [9003, 10008,  ], ],
	[ 9010, "talent", "INDIES", "Starlight Daryl", "https://www.youtube.com/@StarlightDaryl", "https://www.twitch.tv/starlightdaryl", "https://virtualyoutuber.fandom.com/wiki/StarlightDaryl", [], ],
	[ 9011, "talent", "INDIES", "Isaa Corva", "https://www.youtube.com/@isaacorva", "https://www.twitch.tv/isaa", "https://virtualyoutuber.fandom.com/wiki/Isaa_Corva", [], ],
	[ 9013, "talent", "INDIES", "Lord Aethelstan", "https://www.youtube.com/channel/UCLI_XmsVZzOrOB1LaoV0BEQ", "https://www.twitch.tv/lordaethelstan", "https://virtualyoutuber.fandom.com/wiki/Lord_Aethelstan", [], ],
	[ 9014, "talent", "INDIES", "Obkatiekat", "https://www.youtube.com/obkatiekat", "https://www.twitch.tv/obkatiekat", "https://virtualyoutuber.fandom.com/wiki/Obkatiekat", [9027, ], ],
	[ 9015, "talent", "INDIES", "U-san", "https://www.youtube.com/@unnamednow00", "https://www.twitch.tv/unnamednow00", "https://virtualyoutuber.fandom.com/wiki/Unn%C3%A4med", [], ],
	[ 9016, "talent", "INDIES", "Saiiren", "https://www.youtube.com/@saiiren", "https://www.twitch.tv/saiiren", "https://virtualyoutuber.fandom.com/wiki/Saiiren", [], ],
	[ 9017, "talent", "INDIES", "Porcelain Maid", "https://www.youtube.com/channel/UCngBjKSLC8IhPNagQCnf2LQ", "https://www.twitch.tv/porcelainmaid", "https://virtualyoutuber.fandom.com/wiki/PorcelainMaid", [], ],
	[ 9018, "talent", "INDIES", "Heavenly Father", "https://www.youtube.com/channel/UCrx5cwSB4bl3fI34Boxvq2A", "https://www.twitch.tv/heavenlyfather", "https://virtualyoutuber.fandom.com/wiki/Heavenly_Father", [], ],	
	//[ 9019, "talent", "INDIES", "Pumpkin Potion", "https://www.youtube.com/pumpkinpotion", "https://www.twitch.tv/pumpkinpotion", "https://virtualyoutuber.fandom.com/wiki/Pumpkin_Potion", [], ],
	//[ 9020, "talent", "INDIES", "missshadowlovely", "https://www.youtube.com/MissShadowLovely", "https://www.twitch.tv/missshadowlovely", "https://virtualyoutuber.fandom.com/wiki/MissShadowLovely", [], ],
	[ 9021, "talent", "INDIES", "CyYu", "https://www.youtube.com/c/@CyYuvods", "https://www.twitch.tv/cyyuvtuber", "https://virtualyoutuber.fandom.com/wiki/CyYu", [], ],
	//[ 9022, "talent", "INDIES", "CROC", "https://www.youtube.com/@CROCvt", "https://www.twitch.tv/croc", "wikilink", [], ],
	//[ 9023, "talent", "INDIES", "ENVI", "youtube", "https://www.twitch.tv/envi", "wikilink", [], ],
	//[ 9024, "talent", "INDIES", "Lucia Crabs", "https://www.youtube.com/@luciavt", "https://www.twitch.tv/lucia", "https://virtualyoutuber.fandom.com/wiki/Lucia_Crabs", [], ],
	//[ 9025, "talent", "INDIES", "KloeKroc", "https://www.youtube.com/@KloeKroc", "https://www.twitch.tv/kloekroc", "wikilink", [], ],
	//[ 9026, "talent", "INDIES", "Derivakat", "https://www.youtube.com/derivakat", "https://www.twitch.tv/derivakat", "wikilink", [], ],
	[ 9027, "talent", "INDIES", "Fufu", "https://www.youtube.com/channel/UCNMHJ9WnMXabPn-iyQKAdcA", "https://www.twitch.tv/fufu", "https://virtualyoutuber.fandom.com/wiki/Fufu", [], ],
	[ 9028, "talent", "INDIES", "KokoNuts", "https://www.youtube.com/channel/UCk9qayCnFw51PIUZKVxH1UQ", "https://www.twitch.tv/kokonuts", "https://virtualyoutuber.fandom.com/wiki/Koko_D._Nuts", [9029], ],
	//[ 9029, "talent", "INDIES", "Crelly", "https://www.youtube.com/channel/UCwxaNWg74VccV65gr_L6JZg", "https://www.twitch.tv/crelly", "https://virtualyoutuber.fandom.com/wiki/Crelly", [], ],
	//[ 9030, "talent", "INDIES", "Bluto", "youtube", "https://www.twitch.tv/bluto", "https://virtualyoutuber.fandom.com/wiki/Bluto", [], ],
	//[ 9031, "talent", "INDIES", "chibidoki", "https://www.youtube.com/channel/UCoqNvjhUxJRYW4JsT5fBK6w", "https://www.twitch.tv/chibidoki", "https://virtualyoutuber.fandom.com/wiki/Chibidoki", [], ],
	//[ 9032, "talent", "INDIES", "x3Dustco", "youtube", "https://www.twitch.tv/x3dustco", "wikilink", [], ],
	//[ 9033, "talent", "INDIES", "LaynaLazar", "https://www.youtube.com/@LaynaLazar", "https://www.twitch.tv/laynalazar", "https://virtualyoutuber.fandom.com/wiki/Layna_Lazar", [], ],
	[ 9034, "talent", "INDIES", "Papamutt", "https://www.youtube.com/channel/UCbAadhjblnwYfQ0xypSH_sg", "https://www.twitch.tv/papamutt", "https://virtualyoutuber.fandom.com/wiki/Papamutt", [], ],
	//[ 9035, "talent", "INDIES", "FeFe", "https://www.youtube.com/c/fefevtuber", "https://www.twitch.tv/fefe", "https://virtualyoutuber.fandom.com/wiki/FeFe", [], ],
	//[ 9036, "talent", "INDIES", "Vexoria the Suneater", "https://www.youtube.com/channel/UC9r8dNEoXdIpYTnoMVFwzhg", "https://www.twitch.tv/vexoria_the_suneater", "https://virtualyoutuber.fandom.com/wiki/Vexoria_the_Sun_Eater", [], ],
	//[ 9037, "talent", "INDIES", "Spite", "https://www.youtube.com/c/SpitemeVtuber", "https://www.twitch.tv/spite", "https://virtualyoutuber.fandom.com/wiki/Spite", [], ],
	//[ 9038, "talent", "INDIES", "Cha Cha Your Vmom", "https://youtube.com/@chachayourvmom", "https://www.twitch.tv/chachayourvmom", "https://virtualyoutuber.fandom.com/wiki/Cha_Cha,_Your_Vmom", [], ],
	//[ 9039, "talent", "INDIES", "el XoX", "https://www.youtube.com/@elXoX34", "https://www.twitch.tv/el_xox", "https://virtualyoutuber.fandom.com/wiki/El_XoX", [], ],
	//[ 9040, "talent", "INDIES", "Megladon", "https://www.youtube.com/channel/UCb5BJg1PJvzQ6kYk7eguzCQ", "https://www.twitch.tv/megalodonvt", "https://virtualyoutuber.fandom.com/wiki/Megalodon", [], ],
	[ 9041, "talent", "INDIES", "cerberVT", "https://www.youtube.com/channel/UCBX-cil2Y9-_TOyFxsAdt1w", "https://www.twitch.tv/cerbervt", "https://virtualyoutuber.fandom.com/wiki/CerberVT", [], ],
	[ 9042, "talent", "INDIES", "tonkienator", "https://www.youtube.com/@tonkienatorr", "https://www.twitch.tv/tonkienator", "wikilink", [], ],
	[ 9043, "talent", "INDIES", "Dokibird", "https://www.youtube.com/@Dokibird", "https://www.twitch.tv/dokibird", "https://virtualyoutuber.fandom.com/wiki/Dokibird", [], ],
	[ 9044, "talent", "INDIES", "Shylilly", "https://www.youtube.com/@Shylily", "https://www.twitch.tv/shylily", "https://virtualyoutuber.fandom.com/wiki/Shylily", [], ],
	[ 9045, "talent", "INDIES", "Meicha", "https://www.youtube.com/channel/UCNbVN2AjnvY73GVS3NdJx4Q/", "https://www.twitch.tv/meicha", "https://virtualyoutuber.fandom.com/wiki/Meicha", [], ],
	[ 9046, "talent", "INDIES", "moniibagel", "https://www.youtube.com/channel/UCfTjT67uIy1hcAJFO7_AqOQ", "https://www.twitch.tv/moniibagel/about", "https://virtualyoutuber.fandom.com/wiki/Monii", [], ],
	//[ 9047, "talent", "INDIES", "InannaBell", "https://www.youtube.com/@inannabell", "https://www.twitch.tv/inannabell", "", [], ],
	//[ 9048, "talent", "INDIES", "Psydere", "https://www.youtube.com/@psydere", "https://www.twitch.tv/psydere", "", [], ],
	//[ 9049, "talent", "INDIES", "FREAM", "", "https://www.twitch.tv/fream", "https://virtualyoutuber.fandom.com/wiki/Fream", [], ],

	//[ 9050, "talent", "INDIES", "Momo", "http://www.youtube.com/themastermo", "https://www.twitch.tv/momo", "https://virtualyoutuber.fandom.com/wiki/Momo", [], ],
	//[ 9051, "talent", "INDIES", "girl_dm_", "https://www.youtube.com/channel/UC_WC6plpIdL_buebR9vSVkg", "https://www.twitch.tv/girl_dm_", "https://virtualyoutuber.fandom.com/wiki/Girl_dm", [], ],
	//[ 9052, "talent", "INDIES", "SunnySplosion", "https://www.youtube.com/@OopsAllSunny", "https://www.twitch.tv/sunnysplosion", "https://virtualyoutuber.fandom.com/wiki/SunnySplosion", [], ],
	[ 9053, "talent", "INDIES", "OniGiri", "https://www.youtube.com/c/OniGirien", "https://www.twitch.tv/onigiri", "https://virtualyoutuber.fandom.com/wiki/OniGiri", [9051, ], ],

//aqua
//baddaboom
//kumi




	//livestreamers and IRL folks aka Fleshtubers
	[ 10001, "talent", "FLESHTUBERS", "Marcomeatball", "https://www.youtube.com/c/MarcoMeatball", "https://www.twitch.tv/marcomeatball", "wikilink", [], ],
	[ 10002, "talent", "FLESHTUBERS", "lesagesinging", "https://www.youtube.com/channel/UCReU-IqthhUbR7N7EsTu6MQ", "https://www.twitch.tv/lesagesinging", "", [9010, 9001,  ], ],
	[ 10003, "talent", "FLESHTUBERS", "CDawgVA", "https://www.youtube.com/channel/UCPsZ_0SkFdi551iYTG04R2g", "https://www.twitch.tv/cdawg", "https://en.wikipedia.org/wiki/CDawgVA", [10009, ], ],
	//[ 10004, "talent", "FLESHTUBERS", "Emily Hopkins", "youtube", "twitch", "wikilink", [], ],
	//[ 10005, "talent", "FLESHTUBERS", "JessieCox", "https://youtube.com/JesseCox", "https://www.twitch.tv/jessecox", "", [], ],
	//[ 10006, "talent", "FLESHTUBERS", "Doger", "https://www.youtube.com/@DexbonusVOD", "https://www.twitch.tv/dexbonus", "", [], ],
	[ 10007, "talent", "FLESHTUBERS", "Nagzz", "https://www.youtube.com/nagzz", "https://www.twitch.tv/nagzz", "", [9031, ], ],
	[ 10008, "talent", "FLESHTUBERS", "Ray Narvaez", "http://youtube.com/@rayyylmao", "https://www.twitch.tv/ray", "", [], ],
	//[ 10009, "talent", "FLESHTUBERS", "Chris Broad", "https://www.youtube.com/@AbroadinJapan", "", "https://en.wikipedia.org/wiki/Chris_Broad_(YouTuber)", [], ],
	//[ 10090, "talent", "FLESHTUBERS", "Rubin Sargasm", "youtube", "twitch", "", [], ],
	

	

	//FORMAL GROUPS

	//hololive

	//myth
	[ 11001, "talent", "HOLOLIVE", "Mori Calliope", "https://www.youtube.com/@MoriCalliope/featured", "https://www.twitch.tv/moricalliope/about", "https://virtualyoutuber.fandom.com/wiki/Mori_Calliope", [11014, 11015], ],
	[ 11014, "talent", "HOLOLIVE", "Takanashi Kiara", "https://t.co/mZsEcWct3I", "https://www.twitch.tv/kiara", "https://virtualyoutuber.fandom.com/wiki/Takanashi_Kiara", [], ],
	[ 11015, "talent", "HOLOLIVE", "Ninomae Ina’nis", "https://www.youtube.com/@NinomaeInanis", "", "https://virtualyoutuber.fandom.com/wiki/Ninomae_Ina'nis", [], ],

	//advent
	[ 11002, "talent", "HOLOLIVE", "Nerissa Ravencroft", "https://www.youtube.com/@NerissaRavencroft", "https://www.twitch.tv/nerissaravencroft", "https://virtualyoutuber.fandom.com/wiki/Nerissa_Ravencroft", [11016, 11017, 11018, 11019,  ], ],
	[ 11016, "talent", "HOLOLIVE", "Koseki Bijou", "https://www.youtube.com/@KosekiBijou", "", "https://virtualyoutuber.fandom.com/wiki/Koseki_Bijou", [], ],
	[ 11017, "talent", "HOLOLIVE", "Shiori Novella", "https://www.youtube.com/@ShioriNovella", "", "https://virtualyoutuber.fandom.com/wiki/Shiori_Novella", [], ],
	[ 11018, "talent", "HOLOLIVE", "Fuwawa Abyssgard", "https://www.youtube.com/@FUWAMOCOch", "", "https://virtualyoutuber.fandom.com/wiki/Fuwawa_Abyssgard", [], ],
	[ 11019, "talent", "HOLOLIVE", "Mococo Abyssgard", "https://www.youtube.com/@FUWAMOCOch", "", "https://virtualyoutuber.fandom.com/wiki/Mococo_Abyssgard", [], ],

	//justice
	[ 11003, "talent", "HOLOLIVE", "Elizabeth Rose Bloodflame", "youtube", "https://www.twitch.tv/elizabethrosebloodflame", "https://virtualyoutuber.fandom.com/wiki/Elizabeth_Rose_Bloodflame", [11020, 11021, 11022 ], ],
	[ 11020, "talent", "HOLOLIVE", "Gigi Murin", "https://www.youtube.com/@holoen_gigimurin", "", "https://virtualyoutuber.fandom.com/wiki/Gigi_Murin", [], ],
	[ 11021, "talent", "HOLOLIVE", "Cecilia Immergreen", "https://www.youtube.com/@holoen_ceciliaimmergreen", "", "https://virtualyoutuber.fandom.com/wiki/Cecilia_Immergreen", [], ],
	[ 11022, "talent", "HOLOLIVE", "Raora Panthera", "https://www.youtube.com/@holoen_raorapanthera", "", "https://virtualyoutuber.fandom.com/wiki/Raora_Panthera", [], ],

	//indo
	[ 11004, "talent", "HOLOLIVE", "Kureiji Ollie", "https://www.youtube.com/@KureijiOllie", "https://www.twitch.tv/kureijiollie", "https://virtualyoutuber.fandom.com/wiki/Kureiji_Ollie", [10005, 10006, ], ],
	[ 11005, "talent", "HOLOLIVE", "Moona Hoshinova", "https://www.youtube.com/@MoonaHoshinova", "https://www.twitch.tv/moonahoshinova", "https://virtualyoutuber.fandom.com/wiki/Moona_Hoshinova", [], ],
	[ 11006, "talent", "HOLOLIVE", "Ayunda Risu", "https://www.youtube.com/@ayundarisu", "", "https://virtualyoutuber.fandom.com/wiki/Ayunda_Risu", [], ],
	[ 11007, "talent", "HOLOLIVE", "Kaela Kovalskia", "https://www.youtube.com/@KaelaKovalskia", "", "https://virtualyoutuber.fandom.com/wiki/Kaela_Kovalskia", [], ],
	[ 11008, "talent", "HOLOLIVE", "Kobo Kanaeru", "https://www.youtube.com/@KoboKanaeru", "", "https://virtualyoutuber.fandom.com/wiki/Kobo_Kanaeru", [], ], 
	[ 11009, "talent", "HOLOLIVE", "Vestia Zeta", "https://www.youtube.com/@VestiaZeta", "https://www.twitch.tv/vestiazeta", "https://virtualyoutuber.fandom.com/wiki/Vestia_Zeta", [], ],

	//promise
	[ 11023, "talent", "HOLOLIVE", "IRyS", "https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g", "", "https://virtualyoutuber.fandom.com/wiki/IRyS", [11024, 11025,], ],
	[ 11024, "talent", "HOLOLIVE", "Ouro Kronii", "https://www.youtube.com/channel/UCmbs8T6MWqUHP1tIQvSgKrg", "", "https://virtualyoutuber.fandom.com/wiki/Ouro_Kronii", [], ],
	[ 11025, "talent", "HOLOLIVE", "Hakos Baelz", "https://www.youtube.com/channel/UCgmPnx-EEeOrZSg5Tiw7ZRQ", "", "https://virtualyoutuber.fandom.com/wiki/Hakos_Baelz", [], ],


	//holostars
	[ 11013, "talent", "HOLOLIVE", "Banzoin Hakka", "https://www.youtube.com/@BanzoinHakka", "https://www.twitch.tv/banzoinhakka", "https://virtualyoutuber.fandom.com/wiki/Banzoin_Hakka", [], ],

	//first stage
	//[ 12001, "talent", "FIRST_STAGE", "Liron Lockheart", "https://www.youtube.com/@LironLockheart_FSP", "", "https://virtualyoutuber.fandom.com/wiki/Liron_Lockheart", [], ],

	//teri-yaki
	[ 13001, "talent", "TERI_YAKI", "Rae Laveire", "https://youtube.com/c/Raelaveire", "https://www.twitch.tv/raelaveire", "https://virtualyoutuber.fandom.com/wiki/Rae_Laveire", [], ],


	//lab brats
	[ 5001, "talent", "LAB_BRATS", "Chrchie", "https://www.youtube.com/@chrchieVT", "https://www.twitch.tv/chrchie", "https://virtualyoutuber.fandom.com/wiki/Chrchie", [], ],
	[ 5002, "talent", "LAB_BRATS", "MinikoMew", "https://www.youtube.com/channel/UC9evPLoYqsHASjrahHekqMA", "https://www.twitch.tv/minikomew", "https://virtualyoutuber.fandom.com/wiki/MinikoMew", [], ],
	[ 5003, "talent", "LAB_BRATS", "Shoomimi", "https://www.youtube.com/@Shoomimi", "https://www.twitch.tv/shoomimi", "https://virtualyoutuber.fandom.com/wiki/Shoomimi", [], ],
	[ 5005, "talent", "LAB_BRATS", "Ellie Minibot", "https://www.youtube.com/channel/UCeZe82WbZ7VL9meqWli6qxg", "https://www.twitch.tv/ellie_minibot", "https://virtualyoutuber.fandom.com/wiki/Ellie_Minibot", [9048, 5003, 5002, 5001, 9038, 9041, 9011 ], ],

	// neuroverse
	[ 8001, "talent", "NEUROVERSE", "Vedal", "https://www.youtube.com/channel/UCLHmLrj4pHHg3-iBJn_CqxA", "https://www.twitch.tv/vedal987", "wikilink", [8002, 8003, ], ],
	[ 8002, "talent", "NEUROVERSE", "Neurosama", "https://www.youtube.com/channel/UCLHmLrj4pHHg3-iBJn_CqxA", "https://www.twitch.tv/vedal987", "https://virtualyoutuber.fandom.com/wiki/Neuro-sama", [], ],
	[ 8003, "talent", "NEUROVERSE", "Evil Neuro", "https://www.youtube.com/channel/UCLHmLrj4pHHg3-iBJn_CqxA", "https://www.twitch.tv/vedal987", "https://virtualyoutuber.fandom.com/wiki/Evil_Neuro", [], ],

	// VichiBan
	[ 7001, "talent", "VICHIBAN", "Buffpup", "https://www.youtube.com/channel/UCM6Ld_dNSaUQ2uwjJ4Gq9FA", "https://www.twitch.tv/buffpup", "https://virtualyoutuber.fandom.com/wiki/Buffpup", [], ],
	[ 7002, "talent", "VICHIBAN", "Ai Candii", "http://youtube.com/c/aicandii", "https://www.twitch.tv/aicandii", "https://virtualyoutuber.fandom.com/wiki/Ai_Candii", [], ],
	[ 7003, "talent", "VICHIBAN", "Rosedoodle", "https://www.youtube.com/channel/UCihXhXRz8tj91hBptuSsQ0g", "https://www.twitch.tv/rosedoodle", "https://virtualyoutuber.fandom.com/wiki/Rosedoodle", [], ],
	[ 7004, "talent", "VICHIBAN", "ShiaBun", "https://www.youtube.com/c/ShiaBun", "https://www.twitch.tv/shiabun", "https://virtualyoutuber.fandom.com/wiki/ShiaBun", [], ],

	// dentsu.exe
	[ 2001, "talent", "DENTSU", "Mint Fantôme", "https://www.youtube.com/@mintfantome", "", "https://virtualyoutuber.fandom.com/wiki/Mint_Fant%C3%B4me", [2002, 2003, 9043, ], ],
	[ 2002, "talent", "DENTSU", "Victoria Roma", "https://www.youtube.com/@vickyroman_idol", "", "https://virtualyoutuber.fandom.com/wiki/Victoria_Roman", [], ],
	[ 2003, "talent", "DENTSU", "Phoebe Chan", "https://www.youtube.com/@feebeechanchibi", "", "https://virtualyoutuber.fandom.com/wiki/Phoebe_Chan", [], ],

    // NOVA
	[ 3001, "talent", "NOVA", "Akatsuki Hotaru", "https://www.youtube.com/@AkatsukiDHotaru", "https://www.twitch.tv/akatsukidhotaru", "https://virtualyoutuber.fandom.com/wiki/Akatsuki_Hotaru", [], ],
	[ 3002, "talent", "NOVA", "Hestia Happiness", "https://www.youtube.com/channel/UCyaxhmE-zyUIjMfCGQ75vlA", "https://www.twitch.tv/hestiahappiness", "https://virtualyoutuber.fandom.com/wiki/Hestia_Happiness", [], ],
	[ 3003, "talent", "NOVA", "Yutori Peke", "https://www.youtube.com/@PekeIsPeak", "https://www.twitch.tv/pekeispeak", "https://virtualyoutuber.fandom.com/wiki/Yutori_Peke", [], ],
	[ 3004, "talent", "NOVA", "Okamoto Nagi", "https://www.youtube.com/@NagIsekaied", "https://www.twitch.tv/nagisekaied", "https://virtualyoutuber.fandom.com/wiki/Okamoto_Nagi", [], ],

	// Beastiez
	[ 4001, "talent", "BEASTIEZ", "Tori Oriane", "https://www.youtube.com/@ToriOriane/featured", "https://www.twitch.tv/torioriane", "https://virtualyoutuber.fandom.com/wiki/Tori_Oriane", [], ],
	[ 4002, "talent", "BEASTIEZ", "PiaPiUFO", "https://www.youtube.com/c/PiaPIUFO", "https://www.twitch.tv/piapiufo", "https://virtualyoutuber.fandom.com/wiki/PiaPiUFO", [], ],
	[ 4003, "talent", "BEASTIEZ", "Beribug", "https://www.youtube.com/channel/UC8PMqEDpXcsooyDGiLvxs4w", "https://www.twitch.tv/beribug", "https://virtualyoutuber.fandom.com/wiki/Beribug", [], ],
	[ 4004, "talent", "BEASTIEZ", "Kairyu Crocodile", "https://www.youtube.com/@KairyuCrocodile", "https://www.twitch.tv/kairyucrocodile", "https://virtualyoutuber.fandom.com/wiki/Kairyu_Crocodile", [4003, 4002, 4001, ], ],



];







/*
CREATE NODES/EDGES
-----------------------------------------------
*/

//these const are to deal with the quote mark issue  when concatanating strings in an array

//for nodes
const idText = `{ id: `;
const typeText = `, type: "`;
const groupText = `", group: "`;
const labelText = `", label: "`;

const collabText = `collab`;

const shapeText = `", shape: "`;
const sizeNodeText = `", size: `;

const fontSizeText = `, font: { size: `;
const fontColorText = `, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } }`;

const youtubeText = `", youtube: "`;
const twitchText = `", twitch: "`;
const wikiText = `", wiki: "`;

const physicsText = `", fixed: `;

const endText = `" }`;
const physicsEndText = ` }`;


//for edges
const fromText = `{ from: `;
const toText = `, to: `;
const dashesText = `", dashes: `;
const dashesEndText = `}`;
const interestsText = ``;



//NODES


//interest loop
for (var a = 0; a < interestNode.length; a++) {


	//nodee elements
	var currentInterestNode = interestNode[a];

	var nodeHTMLoutput = idText + currentInterestNode[0] + typeText + currentInterestNode[1] + groupText + currentInterestNode[2] + labelText + currentInterestNode[3] + physicsText + currentInterestNode[5] + physicsEndText;

	outputNodeAcc.push(nodeHTMLoutput);


	if (currentInterestNode[4].length > 0) {

	   //edge elements
		for (var ee = 0; ee < currentInterestNode[4].length; ee++) {

			var edgeHTMLoutput = fromText + currentInterestNode[0] + toText + currentInterestNode[4][ee] + typeText + currentInterestNode[1] + endText;

			outputEdgeAcc.push(edgeHTMLoutput)

		}

	};


};



//revised formal group nodes
for (var a = 0; a < formalGroupNodes.length; a++) {


	//nodee elements
	var currentFormalGroupNodes = formalGroupNodes[a];

	var nodeHTMLoutput = idText + currentFormalGroupNodes[0] + typeText + currentFormalGroupNodes[1] + groupText + currentFormalGroupNodes[2] + labelText + currentFormalGroupNodes[3] + shapeText + currentFormalGroupNodes[4] + sizeNodeText + currentFormalGroupNodes[5] + fontSizeText + currentFormalGroupNodes[6] + fontColorText;

	outputNodeAcc.push(nodeHTMLoutput);


	if (currentFormalGroupNodes[7].length > 0) {

   //edge elements
		for (var ee = 0; ee < currentFormalGroupNodes[7].length; ee++) {

			var edgeHTMLoutput = fromText + currentFormalGroupNodes[0] + toText + currentFormalGroupNodes[7][ee] + typeText + currentFormalGroupNodes[1] + endText;

			outputEdgeAcc.push(edgeHTMLoutput)

		}

	}


};



//revised informal group nodes
for (var a = 0; a < informalGroupNodes.length; a++) {


	//nodee elements
	var currentInformalGroupNodes = informalGroupNodes[a];

	var nodeHTMLoutput = idText + currentInformalGroupNodes[0] + typeText + currentInformalGroupNodes[1] + groupText + currentInformalGroupNodes[2] + labelText + currentInformalGroupNodes[3] + shapeText + currentInformalGroupNodes[4] + sizeNodeText + currentInformalGroupNodes[5] + fontSizeText + currentInformalGroupNodes[6] + fontColorText;

	outputNodeAcc.push(nodeHTMLoutput);


	if (currentInformalGroupNodes[7].length > 0) {

	   //edge elements
		for (var ee = 0; ee < currentInformalGroupNodes[7].length; ee++) {

			var edgeHTMLoutput = fromText + currentInformalGroupNodes[0] + toText + currentInformalGroupNodes[7][ee] + typeText + currentInformalGroupNodes[1] + dashesText + true + dashesEndText;

			outputEdgeAcc.push(edgeHTMLoutput)

		}

	}



};



//revised talent
for (var a = 0; a < talentNodes.length; a++) {


	//nodee elements
	var currentTalentNode = talentNodes[a];

	var nodeHTMLoutput = idText + currentTalentNode[0] + typeText + currentTalentNode[1] + groupText + currentTalentNode[2] + labelText + currentTalentNode[3] + youtubeText + currentTalentNode[4] + twitchText + currentTalentNode[5] + wikiText + currentTalentNode[6] + endText;

	outputNodeAcc.push(nodeHTMLoutput);


	if (currentTalentNode[7].length > 0) {

   //edge elements
		for (var ee = 0; ee < currentTalentNode[7].length; ee++) {

			var edgeHTMLoutput = fromText + currentTalentNode[0] + toText + currentTalentNode[7][ee] + typeText + collabText + endText;

			outputEdgeAcc.push(edgeHTMLoutput)

		}

	}



};




//for dev, much faster to copy paste from the html file when making local changes as you can't load modules on a local file system

//write to HTML

//function to push the node accumliation array to the file

testHTMLNodeOutput(outputNodeAcc, outputEdgeAcc);




/*
FUNCTIONS
-----------------------------------------------
*/


function testHTMLNodeOutput(nodeHTMLoutput, edgeHTMLoutput) {

	//more chatgpt code, based on the code to the talent links on the webpage
	const talentName = document.getElementById("nodeOutput");

	// replace the target text "#node" with the contents of nodeHTMLoutput
	talentName.textContent = nodeHTMLoutput || "#node";


	//more chatgpt code, based on the code to the talent links on the webpage
	const edgeContainer = document.getElementById("edgeOutput");

	// set name
	edgeContainer.textContent = edgeHTMLoutput || "#edge";

};




