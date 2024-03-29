[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/M24O3lId)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no parth from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

### Worst Case Runtime DFS 
I followed an algorithm instructions online to write DFS, I then used DFS to write BFS. 
big $\Theta(V^3)$ Because I have a while loop with two for loops inside it and one for loop nested in the other. At most we will go through all the nodes in the first for loop, in the inner for loop at most we will go through V times, because that loop is going through the visited nodes, and the most visits we can have before ending the program is V, as in we visited all nodes and didn't find the target. The while loop happens at most V times, so we have V * V * V

## Bonus

Implement and analyze breadth-first search.

### Worst Case Runtime BFS
big $\Theta(V^3)$
I have a while loop with two for loops in it, one nested in the other. The while loop happens at most V times. The first for loop happens at most V times as well (if every node was connected). the second for loop happens at most V times (if we visited all nodes and dont find it). So we get V * V * V
