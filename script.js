let celciusSelect = document.getElementById("celcius");
let farenSelect = document.getElementById("faren");

function convert() {
  farenSelect.value = celciusSelect.value * 1.8 + 32;
}
