class Nhanvien {
    private static headcount: number = 0;
   
    constructor(
      private firstName: string,
      private lastName: string,
      private jobTitle: string
    ) {
      Nhanvien.headcount++;
    }
   
    public static getHeadCount() {
      return Nhanvien.headcount;
    }
  }
   
  let le = new Nhanvien("Le", "Hoang", "FE");
  let hoang = new Nhanvien("Hoang", "Ngo", "BE");
   
  console.log(Nhanvien.getHeadCount); // 2