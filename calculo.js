function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    const area = length * width;

    document.getElementById('result').innerText = 'Área do retângulo: ' + area.toFixed(2);
}

function clearFields() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('result').innerText = '';
}
