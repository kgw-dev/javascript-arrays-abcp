var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (x,y) {
  var newarray = [y, ...x];
  return(newarray)
}

function destructivelyAddElementToBeginningOfArray (x,y) {
  x.unshift(y);
  return(x)
}

function addElementToEndOfArray (x,y) {
  var newarray = [...x, y];
  return(newarray)
}

function destructivelyAddElementToEndOfArray (x,y) {
  x.push(y);
  return(x)
}

function accessElementInArray (x,y) {
  return(x[y])
}

function destructivelyRemoveElementFromBeginningOfArray (x) {
  x.shift();
  return(x)
}

function removeElementFromBeginningOfArray (x) {
  var newarray = x.slice(1);
  return(newarray)
}

function destructivelyRemoveElementFromEndOfArray (x) {
  x.pop();
  return(x)
}

function removeElementFromEndOfArray (x) {
  var newarray = x.slice(0,x.length-1);
  return(newarray)
}