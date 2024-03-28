
describe('`sdfs`', () => {
    // unit test:
    it('dfs `[[1,4],[3],[0],[2],[1,3]]` ', () => {
        expect(dfs([[1,4],[3],[0],[2],[1,3]]), 0, 2).to.deep.equal([ 0, 1, 4, 3, 2 ])
    })
})
