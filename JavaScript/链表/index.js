let arr = [1,2,3,4,5,6,7,8] //有序，线性


function ListNode(val){
    this.val = val;
    this.next=null
}

let node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)

// 数组中删除或增加一个元素会导致n个元素位置移动，时间复杂度为O(n)
// 链表中增加或者删除一个元素时间复杂度为O(1)


// 83删除排序链表中的重复元素
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
head = [1,1,2]
var deleteDuplicates = function(head) {
    if(!head) return head
    let cur = head
    while(cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head
};

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

// 请根据以上代码和给出的信息写一遍文章，前面为基础知识介绍，后面为链表题目思路以及详解