function check(str, bracketsConfig) {
    let stack = [];
    let bracketsMap = {};
    bracketsConfig.forEach(element => {
        bracketsMap[element[0]] = element[1];
    });
    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        console.log(s);
        if (bracketsMap[s]) {
            stack.push(s);
        } else {
            const popedBracket = stack.pop();
            if (stack[popedBracket] != s) {
                return false;
            }
        }
        return stack.length === 0;
    }
}

const config1 = [['(', ')']];
console.log(check('()', config1));