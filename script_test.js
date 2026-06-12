// ========================================
// DATA
// ========================================

const allNodes = window.nodes;
const allEdges = window.edges;


// ========================================
// SVG SETUP
// ========================================

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#mynetwork")
.attr("width", width)
.attr("height", height)
.attr("viewBox", [0, 0, width, height]);


// ========================================
// ROOT CONTAINERS
// ========================================

const container = svg.append("g");

const linkLayer = container.append("g")
.attr("class", "link-layer");

const nodeLayer = container.append("g")
.attr("class", "node-layer");


// ========================================
// ZOOM / PAN
// ========================================

svg.call(
	d3.zoom()
	.scaleExtent([0.1, 5])
	.on("zoom", (event) => {
		container.attr("transform", event.transform);
	})
	);


// ========================================
// CLEAR FOCUS ON BACKGROUND CLICK
// ========================================

svg.on("click", (event) => {

	if (event.target.tagName === "svg") {

		state.focusNode = null;
		updateGraph();

	}

});


// ========================================
// NODE LOOKUP
// ========================================

const nodeById = new Map(
	allNodes.map(n => [n.id, n])
	);


// ========================================
// APP STATE
// ========================================

let state = {
	mode: "group",
	focusNode: null,
};


// ========================================
// GROUP STYLE REGISTRY
// ========================================

