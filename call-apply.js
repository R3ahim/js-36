const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense,boksis,tax) {
        
        this.money = this.money - expense -boksis - tax;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id:102,
    money:6000,
    name:'hero balam'
}
const normalGolam = {
    id:102,
    money:8000,
    name:'normal golam'
}


// // call
// kibria.treatDey.call(heroBalam,1200,120,90);
// kibria.treatDey.call(heroBalam,300,30,20);


// apply

kibria.treatDey.apply(heroBalam,[500,100,50])
kibria.treatDey.apply(heroBalam,[1000,200,100])

kibria.treatDey.apply(normalGolam,[1000,300,200]);
window.console.log('nothodflsadjfl');