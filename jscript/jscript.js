let nativeColor = window.getComputedStyle(document.getElementById('button-color')).backgroundColor;

document.getElementById('button-color').onclick = function recolor() {
  if (nativeColor === "rgb(0, 128, 0)") {
    nativeColor = "rgb(255, 0, 0)"
  } else {
    nativeColor = "rgb(0, 128, 0)"
  }
  document.getElementById('button-color').style = "background-color : " + nativeColor;
}



document.getElementById('button').onclick = function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let action = document.getElementsByName('action');
  if (!num1 || !num2) {
    alert('Undefined arguments');
  } else {

    let result;
    let move;
    for (let i = 0; i < action.length; i++) {
      if (action[i].type == "radio" && action[i].checked) {
        move = +(action[i].value);
      }

    }

    switch (move) {
      case 0:
        result = num1 + num2;
        break;
      case 1:
        result = num1 - num2;
        break;
      case 2:
        result = num1 * num2;
        break;
      case 3:
        result = num1 / num2;
        break;

    }

    document.getElementById('result').setAttribute('value', result);

  }
}
