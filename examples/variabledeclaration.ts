var x =10;
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
      return x;
    }

    
  }
  f(true); // returns '10'
  f(false); // returns 'undefined'

  let y = 10;
  
  function e(){
    let z = 100;
  }

  function t(){
    let z = 100;
    
  }

const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
};

// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat,
// };

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--; 