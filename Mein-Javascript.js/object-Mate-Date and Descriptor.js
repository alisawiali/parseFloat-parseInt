const myObject = {
    a: 1,
    b: 2,
  };
  Object.defineProperty(myObject, "c", {
    writable: true, // قابل للكتابة
    Enumerator: true, // العداد
    configurable: false, // شكلي
    value: 3,
  });
  
  myObject.c = 200;
  console.log(delete myObject.c) // wenn man configureable auf (flase) stelle dann wird  das löschen nicht verfügbar
  for (let prop in myObject) {
    console.log(prop, myObject[prop]);
  }
  console.log(myObject);