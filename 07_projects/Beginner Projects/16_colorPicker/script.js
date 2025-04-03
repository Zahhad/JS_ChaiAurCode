const colorPicker = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");

colorPicker.addEventListener("input", function() {
    const selectedColor = colorPicker.value;    
    document.body.style.backgroundColor = selectedColor;

    const r = parseInt(selectedColor.substring(1, 3), 16);
    const g = parseInt(selectedColor.substring(3, 5), 16);
    const b = parseInt(selectedColor.substring(5, 7), 16);

    colorCode.innerHTML = `HEX: ${selectedColor.toUpperCase()} | RGB: (${r}, ${g}, ${b})`;
});