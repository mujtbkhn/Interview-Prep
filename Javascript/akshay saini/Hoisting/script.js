
console.log(x) //undefined
getName() //fn in global space
console.log(getName2) //undefined as will behave like a variable
console.log(getName3) //undefined as will behave like a variable

var x = 7

function getName() {
    console.log("mujtaba")
}

var getName2 = () => {
    console.log("khan")
}

var getName3 = function (){
    console.log("abdul")
}