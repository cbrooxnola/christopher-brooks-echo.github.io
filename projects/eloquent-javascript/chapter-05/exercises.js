// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let newArray = array.reduce(function(acc, current){
    for (let i = 0; i < current.length; i++){
      acc.push(current[i]);
    }
    return acc;
  }, []);
  return newArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(first, test, update, body) {
  for (let value = first; test(value); value = update(value)) {
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
 for (let i = 0; i < array.length; i++) {
  if (test(array[i]) !== true){
    return false;
  }
  }
  return true;
 }
 


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  //create holding arrays for characters
  let ltr = [];
  let rtl = [];
  //loop through string to determine if each character is a valid character and, if 
  //so, if it is ltr or rtl in nature
  for (let i = 0; i < string.length; i++){
    let letter = characterScript(string.charCodeAt(i));
    if (letter !== null){
      if (letter.direction === 'ltr'){
        ltr.push(letter);
      } else {
        rtl.push(letter);
      }
    }
  }//test length of each array and return the greater
  if (ltr.length > rtl.length){
    return 'ltr';
  } else {
    return 'rtl';
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
