const display = document.getElementsByClassName("display")[0];

function calcdisplay(input) {
    display.value += input;
    adjustfontsize();
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
    adjustfontsize();
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function cleardisplay() {
    display.value = "";
}

function adjustfontsize() {
    if (display.value.length >= 17) {
        display.style.fontSize = "33px";
    } else if (display.value.length >= 15) {
        display.style.fontSize = "35px";
    } else if (display.value.length >= 13) {
        display.style.fontSize = "40px";
    } else if (display.value.length >= 11) {
        display.style.fontSize = "45px";
    } else {
        display.style.fontSize = "50px";
    }
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        cleardisplay();
    } else if (!isNaN(key) || "+-*/%".includes(key)) {
        calcdisplay(key);
    }
});

