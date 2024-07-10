const CAPITALCASE_A = 65;
const CAPITALCASE_Z = 90;
const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;
const TOTAL_ALPHABETS = 26;

const isCapitalChar = (char) => char.match(/[A-Z]/);
const isLowerChar = (char) => char.match(/[a-z]/);

const toValidChar = (code, type) => {
  let newCode = code;
  if (code > type.max) {
    while (newCode > type.max) newCode -= TOTAL_ALPHABETS;
  } else if (code < type.min) {
    while (newCode < type.min) newCode += TOTAL_ALPHABETS;
  }
  return String.fromCharCode(newCode);
};

function caesarCipher(str, shift = 0) {
  return str
    .split("")
    .map((char) => {
      if (isCapitalChar(char))
        return toValidChar(char.charCodeAt(0) + shift, {
          min: CAPITALCASE_A,
          max: CAPITALCASE_Z,
        });
      else if (isLowerChar(char))
        return toValidChar(char.charCodeAt(0) + shift, {
          min: LOWERCASE_A,
          max: LOWERCASE_Z,
        });
      else return char;
    })
    .join("");
}

module.exports = caesarCipher;
