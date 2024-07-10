const isCapitalChar = (char) => char.match(/[A-Z]/);
const isLowerChar = (char) => char.match(/[a-z]/);

const toValidChar = (code, type) => {
  let newCode = code;
  switch (type) {
    case "capital-case":
      if (code > 90) {
        newCode = 91 - code + 65;
      } else if (code < 65) {
        newCode = code - 64 + 90;
      }
      break;
    case "lower-case":
      if (code > 122) {
        newCode = 123 - code + 97;
      } else if (code < 97) {
        newCode = code - 96 + 122;
      }
      break;
  }

  return String.fromCharCode(newCode);
};

function caesarCipher(str, shift = 0) {
  return str
    .split("")
    .map((char) => {
      if (isCapitalChar(char))
        return toValidChar(char.charCodeAt(0) + shift, "capital-case");
      else if (isLowerChar(char))
        return toValidChar(char.charCodeAt(0) + shift, "lower-case");
      else return char;
    })
    .join("");
}

module.exports = caesarCipher;
