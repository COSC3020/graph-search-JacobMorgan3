const code = require(" ./code.js");
const assert = require("assert");

//test if startNode == targetNode then return []
assert(depthFirstSearch(graph, startNode, targetNode) == []);
