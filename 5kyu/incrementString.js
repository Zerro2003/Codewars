function incrementString(str) {
  let i = str.length - 1;
  while (i >= 0 && str[i] >= "0" && str[i] <= "9") {
    i--;
  }

  const prefix = str.slice(0, i + 1);
  const numberPart = str.slice(i + 1);

  if (numberPart === "") return prefix + "1";

  const incremented = (parseInt(numberPart, 10) + 1).toString();
  const padded = incremented.padStart(numberPart.length, "0");

  return prefix + padded;
}
