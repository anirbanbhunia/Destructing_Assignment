let a = 15
let b = 20

function swap(x,y){
    let arr = [x,y]
    arr = [y,x]
    return arr
}
[a,b] = swap(a,b)
console.log(a,b)