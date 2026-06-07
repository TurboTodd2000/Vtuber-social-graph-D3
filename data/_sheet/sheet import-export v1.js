//TODO

//remove physics from interests



//NODE

//this handles importing the required code for the node file output
import fs from 'node:fs';


//IMPORT

import { interests } from "./Vtuber_Export_Interests.js";
//console.log(interests);

import { groupsFormal } from "./Vtuber_Export_groupsFormal.js";
//console.log(groupsFormal);

import { groupsInformal } from "./Vtuber_Export_groupsInformal.js";

import { talents } from "./Vtuber_Export_talents.js";


//SETUP VAR

//output array containers
var outputNodeAcc = [];
var outputEdgeAcc = [];

var interestsImport = [];


//for node output

//size and shape
var typeGroupNodeShape = "dot";
var typeGroupNodeSize = 30;

//subgroups node size
var typeSubgroupSize = 17;

//label size
var typeGroupNodeLabelSize = 25;


//for edge output



//these const are to deal with the quote mark issue  when concatanating strings in an array

//for nodes
const idText = `{ id: `;
const typeText = `, type: "`;
const groupText = `", group: "`;
const subgroupText = `", subgroup: `;
const labelText = `", label: "`;
const labelSubgroupText = `, label: "`;

const graduationText = `", graduation: `;

const collabText = `collab`;

const shapeText = `", shape: "`;
const sizeNodeText = `", shapeSize: `;

const fontSizeText = `, font: { size: `;
const fontColorText = `, color: "black", strokeWidth: 6, strokeColor: "#ffffff", } }`;

const youtubeText = `, youtube: "`;
const twitchText = `", twitch: "`;
const wikiText = `", wiki: "`;

const physicsText = `", fixed: `;

const endText = `" }`;
const physicsEndText = ` }`;
const fontEndText = ` } }`;


//for edges
const fromText = `{ source: `;
const toText = `, target: `;
const dashesText = `", dashes: `;
const dashesEndText = `}`;
const interestsText = ``;





/*
CREATE NODES/EDGES
-----------------------------------------------
*/


//INTERESTS

for (let currentNode of interests) {

	//figure out if the row is set to be used

	// Ternary operator: condition ? true-value : false-value
	let activeBool =  currentNode.active.toLowerCase() === 'true' ? true : false;

	//console.log("currentNode.active: " + currentNode.active);
	//console.log("activeBool: " + activeBool);


	if (activeBool) {

		//create nodes
		const currentIndex = currentNode.index;
		const currentName = currentNode.name;
		const currentType = "interests";
		const currentGroup = "INTERESTS";

		var nodeHTMLoutput = idText + currentIndex + typeText + currentType + groupText + currentGroup + labelText + currentName + endText;

		//console.log(nodeHTMLoutput);

		outputNodeAcc.push(nodeHTMLoutput)


		//create edgges
		const edgeArray = currentNode.membersRef.toString().split(',');

		//console.log("Edge Array: " + edgeArray);

		if (edgeArray != "") {

			for (let currentEdge of edgeArray) {

				var edgeHTMLoutput = fromText + currentIndex + toText + currentEdge + typeText + currentType + groupText + currentGroup + dashesText + false + physicsEndText;

				console.log(edgeHTMLoutput);

				outputEdgeAcc.push(edgeHTMLoutput)

			}
		}

	}
};


//GROUPS

//for formal groups
for (let currentNode of groupsFormal) {

	//figure out if the row is set to be used
	
	// Ternary operator: condition ? true-value : false-value
	let activeBool = currentNode.active.toLowerCase() === 'true' ? true : false;

	//console.log("currentNode.active: " + currentNode.active);
	//console.log("activeBool: " + activeBool);


	if (activeBool) {

		//create nodes
		const currentIndex = currentNode.index;
		const currentName = currentNode.name;
		const currentGroup = currentNode.group;
		const currentYouTube = currentNode.youTube;
		const currentTwitch = currentNode.twitch;
		const currentWiki = currentNode.wiki;

		//group specific
		const currentShape = "dot";
		const currentIsSubgroup = currentNode.isSubgroup.toLowerCase() === 'true' ? true : false;
		const currentSubgroup = currentNode.subgroupRef;
		const currentType = "group";

		//is this a subgroup? if yes change the size for the node

		// Ternary operator: condition ? true-value : false-value
		let subgroupBool = currentNode.isSubgroup.toLowerCase() === 'true' ? true : false;

		let nodeSize;

		if (subgroupBool) {
			nodeSize = typeSubgroupSize
		} else {
			nodeSize = typeGroupNodeSize
		};

		//console.log("nodeSize: " + nodeSize);

		//this assembles the info from the sheet output with the string fragments in the variable section to create the final output
		var nodeHTMLoutput = idText + currentIndex + typeText + currentType + groupText + currentGroup + subgroupText + currentIsSubgroup + labelSubgroupText + currentName + shapeText + currentShape + sizeNodeText + nodeSize + fontSizeText + typeGroupNodeLabelSize + fontEndText;

		//console.log(nodeHTMLoutput);

		outputNodeAcc.push(nodeHTMLoutput)


		//create edgges
		const edgeArray = currentNode.membersRef.toString().split(',');

		const subgroupArray = currentNode.subgroupRef.toString().split(',');


		if (edgeArray != "") {

			for (let currentEdge of edgeArray) {

				//this assembles the info from the sheet output with the string fragments in the variable section to create the final output
				var edgeHTMLoutput = fromText + currentIndex + toText + currentEdge + typeText + currentType + dashesText + false + physicsEndText;

				//console.log(edgeHTMLoutput);

				outputEdgeAcc.push(edgeHTMLoutput)

			}

		}; 

		if (subgroupArray != "") {

			for (let currentSubgroup of subgroupArray) {

				//doing this because I can't figure out how to fix this index reference in the spreadsheet
				const adjustsedSubgroup = Number(currentSubgroup) + 1000;

				var edgeHTMLoutput = fromText + currentIndex + toText + adjustsedSubgroup + typeText + currentType + dashesText + false + physicsEndText;

				//console.log(edgeHTMLoutput);

				outputEdgeAcc.push(edgeHTMLoutput)

			}
		};
		

	}
};


