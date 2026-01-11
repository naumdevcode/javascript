let valores = [5, 7, 9, 1, 4, 2]
valores.sort()
// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}