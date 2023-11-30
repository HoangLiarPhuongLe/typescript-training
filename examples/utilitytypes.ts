//Partial<Type>
interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });

  console.log(todo2);

  //Records<Keys, Type>
  interface CatInfo {
    age: number;
    breed: string;
  }
   
  type CatName = "miffy" | "boris" | "mordred";
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };
  console.log(cats.boris);

//ThisParameterType<Type>
function toHex(this: Number) {
    return this.toString(16);
  }
   
  function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
  }

  let number = numberToString(9);
  console.log(number);
