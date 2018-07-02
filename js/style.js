// Side Bar Menu Function
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}
// Gallery Fuction
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;
// Set first img opacity
imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click', imgClick)
);
function imgClick(e) {
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));
  // Change the current image to src of clicked imgs
  current.src = e.target.src;
  // Add fade in class
  current.classList.add('fade-in');
  // Remove fade-in class after 25s
  setTimeout(() => current.classList.remove('fade-in'), 500)
  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
