console.clear()

function objectConstructor(name,ursname,age,greads){
    this.name = name;
    this.ursname = ursname;
    this.age = age;
    this.greads = greads;
    // this.getFullName = function(){
    //     return this.name +  " " + this.ursname
    // },
    this.getyearBirth = function(){
        return 2023-this.age
    },
    this.Result = function(){
        return this.greads.reduce((sum,grade) => sum+grade)/this.greads.length;
    }
}
// --------------------------------------------------------

console.log(" -------------  Mit  prototype ------------- " ) // االنموذج المبدئي
objectConstructor.prototype.getFullName = function(){
    return this.name +  " " + this.ursname
}
console.log(" -------------  ^^^^  ^^^^ ------------- " ) 


const result = new  objectConstructor("Imad","Alisawi",37,[1,2,2,1,1])
const result2 = new  objectConstructor("ALaa","Ali",37,[1,2,2,1,1])


console.log(result.getFullName())   // ===>    19 ergebnis
console.log(" Age ist das Ergebnis  =>  ", result.getyearBirth())
console.log(" Note => ",result.Result())

console.log(result2.getFullName())