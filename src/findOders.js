const oderList = [
    {name :'Chicken pizza', value: 0},
    {name :'Pepperoni pizza with catupiry', value: 0},
    {name :'Pepperoni pizza', value: 0},
    {name :'chocolate pizza', value: 0},
    {name :'Portuguese pizza', value: 0},
    {name :'Brazilian pizza', value: 0},
    {name :'Italian pizza', value: 0},
    {name :'Broccoli pizza with bacon', value: 0},

]

const sumOders = (arr)=>{
    let value= 0
    arr.map(e=>{
        value += e
    })
    return value;
}
const findItemOderList = (item)=>{
    let has = oderList.filter(f=> f.name.replace(' pizza', '') == item)
    let message = ''
    has.length != 0 && (message =  JSON.stringify(has[0]));
    has.length == 0 && (message = 'Item not found')

    return message
}

module.exports = {
    sumOders,
    findItemOderList
}