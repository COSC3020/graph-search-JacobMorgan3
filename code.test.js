const code = require("./code.js");
const assert = require("assert");

//function for arrayEqualTo
function arrayEqual(a, b) {
  return JSON.stringify(a) == JSON.stringify(b); 
}

//assign values for graph, startNode, targetNode
let graph = [[1,4],[3],[0],[2],[1,3]];
let startNode = 0;
let targetNode = 0;

let a = code.depthFirstSearch(graph, startNode, targetNode);
let b = [0];

//test if startNode == targetNode then return []
assert(arrayEqual(a,b));
