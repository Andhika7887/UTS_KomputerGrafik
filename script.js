window.addEventListener('DOMContentLoaded', (event) => {
  const colorPicker = document.getElementById('color-picker');
  const colorBox = document.getElementById('color-box');

  colorPicker.addEventListener('input', function() {
    const color = this.value;
    colorBox.style.backgroundColor = color;
  });
});
