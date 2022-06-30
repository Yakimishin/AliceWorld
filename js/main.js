var popup = document.querySelector('.popup');
var dairy = document.querySelector('.dairy');
var startButton = document.querySelector('.start-button');

function hide(){
	startButton.classList.add('hidden');
	popup.classList.add('hidden');
}


startButton.addEventListener('click', function(){
	startButton.classList.add('close-button');
	popup.classList.add('close-popup');
	dairy.classList.remove('hidden');
	dairy.classList.add('show-dairy');
	setTimeout(hide, 5*1000);
})