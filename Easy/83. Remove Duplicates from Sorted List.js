const head = [1, 1, 2];
// const head = [1, 1, 2, 3, 3];

var deleteDuplicates = function (head) {
    var now = head;
    while (now) {
        if (now.next && now.next.val === now.val) {
            now.next = now.next.next;
        } else {
            now = now.next;
        }
    }
    return head;
};

console.log(deleteDuplicates(head));
