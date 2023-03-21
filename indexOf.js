
/*
String Methode
---> IndexOf(Value,[Mand], Start,[Opt],0)
---> lastIndexOf()

*/ 

const testIndexOf = "Hallo welt in Berlin";

if(testIndexOf.indexOf("w",7) === 6){
    console.log("hallo welt in berlin");
}else{
    console.log("leider versuchen sie später");
}
console.log(testIndexOf.indexOf("w"));


//  LastIndexOf(""); sucht  von hinten aber zählt vom anfang
console.log("<-----LastIndexOf()------>")
const testlastIndexOf = "Omer Ali";
console.log(testlastIndexOf.lastIndexOf("i"));



    if(testIndexOf.lastIndexOf("w") === isNaN){
        console.log(testlastIndexOf.toUpperCase())
    }else{
        console.log(testlastIndexOf.toLocaleLowerCase())
    }
