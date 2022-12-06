let data=[
    {
        name:"a",
        stage:1
    },
    {
        name:"b",
        stage:2
    }
]
// console.log(data.filter(e=>e.stage==1).map(d=>{
//     return d.name
// }))

let temp=data
temp.splice(0,1)
console.log(temp)
let a=10
var b = parseFloat((a/60/1440*100).toFixed(2));
console.log(b)