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
    ,
    {
        name:"Ahmed",
        age:"20",
        track:"Full stack MERN"
    }
]

localStorage.setItem("first member",JSON.stringify(arr[0]))
localStorage.setItem("second member",JSON.stringify(arr[1]))
localStorage.setItem("third member",JSON.stringify(arr[2]));
let students = [
    {
        name: "moaid",
        age: 22,
        email:"moaid@gmail.com",
        track:"MERN"
    },
   
];
localStorage.setItem('member1', JSON.stringify(students[0]));
