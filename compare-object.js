const first = {a:1, b:2};
const second = {a:1,b:2};
const third = first;
if(first == third){
    // console.log('objects are equal')
}
else{
    // console.log('objects are different');
};
// const hell = JSON.stringify(first);
// const hel = JSON.stringify(second)

const  first2 = {a:1, b:2};
const second2 =  {b:2,a:1 };

if(JSON.stringify(first2) === JSON.stringify(second2)){
    // console.log('there are aqual');
}
else{
    // console.log('there are not aqual');
}
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first2,second2);
console.log(isEqual);