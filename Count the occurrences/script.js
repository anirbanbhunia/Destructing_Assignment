const str = "I am Anirban Bhunia, I am from West Bengal. I am a web developer"

function count(str){
    let arr = str.split(" ")
    let m = new Map()
    arr.map((ele)=>{
        if(m.has(ele)){
            m.set(ele,m.get(ele)+1)
        }else{
            m.set(ele,1)
        }
    })
    return m
}
console.log(count(str))
