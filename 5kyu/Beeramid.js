function beeramid(bonus, price) {
  if (bonus <= 0 || price <= 0) return 0;

  let totalCans = Math.floor(bonus / price);
  let level = 0;

  while (totalCans >= (level + 1) ** 2) {
    level++;
    totalCans -= level ** 2;
  }

  return level;
}
2;
