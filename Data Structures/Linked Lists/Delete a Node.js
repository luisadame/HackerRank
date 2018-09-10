// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
function deleteNode(head, position) {
    let before = head;

    if (position) {
        while (--position) before = before.next;
        before.next = before.next.next;
    } else {
        head = head.next;
    }

    return head;
}
