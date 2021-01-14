/* Gerben Pellekaan                                          
 	Student Software Developer
	Adventure Game  */

var gameContainer 	= document.getElementById("game-container");
var title  			= document.getElementById("title");
var description 	= document.getElementById("description");
var gameButtons		= document.getElementById("game-buttons");
var button1 		= document.getElementById("button1");
var button2 		= document.getElementById("button2");
var button3			= document.getElementById("button3");
var inventoryItem 	= document.getElementById("inventoryItem");

var knife 	= 0;
var key 	= 0;

 
start();

// als je in het kantoor bent kan je een sleutel pakken
// Die sleutel kan je gebruiken om een deur te openen
// Op weg naar je cel kom je een deur tegen en dat is die deur.

// ALS JE DE 2E ITEM NIET KAN FIXEN HAAL DAN DE EERSTE ITEM WEG.
// ZET DE BACKGROUND IMG BIJ SOMMIGE LEVELS IN DE CSS

function start (){
	console.log ("Start");

	gameContainer.className = "start";
	title.innerHTML = "Escape The Prison";
	description.innerHTML = "Welkom bij mijn Point & Click Adventure Game.";

	button1.innerHTML = "Start";

	button1.style.display = "inline";
	button2.style.display = "none";
	button3.style.display = "none";
	inventoryItem.style.display = "none";

	button1.onclick = prisonCell;
}

function prisonCell (){
	console.log("prisonCell");

	gameContainer.className = "prisonCell";
	title.innerHTML = "The Prison Cell";
	description.innerHTML = "Je bent opgepakt en zit nu in de gevangenis. Je wilt zo snel mogelijk ontsnappen. Maar eerst moet je weten hoe de gevangenis er uit ziet en dan kan je een plan gaan maken om te ontsnappen. Gelukkig heb je nu vrije tijd";

	button1.innerHTML = "Kantine";
	button2.innerHTML = "In je cel blijven";
	button3.innerHTML = "Douchen";

	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "inline";
	inventoryItem.style.display = "none";

	button1.onclick = kantine;
	button2.onclick = prisonCell2;
	button3.onclick = showers;
}

function kantine (){
	console.log("kantine");

	if (knife == 0){
		gameContainer.className = "kantine";
		title.innerHTML = "Kantine";
		description.innerHTML = "Je besloot om naar de kantine te gaan. Je hebt best wel honger. Er loopt een pestkop naar je toe die je eten wilt.";

		button1.innerHTML = "Geef je eten";
		button2.innerHTML = "Hou je eten";

		button1.style.display = "inline";
		button2.style.display = "inline";
		button3.style.display = "none";

		inventoryItem.style.display = "inline";
		document.getElementById("inventoryItem").src = "img/plastic-knife.jpg";
		inventoryItem.style.width = 100 + 'px';
		inventoryItem.style.position = 'relative';
		inventoryItem.style.top = 100 + 'px';
		inventoryItem.style.left = 900 + 'px';

		inventoryItem.onclick = plastic_knife

		button1.onclick = givefood;
		button2.onclick = keepfood;	
	}else{
		gameContainer.className = "kantine";
		title.innerHTML = "Kantine";
		description.innerHTML = "Je besloot om naar de kantine te gaan. Je hebt best wel honger. Er loopt een pestkop naar je toe die je eten wilt.";

		button1.innerHTML = "Geef je eten";
		button2.innerHTML = "Hou je eten";

		button1.style.display = "inline";
		button2.style.display = "inline";
		button3.style.display = "none";
		inventoryItem.style.display = "none";

		button1.onclick = givefood;
		button2.onclick = keepfood;	
	}
}

function plastic_knife(){
	console.log("Plastic knife grabbed.");

	inventoryItem.style.display = "none";
	knife = 1	
}

