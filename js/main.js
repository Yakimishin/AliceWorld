var popup = document.querySelector('.popup');
var dairy = document.querySelector('.dairy');
var startButton = document.querySelector('.start-button');
var presentWords = document.querySelector('.present')

function hide(){
	startButton.classList.add('hidden');
	popup.classList.add('hidden');
	presentWords.classList.add('hidden')
}


startButton.addEventListener('click', function(){
	startButton.classList.add('close-button');
	presentWords.classList.add('close-present');
	popup.classList.add('close-popup');
	dairy.classList.remove('hidden');
	dairy.classList.add('show-dairy');
	setTimeout(hide, 7*1000);
})