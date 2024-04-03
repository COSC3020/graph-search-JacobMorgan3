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
big $\Theta(V^2)$ Because I have a while loop that at most would iterate V times, with one for loop in it that iterates over all the nodes so V * V. So we get $V * V$, big $\Theta(V^2)$

## Bonus

Implement and analyze breadth-first search.

### Worst Case Runtime BFS
big $\Theta(V^2)$
I have a while loop that loops at most V times. In the while loop I have a for loop that at the worse could iterate V times. Then a for loop that calls a function with a for loop in it. So the outer for loop iterates over the number of nodes in the graph, V and the inner loop iterates over the visited nodes, so at the worst V. Over all we have $V^2 + V^3$ so we get big $\Theta(V^3)$
