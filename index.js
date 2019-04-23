function wakeDog(name,breed){
  let string =`Wake ${name} the ${breed}`
  console.log(string)
  return string;
}
function leashDog(name,breed){
  let string = `Leash ${name} the ${breed}`;
  console.log(string)
  return string;
}
function walkToPark(name,breed){
  let string = `Walk to the park with ${name} the ${breed}`
  console.log(string)
  return string;
}
function throwFrisbee(name,breed){
  let string = `Throw the frisbee for ${name} the ${breed}`
  console.log(string)
  return string;
}
function walkHome(name,breed){
  let string = `Walk home with ${name} the ${breed}`
  console.log(string)
  return string;
}
function unleashDog(name,breed){
  let string = `Unleash ${name} the ${breed}`
  console.log(string)
  return string;
}

var routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName,dogBreed){
  // var routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
  let answer=[]
  let name = dogName
  let breed = dogBreed
  for (let i=0;i < routine.length;i++){
    answer.push(routine[i](name,breed))
  };
  return answer
}
