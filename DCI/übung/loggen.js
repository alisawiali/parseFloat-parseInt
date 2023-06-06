console.clear()

class Config{
    static DEBUG = true;;
  log(msg){
        if( Config.DEBUG !== true){
            console.log(msg)
        }else{
            console.log("log is not hier")
        }
    }
} 
const test = new Config("Berlin") 

test.log("hallo")
  
// class Config{
//     static DEBUG = true;;

// }
// function log(msg){
//     if( Config.DEBUG !== true){
//         console.log(msg)
//     }else{
//         console.log("log is not hier")
//     }
// }

// // const test = new Config("Berlin")
// log("hallo")
  
