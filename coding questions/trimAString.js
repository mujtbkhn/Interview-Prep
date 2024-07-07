//trim a string without using inbuilt trim

const string = "     abdul rehman mujtaba khan    "
// console.log(string.trim())
let start = 0;
let end = string.length - 1
let tempString = ""
while (start < string.length && string[start] === ' ') {
    start++
}

while (end < string.length && string[end] === ' ') {
    end--;
}

for (let i = start; i <= end; i++) {
    

        tempString += string[i]
    
}

console.log(tempString)