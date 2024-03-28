function depthFirstSearch(graph, startNode, targetNode) {
    
    let stack = [];
    let visited = [];
    let unvisited = [];
    for (let i = 0; i < graph.length; i++) {
        unvisited.push(graph[i]);
    }
    let isThere = false;
    
    stack.push(startNode);
    
    
    while (unvisited.length != 0) {
        visited.push(stack[stack.length - 1]);
        unvisited.pop();
        if (stack[stack.length - 1] == targetNode) {
        return visited;
        }
        stack.pop();
        
        for (let i = 0; i < graph[visited[visited.length - 1]].length; i++) { //put adjacent nodes on the stack
            for (let j = 0; j < visited.length; j++) {
                if (visited[j] == graph[visited[visited.length - 1]][i]) {
                    isThere = true;
                }
            }
            if (isThere == false) { // if not already in visited push it to the stack
                stack.push(graph[visited[visited.length - 1]][i]);
            }
        }
        isThere = false; //set isThere back to false for the next loop 
        
        
        console.log("new loop")
        console.log("visited: " + visited);
        console.log("stack: " + stack);   
    }
    return [];
}
    


startNode = 0;

targetNode = 7;

graph = [[1,4],[3],[0],[2],[1,3]];

console.log(depthFirstSearch(graph, startNode, targetNode));

