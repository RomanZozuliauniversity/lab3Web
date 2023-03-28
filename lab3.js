//1
function firstTask(){
    var historyCount = window.history.length;

  var paragraphCount = document.getElementsByTagName("p").length;

  var message = "Кількість URL в історії: " + historyCount + "\nКількість абзаців на сторінці: " + paragraphCount;

  alert(message); 
}

//2
function checkNumber() {
    var numStr = prompt("Введіть число від 0 до 100");
    if (isNaN(numStr)) {
        alert("Ви ввели не число");
        return;
    }
    var num = Number(numStr);
    if (num < 0 || num > 100) {
        alert("Ви ввели число, яке не належить діапазону від 0 до 100");
        return;
    }
    if (num < 25) {
        alert("Мамо, я до дому, надовго...");
    } else if (num < 50) {
        alert("Походу повторка");
    } else if (num < 70) {
        alert("Життя продовжується");
    } else if (num < 88) {
        alert("Красава");
    } else {
        alert("Це фантастика (К.)");
    }
}
//3
function taskThird(){
    var confirmed = confirm("Задати колір тексту синім а фон жовтим?");

if (confirmed) {
  
  var elements = document.getElementsByClassName("work");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "blue";
    elements[i].style.backgroundColor = "yellow";
  }
} else {
  alert("Місія відмінена");
}
}
//4
let newWindow;
function firstFunction(){
 newWindow = window.open("http://lp.edu.ua/", "_blank");
}

function secondFunction(){
 newWindow.close();
}
