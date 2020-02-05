
function animacaoIconMenu(){
  let iconmenu = document.querySelector("#nav-icon1");
  let menuMb = document.querySelector('.mobileMenu');


  iconmenu.addEventListener('click', (function(){
    iconmenu.classList.toggle('open');
    menuMb.classList.toggle('menuMobileOpen');
    console.log('clicass')
  }))
}

function openMenu(){
  let menuMb = document.querySelector('.mobileMenu');
  
}

animacaoIconMenu();
openMenu();