function validAnagram(str1, str2) {
  let result = false;
  if (typeof str1 != 'string' && typeof str2 != 'string') {
    console.log('not string');
    return result;
  }
  if (str1.length !== str2.length) {
    console.log('different length');
    return result;
  }

  let frequencyObj1 = {};
  let frequencyObj2 = {};

  for (let i = 0; i < str1.length; i++) {
    frequencyObj1[str1[i]] = (frequencyObj1[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    frequencyObj2[str2[i]] = (frequencyObj2[str2[i]] || 0) + 1;
  }
  Object.keys(frequencyObj1).forEach(str => {
    if (!Object.keys(frequencyObj2).includes(str)) {
      console.log('different string');
      return result;
    }
  });

  for (let key in frequencyObj1) {
    if (frequencyObj1[key] !== frequencyObj2[key]) {
      console.log('different count');
      return result;
    }
  }
  result = true;
  console.log(str1, str2, result);
  return result;
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false) // false
validAnagram('awesome', 'awesom'); // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true

function sameFrequency(first, second) {
  let str1 = String(first);
  let str2 = String(second);
  let results = false;
  if (str1.length !== str2.length) {
    console.log('not equal length');
    console.log(first, second, results);
    return results;
  }
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      console.log('different string contained');
      console.log(first, second, results);
      return results;
    } else {
      lookup[letter] -= 1;
    }
  }
  results = true;
  console.log(first, second, results);
  return results;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

function areThereDuplicates(...args) {
  let result = true;
  const frequencyObj = {};
  for (let i = 0; i < args.length; i++) {
    let letter = String(args[i]);
    frequencyObj[letter]
      ? (frequencyObj[letter] += 1)
      : (frequencyObj[letter] = 1);
  }
  console.log(frequencyObj);
  for (let i = 0; i < args.length; i++) {
    if (frequencyObj[args[i]] > 1) {
      console.log('duplicate key exists');
      console.log(args, result);
      return result;
    }
  }
  result = false;
  console.log(args, result);
  return result;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
