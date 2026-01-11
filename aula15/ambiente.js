var num = [5,8,4,6]
console.log(num)
num.push(7)
num[2]=11
console.log(num)
// console.log(num.sort())

let pos = num.indexOf(1)
if(pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor esta na posição ${pos}`)
}