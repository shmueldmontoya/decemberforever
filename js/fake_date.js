let initial = new Date('2021-12-31 00:').getTime(),
final = new Date().getTime(),
diff = final - initial,
difference = parseInt(diff/(1000*60*60*24) ),
finalDate = difference + 31;
document.getElementById("today").innerHTML = `${getMyGreeting()}<br>Hoy es ${finalDate} de Diciembre del 2021`;


function getMyGreeting() {
	let myHour = new Date().getHours();
	switch(myHour) {
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
			return "¿No deberías estar durmiendo?"
		case 3:
		case 4:
		case 5:
			return "¿Porqué te levantas tan temprano?"
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			return "¡Buenos días!"
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			return "¡Buenas tardes!"
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
			return "¡Buenas Noches!"
	}
}

// funcion para mostrar la hora

function clock() {
	let now = new Date().toLocaleTimeString('en-US');
	let displayClock = document.getElementById("displayclock");
	displayClock.innerHTML = now
	setTimeout("clock()", 1000)
}
setTimeout(clock(), 1000)