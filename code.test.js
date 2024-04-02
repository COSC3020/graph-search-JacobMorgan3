const code = require("./code.js");
const assert = require("assert");

//function for arrayEqualTo
function arrayEqual(a, b) {
  return JSON.stringify(a) == JSON.stringify(b); 
}

//function for noRepeated nodes in answer path
function noRepeats (a, b, c) {
    let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        count++;
      }
    }
  }
  return count == c;
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
b = [ 0, 4, 3, 2 ];
c = 4;

//test 
assert(noRepeats(a,b));





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
b = [ 0, 1, 4, 3, 2 ]; //answer 
c = 5; //should be 5 repeats, no more

//test 
assert(noRepeats(a,b));
