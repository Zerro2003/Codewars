function loop_size(node) {
  let slow = node;
  let fast = node;
  while (true) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  let count = 1;
  fast = fast.next;
  while (slow !== fast) {
    fast = fast.next;
    count++;
  }
// ----
  return count;
}