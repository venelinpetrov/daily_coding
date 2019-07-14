/**
 * This problem was asked by Facebook
 *
 * Given the mapping a = 1, b = 2, ..., z = 26, and encoded message count
 * the number of ways it can be decoded.
 *
 * For example, the message '111' would give 3, since it could be decoded as 'aaa',
 * 'ka', and 'ak'.
 *
 * You could assume that the messages are decodable
 */

function count(str) {
    let result = 0;
    function bisect(str) {
        if (str.length == 0) {
            result++;
            return;
        }

        bisect(str.slice(1));

        if (str >= 2 && +str.slice(0, 2) <= 26) {
            bisect(str.slice(2));
        }
    }

    bisect(str);

    return result;
}

console.log(count('111'));