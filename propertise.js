const bottle ={
    color:'yellow',
    hold:'water',
    price:50,
    isCleand:true
};
// getting lall property name 
const keys = Object.keys(bottle);
// console.log(keys);

// get all values :

const vales = Object.values(bottle);
// console.log(vales);


// get keys and values 

const pairs = Object.entries(bottle);
// console.log(...pairs);
Object.seal(bottle);
bottle.price=100;
bottle.height=10.23;
delete bottle.isCleand;
console.log(bottle);