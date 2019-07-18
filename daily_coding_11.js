/**
 * This problem was asked by Twitter.
 *
 * Implement an autocomplete system. That is, given a query string s and a set of all
 * possible query strings, return all strings in the set that have s as a prefix.
 *
 * For example, given the query string de and the set of strings [dog, deer, deal],
 * return [deer, deal].
 *
 * Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
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