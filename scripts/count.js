// var currentOrderCount = localStorage.getItem('orderCount') || 0;
// document.getElementById('order-count').textContent = currentOrderCount;

document.addEventListener('DOMContentLoaded', function() {
    var currentOrderCount = localStorage.getItem('orderCount') || 0;
    document.getElementById('order-count').textContent = currentOrderCount;
  });
  