const should = require('should')
const findOders = require('../src/findOders')
describe('find oders', ()=>{
    it('sum orders',() =>{
        const arr = [1.7889, 30.51]
        findOders.sumOders(arr).should.be.equal(32.2989)
    })
    it('find item in oders list return Item not found', () =>{
        findOders.findItemOderList("broom").should.be.equal('Item not found')
    })
    it('find item and return item', ()=>{
        findOders.findItemOderList("Chicken").should.be.equal('{"name":"Chicken pizza","value":0}')
    })
})