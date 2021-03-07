module.exports = function check(str, bracketsConfig) {
    const open = bracketsConfig.map(x => x[0]);
    const close = bracketsConfig.map(x => x[1]);
    const stack = [];
    for (let chr of str) {
        let closeIndex = close.findIndex(el => el === chr);
        let openIndex = open.findIndex(el => el === chr);
        if (closeIndex === openIndex) {
            if (stack.reduce((l, x) => l + (x === chr), 0) % 2 !== 0) openIndex = -1
        }
        if (openIndex !== -1) {
            stack.push(chr);
        } else {
            let lastOpener = stack.pop();
            let trueOpener = open[closeIndex];
            if (lastOpener !== trueOpener) return false;
        }
    }
    return stack.length === 0;
}
