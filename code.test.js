const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array nat", function(arr) {
        return JSON.stringify(depthFirstSearch(arr, startNode, targetNode)) == [ 0, 1, 4, 3, 2 ];
    });
jsc.assert(test);
