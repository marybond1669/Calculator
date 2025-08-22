let body = document.querySelector("body");
let numbers = document.querySelectorAll(".btn_gray");
let defolt = document.querySelector(".calculus");
let minusBtn = document.querySelector("#minus");
let plusBtn = document.querySelector("#plus");
let deleteBtn = document.querySelector("#delete_number");
let multiply = document.querySelector("#multiply");
let splitBtn = document.querySelector("#split");
let changeNumber = document.querySelector("#change_number");
let procentBtn = document.querySelector("#procent");
let dotBtn = document.querySelector("#dot");
let operator = '';
let result = null;
let equalsBtn = document.querySelector("#equals");

numbers.forEach((num) => {
    num.addEventListener("click", function () {
        console.log(num.textContent);
        if (defolt.textContent === "0") {
            defolt.textContent = num.textContent;
        }
        else {
            defolt.textContent += num.textContent;
        }
    });
});
dotBtn.addEventListener("click", function () {
    if (dotBtn.textContent === ".") {
        defolt.textContent = "0.";
        console.log(dotBtn.textContent)
    }
    else if (dotBtn.textContent.includes(".")){
        defolt.textContent += ".";
    }
});
minusBtn.addEventListener("click", function () {
    console.log(minusBtn.textContent);
    defolt.textContent += minusBtn.textContent;
    operator = 'Minus';
});
plusBtn.addEventListener("click", function () {
    console.log(plusBtn.textContent);
    console.log("hey");
    defolt.textContent += plusBtn.textContent;
    operator = 'Plus';
});
deleteBtn.addEventListener("click", function () {
    defolt.textContent = '0';
});
multiply.addEventListener("click", function () {
    defolt.textContent += multiply.textContent;
    operator = 'Multiply';
});
splitBtn.addEventListener("click", function () {
    defolt.textContent += splitBtn.textContent;
    operator = 'Split';
});
changeNumber.addEventListener("click", function () {
    if (defolt.textContent !== "0") {
        if (defolt.textContent[0] === '-') {
            defolt.textContent = defolt.textContent.slice(1);
        } else {
            defolt.textContent = '-' + defolt.textContent;
        }
    }
});
procentBtn.addEventListener("click", function () {
    defolt.textContent += procentBtn.textContent;
});
equalsBtn.addEventListener("click", function () {
    let output = document.querySelector('.calculus').innerHTML;
    if (operator === 'Minus') {
        if (output.split('-')[0].includes('%') && output.split('-')[1].includes('%')) {
            result = +output.split('-')[0].slice(0, -1) / 100 - +output.slice(0, -1).split('-')[1] / 100;
            defolt.textContent = result;
        }
        else if (output.split('-')[0].includes('%')) {
            result = (+output.slice(0, -1)[0] / 100 * 10) - +output.split('-')[1];
            defolt.textContent = result;
        }
        else if (+output.split('-')[1].includes('%')) {
            console.log('output', output)
            console.log('without parcent', +output.slice(0, -1).split('-')[1]);
            result = +output.split('-')[0] - (+output.slice(0, -1).split('-')[1] / 100 * 20);
            defolt.textContent = result;
        }
        else {
            result = (+output.split('-')[0]) - +output.split('-')[1];
            defolt.textContent = result;
        }
    }
    if (operator === 'Plus') {
        if (output.split('+')[0].includes('%') && output.split('+')[1].includes('%')) {
            result = +output.split('+')[0].slice(0, -1) / 100 + +output.slice(0, -1).split('+')[1] / 100;
            defolt.textContent = result;
        }
        else if (output.split('+')[0].includes('%')) {
            result = (+output.slice(0, -1)[0] / 100 * 10) + +output.split('+')[1];
            defolt.textContent = result;
        }
        else if (+output.split('+')[1].includes('%')) {
            console.log('output', +output.split('+')[0])
            console.log('without parcent', +output.slice(0, -1).split('+')[1]);
            result = +output.split('+')[0] + (+output.split('+')[0] * +output.slice(0, -1).split('+')[1] / 100);
            defolt.textContent = result;
        }
        else {
            result = +output.split('+')[0] + +output.split('+')[1];
            defolt.textContent = result;
        }
    }
    if (operator === 'Multiply') {
        if (output.split('×')[0].includes('%') && output.split('×')[1].includes('%')) {
            result = +output.split('×')[0].slice(0, -1) / 100 * +output.slice(0, -1).split('×')[1] / 100;
            defolt.textContent = result;
        }
        else if (output.split('×')[0].includes('%')) {
            result = +output.split('×')[0].slice(0, -1) / 100 * +output.split('×')[1];
            defolt.textContent = result;
        }
        else if (output.split('×')[1].includes('%')) {
            console.log('output', output)
            console.log('without parcent', +output.slice(0, -1).split('×')[1]);
            result = +output.split('×')[0] * (+output.split('×')[1].slice(0, -1) / 100);
            defolt.textContent = result;
        }
        else {
            result = +output.split('×')[0] * +output.split('×')[1];
            defolt.textContent = result;
        }
    }
    if (operator === 'Split') {
        if (output.split('÷')[0].includes('%') && output.split('÷')[1].includes('%')) {
            result = +output.split('÷')[0].slice(0, -1) / +output.slice(0, -1).split('÷')[1];
            defolt.textContent = result;
        }
        else if (output.split('÷')[0].includes('%')) {
            result = +output.split('÷')[0].slice(0, -1) / 100 / +output.split('÷')[1];
            defolt.textContent = result;
        }
        else if (output.split('÷')[1].includes('%')) {
            console.log('output', output)
            console.log('without parcent', +output.slice(0, -1).split('÷')[1]);
            result = +output.split('÷')[0] / (+output.split('÷')[1].slice(0, -1) / 100);
            defolt.textContent = result;
        }
        else if (+output.split('÷')[1] === 0) {
            defolt.textContent = 'Error';
        }
        else {
            result = +output.split('÷')[0] / +output.split('÷')[1];
            defolt.textContent = result;
        }
    }

});

window.addEventListener("keydown", function (event) {
    if (event.key >= 0 && event.key <= 9) {
        if (defolt.textContent === "0") {
            defolt.textContent = event.key;
        } else {
            defolt.textContent += event.key;
        }
    } else if (event.key === '-') {
        defolt.textContent += '-';
        operator = 'Minus';
    } else if (event.key === '+') {
        defolt.textContent += '+';
        operator = 'Plus';
    } else if (event.key === '*') {
        defolt.textContent += '×';
        operator = 'Multiply';
    } else if (event.key === '/') {
        defolt.textContent += '÷';
        operator = 'Split';
    } else if (event.key === 'Enter') {
        equalsBtn.click();
    } else if (event.key === 'Backspace') {
        deleteBtn.click();
    }
});

