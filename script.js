document.addEventListener('DOMContentLoaded', () => {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');

/* COMENTARIO DE CAMBIOS*/

    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');

    const colorPicker = document.getElementById('colorPicker');

    const colorBox = document.getElementById('colorBox');
    const hexColor = document.getElementById('hexColor');

    function updateColor() {
        const r = redRange.value;
        const g = greenRange.value;
        const b = blueRange.value;

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        const hexColorCode = rgbToHex(parseInt(r), parseInt(g), parseInt(b));

        colorBox.style.backgroundColor = rgbColor;
        hexColor.textContent = hexColorCode;

        // Sincronizar los valores de entrada y color picker con los sliders
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
        colorPicker.value = hexColorCode;
    }

    function rgbToHex(r, g, b) {
        return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
    }

    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    }

    function updateRangeFromInput() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const [r, g, b] = hexToRgb(colorPicker.value);
        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;
        updateColor();
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);

    colorPicker.addEventListener('input', updateFromColorPicker);

    updateColor(); // Inicializar el color
});