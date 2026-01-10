$(document).ready( function(){
	function windowSize(){
		
      if ($(window).width() <= '991'){
		
        $('#profile').appendTo( $('.container .left') );
		$('#summary').appendTo( $('.container .left') );
        $('#experience').appendTo( $('.container .left') );
        $('#education').appendTo( $('.container .left') );	
        $('#code').appendTo( $('.container .left') );
        $('#languages').appendTo( $('.container .left') );	
		
	  } else {
		  
		$('#profile').appendTo( $('.right') );
		$('#summary').appendTo( $('.right') );
        $('#experience').appendTo( $('.right') );
        $('#education').appendTo( $('.right') );	
        $('#code').appendTo( $('.right') );
        $('#languages').appendTo( $('.right') );
        
	  }
	}
	
    $(window).load(windowSize); // при загрузке
    $(window).resize(windowSize); // при изменении размеров
	
});

const btn = document.querySelector('.toggle');
const menu = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  btn.classList.toggle('open');
  menu.classList.toggle('open');
  navList.classList.toggle('open');
}
btn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    btn.classList.remove('open');
    menu.classList.remove('open');
    navList.classList.remove('open');
  }, 500);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));