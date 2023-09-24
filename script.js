let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById('passBox');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let getBtn = document.getElementById('getBtn');
let copyIcon = document.getElementById('copyIcon');
let selectAll = document.getElementById('selectAll');
let ele = document.getElementsByName('chk');


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});
getBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnoqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^*&";
// function to generate password
function generatePassword() {
    let genPassword = "";
    let allChars = "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";
    allChars += selectAll.checked ? lowerChars : "";
    allChars += selectAll.checked ? upperChars : "";
    allChars += selectAll.checked ? allNumbers : "";
    allChars += selectAll.checked ? allSymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }
    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}
copyIcon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy"
            copyIcon.title = "";
        }, 2000)
    }
});


// function changeBodyColor() {
//     let body=document.getElementsByTagName('body');
//     console.log("aaahvhjc")
//     document.body.classList.toggle('active');
//     document.body.style.background = "#121212";
// }

// } above method can also be used for changing colors by using onclick in html
let gbtn = document.getElementById('dbtn');
gbtn.addEventListener('click', () => {
    document.body.classList.toggle('active');
});

