function convertToRoman(num) {
  const romanNumeralObject = {
    "M": 1000, "CM": 900, "D": 500, "CD": 400,
    "C": 100, "XC": 90, "L": 50, "XL": 40,
    "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1
  }
  let rollingValue = num;
  let romanNumeral = '';
  for (numeral in romanNumeralObject) {
    if (rollingValue / romanNumeralObject[numeral] >= 1) {
      let numN =  Math.floor(rollingValue / romanNumeralObject[numeral]);
      romanNumeral = romanNumeral + numeral.repeat(numN);
      rollingValue -= numN * romanNumeralObject[numeral];
    };
    console.log(`${numeral}: ${romanNumeralObject[numeral]}`);
    console.log("romanNumer:", romanNumeral);
    console.log("rollingValue", rollingValue);
  }
  return romanNumeral;
 }

 console.assert(convertToRoman(3999) === "MMMCMXCIX", "assertion failed");
