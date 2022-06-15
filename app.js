// background color
const bgPicker = document.getElementById("bg-picker");
const bgHex = document.getElementById("bg-hex");
const phone = document.querySelector(".phone")
// button color 
// button font color
// font color

bgPicker.addEventListener("input", () => {
    const bgValue = bgPicker.value;
    phone.style.backgroundColor = bgValue;
    bgHex.value = bgValue;
})
bgHex.addEventListener("input", () => {
    const bgValue = bgHex.value;
    phone.style.backgroundColor = bgValue;
    bgPicker.value = bgValue;
})
