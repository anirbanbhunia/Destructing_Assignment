const inp =  [18,15,182,30,80,11]

function maxMin(arr){
    let mx = Math.max(...arr)
    let min = Math.min(...arr)
    return {max: mx, min:min}
}
console.log(maxMin(inp))