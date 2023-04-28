console.clear()


let i =0;
function name() {
    console.log("Tall my")
    if(i < 5){
        i++
        name()
    }
}
name()

let myData = [
    {
        name:"Imad",
        lastName:"Alisawi",
       childs:[
        {
            name:"Imad",
            lastName:"Alisawi",
           
        },
        {
            name:"Amer",
            lastName:"Ali",
            
        },
        {
            name:"Alla",
            lastName:"Bagdad",
           
        },
    ]
    },
    {
        name:"Amer",
        lastName:"Ali",
        childs:[
            {
                name:"Imad",
                lastName:"Alisawi",
               
            },
            {
                name:"Amer",
                lastName:"Ali",
                
            },
            {
                name:"Alla",
                lastName:"Bagdad",
               
            },
        ]
    },
    {
        name:"Alla",
        lastName:"Bagdad",
        childs:[
            {
                name:"Imad",
                lastName:"Alisawi",
               
            },
            {
                name:"Amer",
                lastName:"Ali",
                
            },
            {
                name:"Alla",
                lastName:"Bagdad",
               
            },
        ]
       
    },
]

function myGernate(arr){
    return arr.map(itme =>(
        {name: `${itme.name} ${itme.lastName}`,
        child: itme.child ? myGernate(itme.child): [] ,
        
    
    }))
}


console.log(myGernate(myData))