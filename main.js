/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(name) {
  name = name + '!'
  rndName = name;
  return rndName; 
}

function getFirstCharacter(char) {
  return char[0]
}
  
function getLastCharacter(char) {
  return char[char.length-1]
}


function getOneCharacter(str, index) {
  return str [index]
}

let number = getOneCharacter('Greg',0)
number;


function getTwoCharacters(str, num1, num2) {
  return str[num1] + str[num2] 

}

function makeCapitalized(str) {
  return str.toUpperCase('greg'); 
  
}

function yellLouder(threeExCap) {
  return threeExCap.toUpperCase() + '!!!'
}

function getInitials(str) {
  return str[0] + '.' + [0]
}

  

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
