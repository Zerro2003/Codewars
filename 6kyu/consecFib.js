function productFib(prod) {
  let haimer = [0, 1];
  for (let h = 1; h <= prod; h++) {
    let next = haimer[haimer.length - 2] + haimer[haimer.length - 1];
    haimer.push(next);
    if (haimer[haimer.length - 2] * haimer[haimer.length - 1] === prod) {
      return [haimer[haimer.length - 2], haimer[haimer.length - 1], true];
    } else if (haimer[haimer.length - 2] * haimer[haimer.length - 1] > prod) {
      return [haimer[haimer.length - 2], haimer[haimer.length - 1], false];
    }
  }
}
