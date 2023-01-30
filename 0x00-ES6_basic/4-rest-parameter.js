export default function returnHowManyArguments(...theArgs) {
  return theArgs.length;
}

console.log(returnHowManyArguments('Hello', 'Holberton', 2020));
