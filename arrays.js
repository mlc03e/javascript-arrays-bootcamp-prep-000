var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBagOfArray(array, element) {
  chocolateBars.unshift("reeses")
  console.log(chocolateBars) 
}

function destructiveAddElementToBeginningOfArray(array, element) {
  chocolateBars = ["reeses"]
  console.log(chocolateBars) 
}