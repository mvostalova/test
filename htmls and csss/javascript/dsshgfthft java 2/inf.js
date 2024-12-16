// Získání odkazu na element pro zobrazení informace o dni
var currentDayContainer = document.getElementById('currentDayContainer');

// Pole s názvy dní v týdnu
var daysOfWeek = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];

// Získání aktuálního dne v týdnu (0 = neděle, 1 = pondělí, atd.)
var currentDayIndex = new Date().getDay();

// Nastavení obsahu a stylu v závislosti na tom, zda je víkend
if (currentDayIndex === 0 || currentDayIndex === 6) {
  currentDayContainer.textContent = 'Dnes je víkend (' + daysOfWeek[currentDayIndex] + ').';
  currentDayContainer.classList.add('weekend');
} else {
  currentDayContainer.textContent = 'Dnes je ' + daysOfWeek[currentDayIndex] + '.';
}

