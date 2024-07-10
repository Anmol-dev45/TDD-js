const CAPITALCASE_A = 65;
const CAPITALCASE_Z = 90;
const LOWERCASE_A = 97;
const LOWERCASE_Z = 122;
const TOTAL_ALPHABETS = 26;

function caesarCipher(str, shift = 0) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char.match(/[A-Z]/)) {
      result += toValidChar(
        char.charCodeAt(0) + shift,
        CAPITALCASE_A,
        CAPITALCASE_Z
      );
    } else if (char.match(/[a-z]/)) {
      result += toValidChar(
        char.charCodeAt(0) + shift,
        LOWERCASE_A,
        LOWERCASE_Z
      );
    } else {
      result += char;
    }
  }

  return result;
}

function toValidChar(code, min, max) {
  let newCode = code;
  if (code > max) {
    while (newCode > max) newCode -= TOTAL_ALPHABETS;
  } else if (code < min) {
    while (newCode < min) newCode += TOTAL_ALPHABETS;
  }
  return String.fromCharCode(newCode);
}

module.exports = caesarCipher;
