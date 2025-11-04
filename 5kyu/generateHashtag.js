function generateHashtag(str) {
  if (str.trim() === "") return false;

  let chn = str
    .split(" ")
    .map((a) => a.charAt(0).toUpperCase() + a.slice(1))
    .join("");

  let final = "#" + chn;

  return final.length <= 140 ? final : false;
}
