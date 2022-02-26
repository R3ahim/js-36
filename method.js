const student ={
    id:101,
    name:"kebria",
    money:5000,
    major:'mathmatics',
    isRich:false,
    subject:['english','econmics','math 101','calculus'],
    bestFriend:{
        name:'kudu',
        major:'mathmetics'
    },
    takeExamp : function(){
        console.log(this.name,'taking exam');
    },
    treatDay: function(exapence,bosis){
        this.money = this.money -exapence - bosis;
        return this.money
    }
}

student.takeExamp();
const remaining = student.treatDay(900,100);
const remaining1 = student.treatDay(500,50);
console.log(remaining1);