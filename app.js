if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(function () {});
}
var burger = document.getElementById('burger');
var drawer = document.getElementById('drawer');
if (burger && drawer) {
  burger.addEventListener('click', function () {
    drawer.classList.toggle('open');
  });
}
var form = document.getElementById('quote');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('ok').style.display = 'block';
  });
}
