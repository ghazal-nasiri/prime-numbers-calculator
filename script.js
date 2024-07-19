const inputNumber = document.querySelector("input");
const calculateBtn = document.querySelector(".group button");
const text = document.querySelector(".text");
const containerModalBox = document.querySelector(".modal-box-container");
const modalBox = document.querySelector(".modal-box");

calculateBtn.addEventListener("click", () => {
    let multipleNumbers = 0;
    const number = inputNumber.value;
    if (number == "") {
        // open modal box
        containerModalBox.style.display = "block";
        modalBox.innerHTML = "please enter a number";
        modalBox.classList.add("open");
    }
    else if (number <= 0) {
        // open modal box
        containerModalBox.style.display = "block";
        modalBox.innerHTML = "    Please enter a number greater than 0";
        modalBox.classList.add("open");
        text.innerText = "";
        inputNumber.value = "";
    }
    else {
        for (let i = 0; i <= number; i++) {
            for (let j = 0; j <= number; j++) {
                if (i * j == number) {
                    multipleNumbers++;
                }
            }
        }
        if (multipleNumbers == 2) {
            text.innerText = "is a Prime number"
        }
        else if (multipleNumbers > 2) {
            text.innerText = "is a composite number";
        }
        else {
            text.innerText = "1 is not a prime number or a composite number";
        }
    }

})

// close modal box
containerModalBox.addEventListener("click", () => {
    containerModalBox.style.display = "none";
    modalBox.classList.remove("open");
})