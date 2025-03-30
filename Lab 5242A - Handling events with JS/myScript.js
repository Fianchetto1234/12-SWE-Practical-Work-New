document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('convertButton').addEventListener('click', function() {
        const input = Number(document.getElementById('inputField').value);
        let number = (input * 1.8) + 32;
        document.getElementById('result').innerText = number;
    });
});