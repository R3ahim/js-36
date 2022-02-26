const bottle ={
    color:'yellow',
    hold:'water',
    price:50,
    isCleand:true
};

/* 
for(let i =0; i<10; i++){};
for(const num of numbers){};// array
for(const prop in student)// object
*/
for(const prop in bottle){
    // console.log(prop);
    // console.log(prop,bottle[prop]);
}
const keys = Object.keys(bottle);
for(const prop of keys){
    // console.log(prop,bottle[prop]);
}

const entries = Object.entries(bottle);
// console.log(entries);

for(const [key,values] of Object.entries(bottle)){
    console.log(key,values);
}