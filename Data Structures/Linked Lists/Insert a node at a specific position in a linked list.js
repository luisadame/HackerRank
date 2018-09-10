// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
function insertNodeAtPosition(head, data, position) {
    const node = new SinglyLinkedListNode(data);
    let before = head;
    while (--position) before = before.next;
    node.next = before.next;
    before.next = node;
    return head;
}
