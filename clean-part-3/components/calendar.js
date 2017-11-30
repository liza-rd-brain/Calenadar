function Calendar() { }

let cprt = Calendar.prototype
cprt.CLASS_NAME = "Calendar"
//объект Date - системно обновляемый!! следовательно systemDate будет автоматически обновляться
//именно в твоем часовом поясе

// как понять, какие переменные определять внутри render-а?!
var startDate = new Date()
//от startDate или curentDate нужно избавиться
var curentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())

var daysCount = 7;
var weekCount = 6;
var nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
cprt.render = function () {

    var daysGridEl = new DaysGrid(startDate, weekCount, daysCount).render()
    console.log(daysGridEl)
    // грид пока просто элемент придуманный и лежащий в html коде
    grid.appendChild(daysGridEl)

   
    let leftArrowClick = document.getElementById("leftArrow")
    leftArrowClick.onclick = previousGrid

    let rightArrowClick = document.getElementById("rightArrow")
    rightArrowClick.onclick = followingGrid

    //месяц в верхней строчке календаря
    сurrentMonth.innerHTML = nameMonth[curentDate.getMonth()]
}


window.onload = cprt.render 