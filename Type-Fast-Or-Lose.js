window.addEventListener('load', init);

//Globals

//Available levels
const levels = {
	easy : 5,
	medium : 3,
	hard : 2
}

const currentLevel = levels.easy ;

var time = currentLevel ;
var score = 0 ;
var isPlaying ;

//DOM
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

var words = [
	'hat',
	"river",
	"lucky",
	"statue",
	"generate",
	"stubborn",
	"cocktail",
	"runaway",
	"joke",
	"devolper",
	"establishment",
	"hero",
	"javascript",
	"nutrition",
	"revolver",
	"echo",
	"siblings",
	"investigate",
	"horrendous",
	"symptom",
	"laughter",
	"magic",
	"master",
	"space",
	"defination"
];

//Intialize game
function init() {
	//show number of seconds in UI 
	seconds.innerHTML = currentLevel ;
	//load words from array
	showWords(words);
	//start matching on word input
	wordInput.addEventListener("input" , startMatch);
	//call countdown every second
	setInterval(countdown,1000);
	// check game status
	setInterval(checkStatus , 50);
}

//start match 
function  startMatch() {
	if(matchWords()){
		isPlaying = true ;
		time = currentLevel + 1 ;
		showWords(words);
		wordInput.value = "";
		score++ ;
	}
	//if score is -1 display 0 
	if(score === -1){
		scoreDisplay.innerHTML = 0;
	}else{
		scoreDisplay.innerHTML = score;
	}
}

// Match curr word to  curr input
function matchWords() {
	if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = "CORRRECT!!!"
		return true ;
	}else{
		message.innerHTML = ""
		return false
	}
}


//pick &  show random words
function showWords(words) {
	//genearte array index
	const randIndex  =Math.floor(Math.random()*words.length);
	//output
	currentWord.innerHTML = words[randIndex];

}

//countdown timer
function countdown() {
	//time is not runOut
	if(time>0){
		time--;
	}else if(time === 0){
		//game is over
		isPlaying = false ;
	}
	timeDisplay.innerHTML = time ;
}
//	game check status
function checkStatus() {
	if(!isPlaying && time === 0){
		message.innerHTML = 'GameOver!!!';
		score = -1 ;
	}
}