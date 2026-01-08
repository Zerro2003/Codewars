function scoreHand(cards) {
  let total = 0;
  let aces = 0;

  for (let card of cards) {
    if (card === "A") {
      total += 11;
      aces++;
    } else if (["K", "Q", "J"].includes(card)) {
      total += 10;
    } else {
      total += Number(card);
    }
  }
  while (total > 21 && aces > 0) {
    total -= 10; 
    aces--;
  }

  return total;
}