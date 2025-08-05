function towerBuilder(nFloors) {
  // build here
    const tower = [];
  
  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - i - 1);
    const blocks = "*".repeat(i * 2 + 1);
    tower.push(spaces + blocks + spaces);
  }

  return tower;
}