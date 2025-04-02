function checkPalindrome() {
    let inputText = document.getElementById("textInput").value;

    // Remove spaces, punctuation, and convert to lowercase
    let cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Check if the cleaned text is the same forward and backward
    let reversedText = cleanedText.split("").reverse().join("");

    let resultElement = document.getElementById("result");
    if (cleanedText === reversedText) {
        resultElement.innerHTML = `"${inputText}" is a Palindrome ✅`;
        resultElement.style.color = "green";
    } else {
        resultElement.innerHTML = `"${inputText}" is NOT a Palindrome ❌`;
        resultElement.style.color = "red";
    }
}
