function identity<Type>(arg: Type): Type {
    return arg;
  }

  let output = identity<string>("Hello World");

  console.log(output);


  //Generic Classes
  class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }
   
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };

  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 8));