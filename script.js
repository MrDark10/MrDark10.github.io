// Clear screen with C button.

function clearScreen() {

 document.getElementById("result")
  .value = "";

}



// Display updates in Result Input

function updScreen(val) {

 var x = document.getElementById(
  "result").value;

 document.getElementById("result")
  .value = x + val;

}



// Switch between Dark and Light Modes

function themeSwitcher() {

 var dark = document.getElementById(
  "dark-mode");

 var th = document.getElementById(
  "theme");

 if (th.getAttribute('href') ==
  'light.css') {

  th.href = 'dark.css';

  dark.innerHTML = 'Light Mode';

 } else {

  th.href = 'light.css';

  dark.innerHTML = 'Dark Mode';

 }

}