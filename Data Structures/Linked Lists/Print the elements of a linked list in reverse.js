// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem
function reversePrint(head) {
    if (!head) return;
    reversePrint(head.next);
    console.log(head.data);
}
