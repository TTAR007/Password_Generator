// all strings
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChar = "!@#$%&*()";

// check what user want and include it in charPool
function start() {
    // my character pool
    let charPool = "";
    let myPassword = "";

    const wantUppercase = document.getElementById("uppercase").checked;
    const wantLowercase = document.getElementById("lowercase").checked;
    const wantNumber = document.getElementById("number").checked;
    const wantSpecialChar = document.getElementById("special-char").checked;
    const passwordLength = document.getElementById("password-length").value;
    const finalPassword = document.getElementById("generated-password");

    // return if user doesn't check any option
    if (!wantUppercase && !wantLowercase && !wantNumber && !wantSpecialChar) {
        finalPassword.textContent = "Please select at least 1 option !!";
        return;
    }

    // return if user doesn't input length
    if (passwordLength === "") {
        finalPassword.textContent = "Please type the length !!";
        return;
    }
    
    // check what to include in charPool
    if (wantUppercase) {charPool += upperCase}
    if (wantLowercase) {charPool += lowerCase}
    if (wantNumber) {charPool += number}
    if (wantSpecialChar) {charPool += specialChar}

    //generate password
    for (let i = 0; i < passwordLength; i++) {
        indexNumber = Math.floor(Math.random() * charPool.length)
        myPassword += charPool[indexNumber];
    }

    document.getElementById("generated-password").textContent = myPassword;
}