function prisonCell2 (){
	console.log("prisonCell2");

	gameContainer.className = "prisonCell2";
	title.innerHTML = "The Prison Cell";
	description.innerHTML = "Je bent in je cel. Je ziet een deur. Wat ga je doen?";

	button1.innerHTML = "Ga naar de deur";
	button2.innerHTML = "Ga toch maar eten";
	button3.innerHTML = "Ga douchen";

	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "inline";
	inventoryItem.style.display = "none";

	button1.onclick = eindDeur;
	button2.onclick = kantine;	
	button3.onclick = douche;
}

function showers (){
	console.log("showers");

	gameContainer.className = "showers";
	title.innerHTML = "De douche";
	description.innerHTML = "Je gaat de douche in. Je ziet dat er aan de voorkant een douche vrij is. Aan de achterkant zijn ook douches vrij.";

	button1.innerHTML = "Pak je de voorste";
	button2.innerHTML = "Pak je de achterste";

	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "none";
	inventoryItem.style.display = "none";

	button1.onclick = rustigDouchen
	button2.onclick = zeepDood
}

function rustigDouchen (){
	gameContainer.className = "showers";
	title.innerHTML = "De douche";
	description.innerHTML = "Je hebt lekker gedoucht, je bent afgedroogt. Je hebt best wel honger";

	button1.innerHTML = "Naar de kantine";

	button1.style.display = "inline";
	button2.style.display = "none";
	button3.style.display = "none";
	inventoryItem.style.display = "none";

	button1.onclick = kantine
}

function zeepDood (){
	description.innerHTML = "Je loopt naar de achterste douchen en wanneer je om het hoekje heen loopt glij je uit over zeep. Je stoot je hoofd heel hard en overleeft het niet.";
		gameContainer.style.backgroundImage = 'url("img/game-over.jpg")';

		button1.style.display = "none";
		button2.style.display = "none";
		button3.style.display = "none";
		inventoryItem.style.display = "none";
}

function givefood (){
	console.log ("giveFood");

	gameContainer.className = "giveFood";
	title.innerHTML = "The bully";
	description.innerHTML = "Je geeft de pestkop je eten. Hij lacht naar je en loopt weer weg";

	button1.innerHTML = "Ga Terug Naar je Cel";
	button2.innerHTML = "Ga Douchen";

	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "none";
	inventoryItem.style.display = "none";

	button1.onclick = prisonCell2;
	button2.onclick = showers;
}

function keepfood (){
	console.log ("keepFood");

	if (knife == 0){
		description.innerHTML = "Je houd je eten bij je. De pestkop vindt dat niet kunnen en slaat je in elkaar. Je hebt een erge wond opgelopen en je overleeft het niet.";
		gameContainer.style.backgroundImage = 'url("img/game-over.jpg")';

		button1.style.display = "none";
		button2.style.display = "none";
		button3.style.display = "none";
		inventoryItem.style.display = "none";
	}
	else{
		gameContainer.className = "keepFood";
		description.innerHTML = "Je houd je eten bij je. De pestkop vindt dat niet kunnen en wilt je slaan. Gelukkig kan je de pestkop verassen met het plastic mesje en geef je hem een wond. De pestkop laat je met rust voor nu en jij een lekker je eten op, maar er loopt een bewaker naar je toe die vraagt of je mee wilt komen.";

		button1.innerHTML = "Vecht met de bewaker";
		button2.innerHTML = "Loop rustig mee.";

		button1.style.display = "inline";
		button2.style.display = "inline";
		button3.style.display = "none";
		inventoryItem.style.display = "none";

		button1.onclick = bewaker;
		button2.onclick = kantoor;
	}
}

function bewaker (){
	console.log("Bewaker");
	description.innerHTML = "Je besluit om met de bewaker te vechten, maar dat gaat niet zo goed. Je word op je hoofd geslagen en ligt voor een lange tijd knock out.";
	gameContainer.style.backgroundImage = 'url("img/game-over.jpg")';

	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	inventoryItem.style.display = "none";	
}

