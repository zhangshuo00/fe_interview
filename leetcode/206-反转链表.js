/**
 * function ListNode(val){
 *     this.val = val;
 *     this.next = next;
 * }
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head){
	let prev = null;// 哨兵节点
	let curr = head;
	while(curr != null){
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
}

// 栈解
var reverseListTwo = function(head){
	let tmp = head;
	let tHead = new ListNode(0);
	let pre = tHead;
	let stack = [];
	while(tmp){
		stack.push(tmp.val);
		tmp = tmp.next;
	}
	while(stack.length != 0){
		pre.next = new ListNode(stack.pop());
		pre = pre.next;
	}
}