//for informal groups
for (let currentNode of groupsInformal) {

	//figure out if the row is set to be used
	
	// Ternary operator: condition ? true-value : false-value
	let activeBool = currentNode.active.toLowerCase() === 'true' ? true : false;

	//console.log("currentNode.active: " + currentNode.active);
	//console.log("activeBool: " + activeBool);


	if (activeBool) {

		//create nodes
		const currentIndex = currentNode.index;
		const currentName = currentNode.name;
		const currentGroup = currentNode.group;
		const currentYouTube = currentNode.youTube;
		const currentTwitch = currentNode.twitch;
		const currentWiki = currentNode.wiki;

		//group specific
		const currentShape = "dot";
		const currentType = "group";
		const nodeSize = typeGroupNodeSize;


		var nodeHTMLoutput = idText + currentIndex + typeText + currentType + groupText + currentGroup + labelText + currentName + shapeText + currentShape + sizeNodeText + nodeSize + fontSizeText + typeGroupNodeLabelSize + fontEndText;

		//console.log(nodeHTMLoutput);

		outputNodeAcc.push(nodeHTMLoutput)


		//create edgges
		const edgeArray = currentNode.membersRef.toString().split(',');

		if (edgeArray != "") {

			for (let currentEdge of edgeArray) {

				var edgeHTMLoutput = fromText + currentIndex + toText + currentEdge + typeText + currentType + dashesText + true + dashesEndText;

				//console.log(edgeHTMLoutput);

				outputEdgeAcc.push(edgeHTMLoutput)

			}

		}; 


	}
};


//TALENTS

//for talent nodes
for (let currentNode of talents) {

	//figure out if the row is set to be used
	
	// Ternary operator: condition ? true-value : false-value
	let activeBool = currentNode.active.toLowerCase() === 'true' ? true : false;

	//console.log("currentNode.active: " + currentNode.active);
	//console.log("activeBool: " + activeBool);


	if (activeBool) {

		//create nodes
		const currentIndex = currentNode.index;
		const currentName = currentNode.name;
		const currentGroup = currentNode.displayGroup;
		const currentYouTube = currentNode.youTube;
		const currentTwitch = currentNode.twitch;
		const currentWiki = currentNode.wiki;

		//group specific
		const currentShape = "dot";
		const currentType = "talent";
		const connectionCurrentType = "collab";
		const currentGraduation = currentNode.graduated.toLowerCase() === 'true' ? true : false;



		var nodeHTMLoutput = idText + currentIndex + typeText + currentType + groupText + currentGroup + labelText + currentName + graduationText + currentGraduation + youtubeText + currentYouTube + twitchText + currentTwitch + wikiText + currentWiki + endText;

		console.log(nodeHTMLoutput);

		outputNodeAcc.push(nodeHTMLoutput)


		//create edgges
		const edgeArray = currentNode.collabRef.toString().split(',');


		if (edgeArray != "") {

			for (let currentEdge of edgeArray) {

				var edgeHTMLoutput = fromText + currentIndex + toText + currentEdge + typeText + connectionCurrentType + endText;

				//console.log(edgeHTMLoutput);

				outputEdgeAcc.push(edgeHTMLoutput)

			}

		}; 


	}
};




//write to HTML

//for dev, much faster to copy paste from the html file when making local changes as you can't load modules on a local file system

//testHTMLNodeOutput(outputNodeAcc, outputEdgeAcc);




//write to JS (requires node) - use this once you have any formatting issues in your output fixed
//from the terminal use 

nodeWrite(outputNodeAcc, outputEdgeAcc);



/*
FUNCTIONS
-----------------------------------------------
*/

//output to html file for proofing

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


//output data to correctly formatted js file

function nodeWrite(outputNodeAcc, outputEdgeAcc) {
		
	//set so text has line breaks
	const nodeData = outputNodeAcc.join(',\n');
	const edgeData = outputEdgeAcc.join(',\n');

	//combine the info into one string for output
	const outputNodeEdge = "window.nodes = [\n" + nodeData + "\n];" + "\n\n" + "window.edges = [\n" + edgeData + "\n];";


	try {

		fs.writeFileSync('/Volumes/Data\ World\ 2/Documents/ GitHub/Vtuber-social-graph-D3/data/Data.js', outputNodeEdge);

		console.log('Files written successfully.');

	} catch (err) {
		console.log("Sorry couldn't write to file.")
		console.error(err)
	};
};


