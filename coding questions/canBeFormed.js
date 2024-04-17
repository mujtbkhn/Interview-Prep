//question : find if one string can be formed by other string by rearranging the letters don't use any built in methods
// input and output
// "aaz" "zza" => false
// "qwerty" "qrwety" => true

function canBeFormed(str1, str2) {
    if (str1.length !== str2.length) {
        console.log(false)
        return false
    }
    let count1 = {}
    let count2 = {}

    for (let char of str1) {
        count1[char] = (count1[char] || 0) + 1
    }

    for (let char of str2) {
        count2[char] = (count2[char] || 0) + 1
    }

    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true

}
// canBeFormed("aaz", "zza")
canBeFormed("qwerty", "qrwety")
