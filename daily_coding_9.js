/**
 * This problem was asked by Airbnb.
 *
 * Given a list of integers, write a function that returns the
 * largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 *
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2,
 * 6 and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 *
 * Follow-up: Can you do this in O(n) time and O(1) space?
 */

const arr1 = [2, 1, 10, 4, 2, 9, 5];
const arr2 = [5, 1, 1, 5];

function sum(arr) {
    let m1 = Math.max(0, arr[0]);
    let m2 = Math.max(m1, arr[1]);

    arr.slice(2).forEach(num => {
        let tmp = m2;
        m2 = Math.max(m2, m1 + num);
        m1 = tmp;
    });

    return Math.max(m1, m2);
}
console.log(
    sum(arr1)
);