const arr = [1,2,3,4,5,6,2,5,19,1]

function unique(arr){
    return new Set(arr)
}
console.log(unique(arr))
