const app = "I don't do much."

function destructivelyAppendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.push(name);
  return kittens
};

destructivelyAppendKitten("Ralph");
