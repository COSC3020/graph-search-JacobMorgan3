const code = require("./code.js");
const assert = require("assert");

//function for arrayEqualTo
function arrayEqual(a, b) {
  return JSON.stringify(a) == JSON.stringify(b); 
}

//////////////Test to check for duplicates taken from Stack Overflow
function NoRepeats(a) {
  return a.length === new Set(a).size;
}


///////////////////////////////////////////////// DFS Test 1: if startNode is the targetNode, then return startNode /////////////////////////////////
//assign values for graph, startNode, targetNode
let graph = [[1,4],[3],[0],[2],[1,3]];
let startNode = 0;
let targetNode = 0;

let a = code.depthFirstSearch(graph, startNode, targetNode);
let b = [0];

//test 
assert(arrayEqual(a,b));


///////////////////////////////////////////////// DFS Test 2: if targetNode is not there then return [] /////////////////////////////////
//assign values for graph, startNode, targetNode
graph = [[1,4],[3],[0],[2],[1,3]];
startNode = 0;
targetNode = 7;

a = code.depthFirstSearch(graph, startNode, targetNode);
b = [];

//test 
assert(arrayEqual(a,b));


///////////////////////////////////////////////// DFS Test 3: The answer should not have repeated nodes /////////////////////////////////
//assign values for graph, startNode, targetNode
graph = [[1,4],[3],[0],[2],[1,3]];
startNode = 0;
targetNode = 2;

a = code.depthFirstSearch(graph, startNode, targetNode);

//test 
assert(NoRepeats(a));





///////////////////////////////////////////////// BFS Test 1: if startNode is the targetNode, then return startNode /////////////////////////////////
//assign values for graph, startNode, targetNode
graph = [[1,4],[3],[0],[2],[1,3]];
startNode = 0;
targetNode = 0;

a = code.breadthFirstSearch(graph, startNode, targetNode);
b = [0];

//test 
assert(arrayEqual(a,b));


///////////////////////////////////////////////// BFS Test 2: if targetNode is not there then return [] /////////////////////////////////
//assign values for graph, startNode, targetNode
graph = [[1,4],[3],[0],[2],[1,3]];
startNode = 0;
targetNode = 7;

a = code.breadthFirstSearch(graph, startNode, targetNode);
b = [];

//test 
assert(arrayEqual(a,b));


///////////////////////////////////////////////// BFS Test 3: The answer should not have repeated nodes /////////////////////////////////
//assign values for graph, startNode, targetNode
graph = [[1,4],[3],[0],[2],[1,3]];
startNode = 0;
targetNode = 2;

a = code.breadthFirstSearch(graph, startNode, targetNode);

//test 
assert(NoRepeats(a));
