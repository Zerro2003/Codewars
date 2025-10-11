function getRootProperty(obj, val) {
  for (const rootKey in obj) {
    if (search(obj[rootKey], val)) {
      return rootKey;
    }
  }
  return null;
}

function search(node, val) {
  if (Array.isArray(node)) {
    return node.includes(val);
  } else if (typeof node === "object" && node !== null) {
    return Object.values(node).some((child) => search(child, val));
  }
  return false;
}
