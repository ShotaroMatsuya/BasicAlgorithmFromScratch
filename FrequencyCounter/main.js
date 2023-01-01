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
