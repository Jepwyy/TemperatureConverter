document.getElementById("cInput").oninput = function () {
  convertCToF();
};
document.getElementById("fInput").oninput = function () {
  convertFToC();
};

function convertCToF() {
  var c = document.querySelector("#cInput").value;
  var f = c * (9 / 5) + 32;

  c = parseInt(c);
  f = parseInt(f);

  document.querySelector("#result").innerHTML = "Result: " + f + " \u2109";
}

document.querySelector("#submit").onclick = convertCToF;

function convertFToC() {
  var f = document.querySelector("#fInput").value;
  var c = ((f - 32) * 5) / 9;

  c = parseInt(c);
  f = parseInt(f);

  document.querySelector("#result").innerHTML = "Result: " + c + " \u2103";
}

document.querySelector("#submit").onclick = convertFToC;
