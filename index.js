// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}
function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop("Garfield")
}
function destructivelyRemoveFirstKitten(name) {
  return kittens.shift("Milo")
}
function appendKitten(name) {
  return kittens.splice(1,4,"Broom")
}
