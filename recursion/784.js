/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    // pos, s, curr로 재귀 하다가 s[pos]가 알파벳이면 대문자 소문자로 나눠서 재귀...curr의 길이가 s와 같다면 result에 추가
    const result = [];

    run();

    function run(pos = 0, newS = '') {
        if (newS.length === s.length) {
            result.push(newS);
            return;
        }

        // if ((/[a-zA-Z]/).test(s[pos])) {
        //     run(pos + 1, newS + s[pos].toLowerCase());
        //     run(pos + 1, newS + s[pos].toUpperCase());
        // } {
            run(pos + 1, newS + s[pos]);
        // }
    }

    return result;
};
letterCasePermutation("a1b2");
// letterCasePermutation("a1b2");
// ["a1b2","a1B2","A1b2","A1B2"]