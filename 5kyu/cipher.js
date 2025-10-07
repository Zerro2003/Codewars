class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    this.lowercaseAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  }

  encode(text) {
    return text
      .split("")
      .map((char) => {
        let indx = this.lowercaseAlphabet.indexOf(char.toLowerCase());
        if (indx === -1) return char; // Preserve special characters

        let next = (indx + this.shift) % 26;
        return this.lowercaseAlphabet[next].toUpperCase();
      })
      .join("");
  }

  decode(text) {
    return text
      .split("")
      .map((char) => {
        let indx = this.lowercaseAlphabet.indexOf(char.toLowerCase());
        if (indx === -1) return char; // Preserve special characters

        let back = (indx - this.shift + 26) % 26;
        return this.lowercaseAlphabet[back].toUpperCase();
      })
      .join("");
  }
}
