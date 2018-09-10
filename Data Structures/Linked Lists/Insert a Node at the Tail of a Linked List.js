// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/
function insertNodeAtTail(head, data) {
  let node = new SinglyLinkedListNode(data);
  if (head) {
    node.next = head;
  } else {
    head = node;
  }
  return node;
}
