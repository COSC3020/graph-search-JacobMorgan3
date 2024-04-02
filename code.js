function depthFirstSearch(graph, startNode, targetNode) {
    
    let isThere = false;
    let stack = [];
    let visited = [];
    stack.push(startNode);
    
    //let count = 1;
    while (stack.length > 0) {
        //console.log("loop " + count);
        visited.push(stack[stack.length - 1]);
        if (stack[stack.length - 1] == targetNode) {
            return visited;
        }
        
        let tmp = stack[stack.length - 1];
        //console.log("tmp: " + tmp);
        stack.pop();
        for (let i = 0; i < graph[tmp].length; i++) { //look at adjacent nodes
            if (alreadyInVisited(graph, visited, tmp) == false) {
                stack.push(graph[tmp][i]);
            }
        }
        //count++;
        //console.log("visited: " + visited);
        //console.log("stack: " + stack);
    }
    
    return [];
}


function alreadyInVisited (graph, visited, tmp) { //function to see if a node is already in the array visited
    for (let i = 0; i < visited.length; i++) { //loop through visited
        if (visited[i] != graph[tmp][i]) {
        }
        else return true;
    }
    return false;
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
module.exports = {depthFirstSearch, breadthFirstSearch, alreadyInVisited};
