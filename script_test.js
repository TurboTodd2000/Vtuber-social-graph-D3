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

const groupStyles = {

	INTERESTS: {
		fill: "grey",
		label: "black",
		edge: "grey",
	},

	DENTSU: {
		fill: "blue",
		label: "white",
		edge: "blue",
	},

	NOVA: {
		fill: "red",
		label: "white",
		edge: "red",
	},

	BEASTIEZ: {
		fill: "purple",
		label: "white",
		edge: "purple",
	},

	VICHIBAN: {
		fill: "yellow",
		label: "black",
		edge: "yellow",
	},

	INDIES: {
		fill: "orange",
		label: "black",
		edge: "orange",
	},

	NEUROVERSE: {
		fill: "darkgreen",
		label: "white",
		edge: "darkgreen",
	},

	INDO_GIRLYPOPS: {
		fill: "DarkOrchid",
		label: "white",
		edge: "DarkOrchid",
	},

	HOLOLIVE: {
		fill: "green",
		label: "white",
		edge: "green",
	},

	FLESHTUBERS: {
		fill: "firebrick",
		label: "white",
		edge: "firebrick",
	},

	LAB_BRATS: {
		fill: "LightSeaGreen",
		label: "white",
		edge: "LightSeaGreen",
	},

	VSHOJO: {
		fill: "black",
		label: "white",
		edge: "black",
	},

	CRASHOUT_CREW: {
		fill: "Turquoise",
		label: "black",
		edge: "Turquoise",
	},

	TERI_YAKI: {
		fill: "SkyBlue",
		label: "black",
		edge: "SkyBlue",
	},

	VEIN_GANG: {
		fill: "Moccasin",
		label: "white",
		edge: "Moccasin",
	},

};


// ========================================
// STYLE HELPERS
// ========================================

function getNodeFill(d) {

	return groupStyles[d.group]?.fill || "#777";

}


function getLabelColor(d) {

	return groupStyles[d.group]?.label || "black";

}


function getEdgeColor(d) {

	return groupStyles[d.group]?.edge || "#999";

}


// ========================================
// FORCE SIMULATION
// ========================================

const simulation = d3.forceSimulation(allNodes)

	.force(
		"link",
		d3.forceLink(allEdges)
			.id(d => d.id)
			.distance(220)
	)

	.force(
		"charge",
		d3.forceManyBody().strength(-900)
	)

	.force(
		"center",
		d3.forceCenter(width / 2, height / 2)
	)

	.force(
		"collision",
		d3.forceCollide().radius(d => {

			if (d.type === "talent") return 70;
			if (d.type === "group") return 80;
			if (d.type === "interests") return 60;

			return 50;

		})
	)

	.force(
	"link",
	d3.forceLink(allEdges)
		.id(d => d.id)
		.distance(220)
		.strength(0.15)
)

	.force(
		"talentX",
		d3.forceX(d => {

			if (d.type === "talent") {
				return width * 0.5;
			}

			return width * 0.5;

		}).strength(0.03)
	)

	.force(
		"layerY",
		d3.forceY(d => {

			if (d.type === "group") {
				return height * 0.2;
			}

			if (d.type === "talent") {
				return height * 0.5;
			}

			if (d.type === "interests") {
				return height * 0.8;
			}

			return height * 0.5;

		}).strength(0.08)
	);




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
		.attr("stroke-width", 1.5)
		.attr("stroke-linecap", "round");


	const linkMerge = linkEnter.merge(link);


	linkMerge
		.attr("stroke", d => getEdgeColor(d))
		.style("opacity", d => {

			if (!neighborhood) return 0.35;

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
		.attr("r", 35)
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
		.attr("fill", d => getLabelColor(d))
		.style("font-size", "14px")
		.style("font-family", "Arial")
		.style("font-weight", "bold")
		.text(d => d.label || d.id);


	talentNodes.each(function(d) {

		const group = d3.select(this);

		const text = group.select("text");

		const bbox = text.node().getBBox();

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

		
		.attr("fill", d => getLabelColor(d))
		.style("font-size", d => {

			if (d.type === "group") return "20px";
			if (d.type === "interests") return "18px";

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

		talentName.innerHTML =
			`<span class="talentButton name">${d.label || "Unknown"}</span>`;


		youtubeLink.href = d.youtube || "#";

		youtubeLink.innerHTML =
			`<span class="talentButton">${d.youtube ? "YouTube" : "No YouTube"}</span>`;


		twitchLink.href = d.twitch || "#";

		twitchLink.innerHTML =
			`<span class="talentButton">${d.twitch ? "Twitch" : "No Twitch"}</span>`;

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