document.getElementById('decreaseButton').addEventListener('click', function() {
var sizeInput = document.getElementById('size');
var currentValue = parseFloat(sizeInput.value);
var newValue = currentValue - 0.01;
if (newValue >= parseFloat(sizeInput.min)) {
sizeInput.value = newValue.toFixed(2);
document.getElementById('sizeValue').innerText = newValue.toFixed(2);
}
});

document.getElementById('increaseButton').addEventListener('click', function() {
var sizeInput = document.getElementById('size');
var currentValue = parseFloat(sizeInput.value);
var newValue = currentValue + 0.01;
if (newValue <= parseFloat(sizeInput.max)) {
sizeInput.value = newValue.toFixed(2);
document.getElementById('sizeValue').innerText = newValue.toFixed(2);
}
});

document.getElementById('startButton').addEventListener('click', function() {
var sizeValue = document.getElementById('size').value;
console.log('Giá trị hiện tại:', sizeValue);
// Thêm mã xử lý sự kiện bắt đầu tại đây
});
