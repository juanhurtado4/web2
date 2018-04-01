let num = document.getElementById("add");
const btn = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");

const addOne = () => {
    num.innerHTML = parseInt(num.innerHTML) + 1;
};

const reset = () => {
    num.innerHTML = 0;
};

btn.addEventListener("mousedown", (e) => {
    addOne();
    num.classList.add("plus-ani")

});

btn.addEventListener("mouseup", (e) => {
    num.classList.remove("plus-ani");
});

btnReset.addEventListener("mousedown", (e) => {
    reset();
    num.classList.add("reset-ani");
})

btnReset.addEventListener("mouseup", (e) => {
    num.classList.remove("reset-ani");
})
