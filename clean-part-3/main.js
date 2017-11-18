var startDate = new Date(2017, 10, 1)
var curentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())

var daysCount = 7;
var weekCount = 6;

var nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

function init() {

    var el = new DaysGrid(startDate, weekCount, daysCount).render()
    console.log(el)

    grid.appendChild(el)


    let leftArrowClick = document.getElementById("leftArrow")
    leftArrowClick.onclick = previousGrid

    let rightArrowClick = document.getElementById("rightArrow")
    rightArrowClick.onclick = followingGrid

    //месяц в верхней строчке календаря
    сurrentMonth.innerHTML = nameMonth[curentDate.getMonth()]
}


function previousGrid() {

    daysGridEl = document.getElementsByClassName("daysGrid")
    curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() - 1, curentDate.getDate())
    //curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth(), curentDate.getDate() - daysCount * weekCount)

    daysPreviousGridEl = new DaysGrid(curentDate).render()
    grid.replaceChild(daysPreviousGridEl, daysGridEl[0])
    сurrentMonth.innerHTML = nameMonth[curentDate.getMonth()]
}

function followingGrid() {

    daysGridEl = document.getElementsByClassName("daysGrid")
    curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() + 1, curentDate.getDate())
    //curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth(), curentDate.getDate() + daysCount * weekCount)

    daysFollowingGridEl = new DaysGrid(curentDate).render()
    grid.replaceChild(daysFollowingGridEl, daysGridEl[0])
    сurrentMonth.innerHTML = nameMonth[curentDate.getMonth()]
}

window.onload = init;




