function checkCountMap(countMap) {
    for (const key of countMap.keys()) {
        if(countMap.get(key) % 2 != 0) {
            return false;
        }
    }
    return true;
}

module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let bracketsMap = new Map();
    bracketsConfig.forEach(element => {
        bracketsMap.set(element[0], element[1]);
    });
    let countMap = new Map();
    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        if (bracketsMap.get(s) != undefined) {
            if(bracketsMap.get(s) != s) {
                stack.push(s);
            }
            else {
                if(countMap.has(s)) {
                    countMap.set(s, countMap.get(s) + 1);
                } else {
                    countMap.set(s, 1);
                }
            }
        } else {
            const popedBracket = stack.pop();
            if (bracketsMap.get(popedBracket) != s) {
                return false;
            }
        }
    }
    return (stack.length === 0 && checkCountMap(countMap));
}