const style = {

//formal

	BEASTIEZ: {
		talent: {
			node: { fill: "#029C94" },
			label: { fill: "black" }
		},
		group: {
			node: { fill: "#029C94" },
			label: { fill: "white" }
		}
	},


	DENTSU: {
		talent: {
			node: { fill: "#036DC4" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#036DC4" },
			label: { fill: "white" }
		}
	},


	HOLOLIVE: {
		talent: {
			node: { fill: "#020A9C" },
			label: {
				fill: "white",
				size: 14
			}
		},

		group: {
			node: {
				fill: "#020A9C",
				radius: 35
			},
			label: {
				fill: "white",
				size: 20
			}
		}
	},


	LAB_BRATS: {
		talent: {
			node: { fill: "#5A03C4" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#5A03C4" },
			label: { fill: "white" }
		}
	},


	NEUROVERSE: {
		talent: {
			node: { fill: "#94029C" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#94029C" },
			label: { fill: "white" }
		}
	},


	NOVA: {
		talent: {
			node: { fill: "#C4036D" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#C4036D" },
			label: { fill: "white" }
		}
	},


	SOCKS: {
		talent: {
			node: { fill: "#9C020A" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#9C020A" },
			label: { fill: "white" }
		}
	},


	VICHIBAN: {
		talent: {
			node: { fill: "#C45A03" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#C45A03" },
			label: { fill: "white" }
		}
	},



//informal


	EN_GIRLYPOPS: {
		talent: {
			node: { fill: "#ABF877" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#ABF877" },
			label: { fill: "white" }
		}
	},



	FLESHTUBERS: {
		talent: {
			node: { fill: "#9EFAA7" },
			label: { fill: "black" }
		},
		group: {
			node: { fill: "#9EFAA7" },
			label: { fill: "white" }
		}
	},


	INDIES: {
		talent: {
			node: { fill: "#F1FA9E" },
			label: { fill: "black" }
		},
		group: {
			node: { fill: "#F1FA9E" },
			label: { fill: "white" }
		}
	},


	INDO_GIRLYPOPS: {
		talent: {
			node: { fill: "#9EF1FA" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#9EF1FA" },
			label: { fill: "white" }
		}
	},







	VEIN_GANG: {
		talent: {
			node: { fill: "#C477F8" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#C477F8" },
			label: { fill: "white" }
		}
	},

	VSHOJO: {
		talent: {
			node: { fill: "black" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "black" },
			label: { fill: "white" }
		}
	},

	SLOPPY_SISTERS: {
		talent: {
			node: { fill: "#FAA79E" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#FAA79E" },
			label: { fill: "white" }
		}
	},


	CHAOS_CREW: {
		talent: {
			node: { fill: "#F877AB" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "#F877AB" },
			label: { fill: "white" }
		}
	},




//non talent/group nodes

	INTERESTS: {
		talent: {
			node: { fill: "grey" },
			label: { fill: "white" }
		},
		group: {
			node: { fill: "grey" },
			label: { fill: "white" }
		}
	},

};



// ========================================
// STYLE HELPERS
// ========================================



function getNodeFill(d) {
	return (
		style[d.group]?.[d.type]?.node?.fill ||
		"#777"
		);
}

function getLabelFill(d) {
	return (
		style[d.group]?.[d.type]?.label?.fill ||
		"white"
		);
}

function getEdgeColor(d) {

	const source =
	typeof d.source === "object"
	? d.source
	: nodeById.get(d.source);

	return (
		style[source?.group]?.[source?.type]?.node?.fill ||
		"#999"
		);

}


function getGroupRadius(d) {
	return d.subgroup ? 20 : 35;
}

function getGroupLabelSize(d) {
	return d.subgroup ? 14 : 20;
}




// ========================================
// FILTERING
// ========================================

function getVisibleNodes() {

	return allNodes.filter(node => {

		if (node.type === "talent") {
			return true;
		}

		if (state.mode === "group") {
			return node.type === "group";
		}

		if (state.mode === "interests") {
			return node.type === "interests";
		}

		if (state.mode === "collab") {
			return false;
		}

		return false;

	});

}


function getVisibleEdges(visibleNodeIds) {

	return allEdges.filter(edge => {

		const sourceId =
		typeof edge.source === "object"
		? edge.source.id
		: edge.source;

		const targetId =
		typeof edge.target === "object"
		? edge.target.id
		: edge.target;

		if (edge.type !== state.mode) {
			return false;
		}

		return (
			visibleNodeIds.has(sourceId) &&
			visibleNodeIds.has(targetId)
			);

	});

}



// ========================================
// DEGREE (FOR ATLAS-LIKE LAYOUT)
// ========================================

const degree = new Map();
allNodes.forEach(n => degree.set(n.id, 0));

allEdges.forEach(e => {

	const s = typeof e.source === "object" ? e.source.id : e.source;
	const t = typeof e.target === "object" ? e.target.id : e.target;

	degree.set(s, (degree.get(s) || 0) + 1);
	degree.set(t, (degree.get(t) || 0) + 1);

});



// ========================================
// FORCE SIMULATION
// ========================================

//this section controls the physics sim

const simulation = d3.forceSimulation(allNodes)

//this controls the strength of the edge force attracting nodes
.force(
	"link",
	d3.forceLink(allEdges)
	.id(d => d.id)
	.distance(d => {
		const s = d.source.id || d.source;
		const t = d.target.id || d.target;
		return 10 + (degree.get(s) + degree.get(t)) * 6;
	})
	.strength(0.275)
	)

//attraction is negative, repulsion is positive
.force(
	"charge",
	d3.forceManyBody().strength(d => {
		return -500 * Math.sqrt(degree.get(d.id) || 1);
	})
	)

//these two pull nodes to the center
.force(
	"x", 
	d3.forceX(width / 10).strength(0.05)
	)

.force(
	"y", 
	d3.forceY(height / 10).strength(0.05)
	)

//this controls placement relative to the viewport
.force(
	"center",
	d3.forceCenter(width / 3, height / 3)
	)

//does what it says, controls how hard nodes repel eachother on contact
.force(
	"collision",
	d3.forceCollide().radius(d => {
		if (d.type === "talent") return 60;
		if (d.type === "group") return 70;
		return 50;
	})
	)

//these are the dampining forces
.alphaDecay(0.03)
.velocityDecay(0.45);



// ========================================
// NEIGHBORHOOD
// ========================================

function getNeighborhood(nodeId) {

	const neighbors = new Set([nodeId]);

	const filteredEdges = allEdges.filter(edge => {

		return edge.type === state.mode;

	});

	filteredEdges.forEach(edge => {

		const sourceId =
		typeof edge.source === "object"
		? edge.source.id
		: edge.source;

		const targetId =
		typeof edge.target === "object"
		? edge.target.id
		: edge.target;

		if (sourceId === nodeId) neighbors.add(targetId);
		if (targetId === nodeId) neighbors.add(sourceId);

	});

	return neighbors;
}



// ========================================
// MAIN UPDATE
// ========================================

function updateGraph() {

	const visibleNodes = getVisibleNodes();

	const visibleNodeIds = new Set(
		visibleNodes.map(n => n.id)
		);

	const visibleEdges = getVisibleEdges(visibleNodeIds);


	let neighborhood = null;

	if (state.focusNode !== null) {
		neighborhood = getNeighborhood(state.focusNode);
	}


	// ========================================
	// LINKS
	// ========================================

	const link = linkLayer
	.selectAll(".link")
	.data(
		visibleEdges,
		d => {

			const sourceId =
			typeof d.source === "object"
			? d.source.id
			: d.source;

			const targetId =
			typeof d.target === "object"
			? d.target.id
			: d.target;

			return `${sourceId}-${targetId}-${d.type}`;

		}
		);


	link.exit().remove();


	const linkEnter = link.enter()
	.append("line")
	.attr("class", "link")
	//how thick the edges are
	.attr("stroke-width", 2.5)
	.attr("stroke-linecap", "round")
	.attr("stroke-dasharray", d =>
		d.dashes ? "6,4" : null
		);


	const linkMerge = linkEnter.merge(link);


	linkMerge
	.attr("stroke", d => getEdgeColor(d))
	.style("opacity", d => {

//opacity of the edges
		if (!neighborhood) return 0.5;

		const sourceId =
		typeof d.source === "object"
		? d.source.id
		: d.source;

		const targetId =
		typeof d.target === "object"
		? d.target.id
		: d.target;

		return (
			neighborhood.has(sourceId) &&
			neighborhood.has(targetId)
			)
		? 1
		: 0.05;

	});


	// ========================================
	// NODES
	// ========================================

	const node = nodeLayer
	.selectAll(".node")
	.data(
		visibleNodes,
		d => d.id
		);


	node.exit().remove();


	const nodeEnter = node.enter()
	.append("g")
	.attr("class", "node")
	.call(drag(simulation));


	// these sections control node attributes for display

	// ========================================
	// INTEREST NODES
	// ========================================

	nodeEnter
	.filter(d => d.type === "interests")
	.append("circle")
	.attr("r", 30)
	.attr("fill", d => getNodeFill(d));


	// ========================================
	// GROUP NODES
	// ========================================

	nodeEnter
	.filter(d => d.type === "group")
	.append("circle")
	.attr("r", d => getGroupRadius(d))
	.attr("fill", d => getNodeFill(d));


	// ========================================
	// TALENT NODES
	// ========================================

	const talentNodes = nodeEnter
	.filter(d => d.type === "talent");


	talentNodes.append("text")
	.attr("class", "talent-label")
	.attr("text-anchor", "middle")
	.attr("dominant-baseline", "middle")
	
	.attr("fill", d => getLabelFill(d))
	
	
	//this handles the label type size
	.style("font-size", d => {

		if (d.type === "group") {
			return `${getGroupLabelSize(d)}px`;
		}

		if (d.type === "interests") {
			return "20px";
		}

		return "14px";
	})

	.style("font-family", "Arial")
	.style("font-weight", "bold")
	.text(d => d.label || d.id);


	talentNodes.each(function(d) {

		const group = d3.select(this);

		const text = group.select("text");

		const textNode = text.node();

		if (!textNode) return;

		const bbox = textNode.getBBox();

		const paddingX = 14;
		const paddingY = 8;

		group.insert("rect", "text")
		.attr("x", bbox.x - paddingX)
		.attr("y", bbox.y - paddingY)
		.attr("width", Math.max(
			80,
			bbox.width + (paddingX * 2)
			))
		.attr("height", bbox.height + (paddingY * 2))
		.attr("rx", 10)
		.attr("fill", d => getNodeFill(d));

	});


	// ========================================
	// NON TALENT LABELS
	// ========================================

	nodeEnter
	.filter(d => d.type !== "talent")
	.append("text")
	.attr("text-anchor", "middle")



	.attr("y", d => {

		if (d.type === "group") return 55;
		if (d.type === "interests") return 50;

		return 0;

	})


	.attr("fill", d => getLabelFill(d))
	

	.style("font-size", d => {

		if (d.type === "group") return "20px";
		if (d.type === "interests") return "20px";

		return "14px";

	})
	.style("pointer-events", "none")
	.text(d => d.label || d.id);


	const nodeMerge = nodeEnter.merge(node);


	// ========================================
	// NEIGHBORHOOD FOCUS
	// ========================================

	nodeMerge.style("opacity", d => {

		if (!neighborhood) return 1;

		return neighborhood.has(d.id) ? 1 : 0.1;

	});


	// ========================================
	// NODE CLICK
	// ========================================

	nodeMerge.on("click", (event, d) => {

		d3.select(event.currentTarget).raise();


		event.stopPropagation();


		if (state.focusNode === d.id) {

			state.focusNode = null;

		} else {

			state.focusNode = d.id;

		}

		updateGraph();


		// ========================================
		// INFO PANEL
		// ========================================

		const talentName =
		document.getElementById("talentName");

		const youtubeLink =
		document.getElementById("youtubeLink");

		const twitchLink =
		document.getElementById("twitchLink");


		talentName.href = d.wiki || "#";

		talentName.innerHTML = 	`<span class="talentButton name">${d.label || "Unknown"}</span>`;


		youtubeLink.href = d.youtube || "#";

		youtubeLink.innerHTML = `<span class="talentButton">${d.youtube ? "YouTube" : "No YouTube"}</span>`;


		twitchLink.href = d.twitch || "#";

		twitchLink.innerHTML = `<span class="talentButton">${d.twitch ? "Twitch" : "No Twitch"}</span>`;

	});


	// ========================================
	// SIMULATION UPDATE
	// ========================================

	simulation.nodes(visibleNodes);

	simulation.force("link")
	.links(visibleEdges);

	simulation.alpha(0.7).restart();


	// ========================================
	// TICK
	// ========================================

	simulation.on("tick", () => {

		linkMerge
		.attr("x1", d => d.source.x)
		.attr("y1", d => d.source.y)
		.attr("x2", d => d.target.x)
		.attr("y2", d => d.target.y);


		nodeMerge.attr(
			"transform",
			d => `translate(${d.x},${d.y})`
			);

	});

}


// ========================================
// DRAGGING
// ========================================

function drag(simulation) {

	function dragstarted(event, d) {

		if (!event.active) {
			simulation.alphaTarget(0.3).restart();
		}

		d.fx = d.x;
		d.fy = d.y;

	}


	function dragged(event, d) {

		d.fx = event.x;
		d.fy = event.y;

	}


	function dragended(event, d) {

		if (!event.active) {
			simulation.alphaTarget(0);
		}

		d.fx = null;
		d.fy = null;

	}


	return d3.drag()
	.on("start", dragstarted)
	.on("drag", dragged)
	.on("end", dragended);

}


// ========================================
// RADIO BUTTONS
// ========================================

document
.querySelectorAll('input[name="edgesFilter"]')
.forEach(radio => {

	radio.addEventListener("change", e => {

		state.mode = e.target.value;

		const legend =
		document.getElementById("legend");

		if (state.mode === "group") {

			legend.style.display = "none";

		} else {

			legend.style.display = "flex";

		}

		updateGraph();

	});

});


// ========================================
// INITIAL DRAW
// ========================================

updateGraph();