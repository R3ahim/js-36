const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        
        this.money = this.money - expense;
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


kibria.treatDey(100)

const heroTreatDey = kibria.treatDey.bind(heroBalam);

heroTreatDey(500)
heroTreatDey(100)
heroTreatDey(500)
kibria.treatDey(1000);
const normaTreatDey = kibria.treatDey.bind(normalGolam);
normaTreatDey(100);
