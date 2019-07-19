/**
 * This problem was asked by Amazon.
 *
 * Given an integer k and a string s, find the length of the longest substring
 * that contains at most k distinct characters.
 *
 * For example, given s = "abcba" and k = 2, the longest substring with k
 * distinct characters is "bcb".
 */

function f(s, k) {
    let set = new Set();
    let longestSeq = '';

    for (let i = 0; i < s.length; i++) {
        let currSeq = '';

        set.clear();

        for (let j = i; j < s.length; j++) {
            if (!set.has(s[j]) && set.size >= k) {
                if (currSeq.length > longestSeq.length) {
                    longestSeq = currSeq;
                }
                break;
            }
            currSeq += s[j];
            set.add(s[j]);
        }
    }

    return longestSeq;
}

const s = 'abcba';
const k = 2;

console.log(f(s, k));