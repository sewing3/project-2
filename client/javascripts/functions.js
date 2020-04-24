// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

let revWords1 = sentence => {
  var result = sentence.split(" ");
  var temp;
  for (var i = 0; i < result.length; i++) {
    temp = "";
    for (var j = result[i].length - 1; j >= 0; j--) {
      temp += result[i][j];
    }
    result[i] = temp;
  }
  return result.join(" ");
};

let revWords2 = sentence => {
  let array = sentence.split("");
  let result = "";
  array.forEach(char => {
    result = char + result;
  });
  return result;
};

let revWords3 = sentence => {
  let array = sentence.split("");
  let result = "";
  for (char of array) {
    result = char + result;
  }
  return result;
};
