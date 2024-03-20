function depthFirstSearch(graph, startNode, targetNode) {
    
    let stack = [];
    let path = [];
    stack.push(startNode);
    path.push(startNode);
    let i = 0;
    
    while (true) {
        
        if (stack[stack.length - 1] == targetNode) {
            return path;
        }
        
        tmp = stack[stack.length - 1];
        stack.pop();
        
        for (let i = 0; i < graph[tmp].length; i++) { //push adjacent vertices to the stack
            stack.push(graph[tmp][i]);
            path.push(graph[tmp][i]);
            
            while (true) {
                if (stack[stack.length - 1] == targetNode) {
                    return path;
                }
                else {
                    stack.pop();
                    path.pop();
                }
                if (stack.length == 0) {
                    break;
                }
            }
        }
    
        if (graph.length == i) {
            return "Node not found."
        }
        
        i++;
        stack.push(graph[startNode + i]);
        path.push(i);
        path.push(graph[i][graph[i].length - 1])
    }
    
    return;
}


startNode = 0;

targetNode = 3;

graph = [[1,4],[3],[0],[2],[1,3]];

console.log(depthFirstSearch(graph, startNode, targetNode));