function kantoor (){
	console.log("kantoor");

	if (key == 0){
		gameContainer.className = "kantoor";
		title.innerHTML = "Kantoor";
		description.innerHTML = "Je loopt mee naar het kantoor. Je word ondervraagt, alles gaat tot nu toe goed. De bewakers dragen de rug naar je toe. Wat ga je doen?";

		button1.innerHTML = "Wacht";
		button2.innerHTML = "Probeer weg te rennen";

		button1.style.display = "inline";
		button2.style.display = "inline";
		button3.style.display = "none";

		inventoryItem.style.display = "inline";
		document.getElementById("inventoryItem").src = "img/key.png";
		inventoryItem.style.width = 50 + 'px';
		inventoryItem.style.position = 'relative';
		inventoryItem.style.top = 200 + 'px';
		inventoryItem.style.left = 50 + 'px';

		inventoryItem.onclick = key

		button1.onclick = wacht
		button2.onclick = runAway
	}
	else{
		gameContainer.className = "kantoor";
		title.innerHTML = "Kantoor";
		description.innerHTML = "Je loopt mee naar het kantoor. Je word ondervraagt, alles gaat tot nu toe goed. De bewakers dragen de rug naar je toe. Wat ga je doen?";

		button1.innerHTML = "Wacht";
		button2.innerHTML = "Probeer weg te rennen";

		button1.style.display = "inline";
		button2.style.display = "inline";
		button3.style.display = "none";

		inventoryItem.style.display = "none";

		button1.onclick = wacht
		button2.onclick = runAway
	}
}

function wacht (){
	gameContainer.className = "kantoor";
	title.innerHTML = "Kantoor";
	description.innerHTML = "Je besluit te wachten. De bewakers overleggen een beetje en je word vrijgezet. Ze brengen je terug naar je cel";

	button1.innerHTML = "Terug naar je cel";

	button1.style.display = "inline";
	button2.style.display = "none";
	button3.style.display = "none";

	inventoryItem.style.display = "none";

	button1.onclick = prisonCell2
}

function runAway (){
	title.innerHTML = "Isolation Cell";
	description.innerHTML = "Je besluit weg te rennen. Je word gepakt en in de isolatie cel gestopt.";
	gameContainer.style.backgroundImage = 'url("img/game-over.jpg")';

	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";

	inventoryItem.style.display = "none";
}

function key(){
	console.log("Key grabbed.");

	inventoryItem.style.display = "none";
	key = 1	
}

function eindDeur (){
	console.log("Eind Deur");

	if (key == 0){
		
		gameContainer.className = "eindDeur";
		title.innerHTML = "Prison Door";
		description.innerHTML = "Je bent bij de deur en dan zie je het. Het is de uitweg! Er is alleen een sleutel nodig om de deur te openen.";

		button1.style.display = "inline";
		button2.style.display = "none";
		button3.style.display = "none";

		button1.innerHTML = "Ga terug naar je cel";

		button1.onclick = prisonCell2;
	}else{
		gameContainer.className = "eindDeur";
		title.innerHTML = "Prison Door";
		description.innerHTML = "Je bent bij de deur en dan zie je het. Het is de uitweg! Er is alleen een sleutel nodig om de deur te openen. En met geluk heb jij die sleutel!";

		button1.style.display = "inline";
		button2.style.display = "inline";
		button3.style.display = "none";

		button1.innerHTML = "Ga terug naar je cel";
		button1.innerHTML = "Open de deur";

		button1.onclick = prisonCell2;
		button2.onclick = youWin;
	}
}

function youWin (){
	gameContainer.className = "youWin";
	title.innerHTML = "You Win!!";
	description.innerHTML = "Je opende de deur en je ziet het. De buiten wereld! Je bent ontsnapt uit de gevangenis en loopt vrij rond. Voor nu...";

	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
}

