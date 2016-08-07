
//console.log(process.argv)

var a = process.argv

// console.log(a)

var i
var sum = 0
for(i = 2; i < a.length; i++){
    sum += parseInt(a[i])
//    console.log(a[i])
}

console.log(sum)
