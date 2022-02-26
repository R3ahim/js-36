const first = {a:1, b:2};
const second = {a:1,b:2};
const third = first;
if(first == third){
    // console.log('objects are equal')
}
else{
    // console.log('objects are different');
};
const hell = JSON.stringify(first);
const hel = JSON.stringify(second)
if(JSON.stringify(first) === JSON.stringify(second)){
    console.log('there are aqual');
}
else{
    console.log('there are not aqual');
}