function dirReduc(arr) {
  const opposites = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  const stack = [];

  for (let dir of arr) {
    if (stack.length && opposites[dir] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return stack;
}
