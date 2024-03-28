function depthFirstSearch(graph, startNode, targetNode) {
    
    let isThere = false;
    let stack = [];
    let visited = [];
    stack.push(startNode);
    
    while (stack.length > 0) {
        console.log("new loop");
        visited.push(stack[stack.length - 1]);
        if (stack[stack.length - 1] == targetNode) {
            return visited;
        }
        
        let tmp = stack[stack.length - 1];
        stack.pop();
        for (let i = 0; i < graph[tmp].length; i++) {
            for (let j = 0; j < visited.length; j++) {
                if (visited[j] == graph[tmp][i]) {
                    isThere = true;
                }
            } 
            if (isThere == false) { // if not already in visited push it to the stack
                stack.push(graph[tmp][i]);
                //visited.push(graph[tmp][i]);
            }
        }
        console.log("visited: " + visited);
        console.log("stack: " + stack);
    }
}



startNode = 0;

targetNode = 1;

graph = [[1,4],[3],[0],[2],[1,3]];

console.log(depthFirstSearch(graph, startNode, targetNode));

