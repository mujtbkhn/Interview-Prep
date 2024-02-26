function reciprocal(x){
    let reciprocal = ' '
    let asciiA = 65 //char codes
    let asciiZ = 90  //char codes

    for(let i=0; i<x.length; i++){
        let asciiX = x.charCodeAt(i) //char code founded

       let  reciprocalChar = asciiZ - asciiX + asciiA //char code
        reciprocal += String.fromCharCode(reciprocalChar) //String
    }
    console.log(reciprocal);
    return reciprocal
}
reciprocal('MUJTABA')