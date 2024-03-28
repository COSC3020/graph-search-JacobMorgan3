const code = require("./code.js");
const assert = require("assert");

//assign values for graph, startNode, targetNode
let graph = [[1,4],[3],[0],[2],[1,3]];
let startNode = 0;
let targetNode = 0;



//test if startNode == targetNode then return []
assert(code.depthFirstSearch(graph, startNode, targetNode) == [0]);
