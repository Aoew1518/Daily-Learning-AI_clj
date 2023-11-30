// 21合并两个有序链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
l1 = [1,2,4], l2 = [1,3,4]
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode();// val = 0, next = null
    let cur = head;
    while(list1 && list2){
        if(list1.val < list2.val){
            cur.next = list1;
            list1 = list1.next;
        }else{
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    if(list1) cur.next = list1;
    if(list2) cur.next = list2;
    
    return head.next;
};