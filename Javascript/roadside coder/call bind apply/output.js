//ques 1

const person = { name: "mujtaba" }
function sayHi(age) {
    return `${this.name} is ${age}`
}

// console.log(sayHi.call(person, 22));
// console.log(sayHi.bind(person, 22));

//mujtaba is 22
//returns a function

//ques 2

const age = 10;
var person1 = {
    name: "Abdullah",
    age: 20,
    getAge: function () {
        return this.age
    }
}

var person2 = { age: 25 }

// console.log(person1.getAge.call(person2))

//25 because getAge will now point at person2 for values because of call

//ques 3

var status = '🫨'

setTimeout(()=>{
    const status = '😱'

    const data={
        status:"🛀🏼",
        getStatus(){
            return this.status
        }
    }
    console.log(data.getStatus()); //🛀🏼
    console.log(data.getStatus.call(this)); //🫨
}, 0)
