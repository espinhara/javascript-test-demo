const should = require('should')
const findOders = require('../src/findOders')
describe('find oders', ()=>{
    it('sum orders',() =>{
        const arr = [1.78, 30.5]
        const value = (arr) => {
            let val = 0
            arr.map(e=>{ val += e})
            return val
        }
        findOders.sumOders(arr).should.be.equal(value(arr))
    })
})