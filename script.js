let arr =[
    {
        name:"ezz",
        age:"22",
        track:"MERN"
    }
    ,
    {
        name:"Hossam",
        age:"24",
        track:"MERN"
    }
]

localStorage.setItem("first member",JSON.stringify(arr[0]))
localStorage.setItem("second member",JSON.stringify(arr[1]))