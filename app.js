const 
     hamburger = document.querySelector('.hamburger'),
     navLinks = document.querySelector('.nav-links'),
     links = document.querySelectorAll('.nav-links li'),
     line = document.querySelector('.line'),
     navIcon =document.querySelector('#nav-icon2'); 

//Hamburger function
hamburger.addEventListener('click', () =>{
	navLinks.classList.toggle('open');

	links.forEach( link => {
		link.classList.toggle('fade');
	});
});
navIcon.addEventListener('click', ()=>{
	navIcon.classList.toggle('open');
})





