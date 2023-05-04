console.clear()
const myObjects= {
    a:1,
    b:2,
};


Object.defineProperties(myObjects,{
    c:{
        writable:true,
        enumerable:true,
        configurable:true,
        value:3,
    },
    d:{
        
        configurable:true,
        value:4,
    },
    e:{
        configurable:true,
        value:5,
    },
})

console.log(myObjects)
console.log(Object.getOwnPropertyDescriptor(myObjects,"d"))
console.log(Object.getOwnPropertyDescriptors(myObjects))