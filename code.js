function depthFirstSearch(graph, startNode, targetNode) {
    
    let isThere = false;
    let stack = [];
    let visited = [];
    stack.push(startNode);
    
    while (visited.length < graph.length) {
        console.log("new loop");
        visited.push(stack[stack.length - 1]);
        if (stack[stack.length - 1] == targetNode) {
            return visited;
        }
        
        let tmp = stack[stack.length - 1];
        stack.pop();
        for (let i = 0; i < graph[tmp].length; i++) { //look at adjacent nodes
            if (visited[i] == "") { //if not visited then add to the stack
                stack.push(graph[tmp][i]);
            }
        }
        console.log("visited: " + visited);
        console.log("stack: " + stack);
    }
    
    return [];
}



//startNode = 0;

//targetNode = 2;

//graph = [[1,4],[3],[0],[2],[1,3]];

//console.log(breadthFirstSearch(graph, startNode, targetNode));


function breadthFirstSearch (graph, startNode, targetNode) {
    let isThere = false;
    let visited = [];
    let queue = [];
    queue.push(startNode);
    let count = 1;
    while (queue.length > 0) {
        //console.log("loop number: " + count);
        visited.push(queue[0]);
        if (queue[0] == targetNode) {
            return visited;
        }
        let tmp = queue.shift();
        
        for (let i = 0; i < graph[tmp].length; i++) {
            //console.log(graph[tmp][i]);
            for (let j = 0; j < visited.length; j++) {
                //console.log("here");
                if (visited[j] == graph[tmp][i]) {
                    isThere = true;
                }
            } 
            if (isThere == false) { // if not already in visited push it to the queue
                queue.push(graph[tmp][i]);
                //console.log("added to the queue: " + graph[tmp][i]);
            }
        }
        isThere = false;
        //console.log("visited: " + visited);
        //console.log("queue: " + queue);
        count++;
    }
    
    return [];
}



//add so i can test functions
module.exports = {depthFirstSearch, breadthFirstSearch};
