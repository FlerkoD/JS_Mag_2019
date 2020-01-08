"use strict";

let result;

//1. Function Declaration Statement
result = conc(1, 1);
alert(result === '11');

function conc(a, b) {
    return a + b;
}

//2. Function Definition Expression
let comp = function (a, b) {
    return (a === b) ? 1 : -1;
}

result = comp('abc', 'abc');
alert(result === 1);

result = comp('abC', 'abc');
alert(result === -1);

//3. Anonymous Function
alert(function () {
    return 'message in console';
});

//4. Fibonacci

function fib(n) {
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(3)); //2
console.log(fib(7)); //13
console.log(fib(77)); //5527939700884757

//5. Spam Checker
function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes("spam") && str.includes("sex");
}

console.log(checkSpam('get new Sex videos')); // true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false

//6. Ellipsis

function limit(str) {
    const LIMIT = 20;
    return str.length <= LIMIT ? str : function (str) {
        str = str.slice(0, LIMIT) + '...'
    };
}