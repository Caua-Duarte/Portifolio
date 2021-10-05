document.querySelector('.btn').onclick = function(e){
  var menu = document.querySelector('.menu');
  var btn = document.querySelector('.btn');

  menu.classList.toggle('is_active');
  btn.classList.toggle('is_active');

  e.preventDefault();
}