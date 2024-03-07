function depthFirstSearch(graph, startNode, targetNode) {
    
    let stack = [];
    let path = [];
    stack.push(startNode);
    path.push(startNode);
    
    while (stack.length > 0) {
        if (stack.length == targetNode) {
            return path;
        }
        for (let i = 0; i < stack[stack.length].length; i++) { //push adjacent vertices to the stack
            stack.push(i)
        }
        stack.pop(stack.length); //remove the vertix we are currently at
        
        
        
    }
    
    return [];
}


startNode = 0;

targetNode = 2;

graph = [[1,2], [0,2], [0,1]];

console.log(depthFirstSearch(graph, startNode, targetNode));
