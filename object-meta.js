console.clear()

const myobject = {
    a: 1,
    b: 2,
  };
  //       تعريف الملكية
  Object.defineProperty(myobject, "c", {
    writable: false,  // schreibbar // auf false ===> قابل للكتابة // ===> في حالة التغيير ، لا يمكن للمستخدم تغييره 
    enumerable: true, //معدود   aufzählbar // wenn das auf false ändern wollen dann wrid es es vom loop nicht anerkennt  (c) nur
    configurable: true, // شكلي konfigurierbar
    value: 3,
  });
      myobject.c = 100;
  
      for(let mains in myobject){
          console.log(mains, myobject[mains])
      }
  
  console.log(myobject)