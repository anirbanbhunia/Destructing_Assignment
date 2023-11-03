const arr = [1,2,3,4,5,6,7,8]

function extract(arr){
    const [a,b,,,,,,c] = arr
    return [a,b,c]
}
console.log(extract(arr))
