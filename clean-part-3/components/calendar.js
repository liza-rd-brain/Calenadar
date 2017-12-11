function Calendar() { }
let cprt = Calendar.prototype
cprt.CLASS_NAME = "calendar"
//объект Date - системно обновляемый!! следовательно systemDate будет автоматически обновляться
//именно в твоем часовом поясе

// как понять, какие переменные определять внутри render-а?!
//от startDate или curentDate нужно//можно избавиться?!?!?
/*var startDate = new Date()
var curentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())*/
var curentDate = new Date()

var daysCount = 7;
var weekCount = 6;
//var nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]



cprt.previousGrid = function () {

    curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() - 1, curentDate.getDate())
    //предыдущий месяц
    let previosMonth = new CurrentMonth(curentDate).renderPrevios()
    /*let previousGrid= new DaysGrid(curentDate).render()*/
    let previousGrid = new DaysGrid(curentDate).renderPrevios()

}
cprt.followingGrid = function () {
    curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() + 1, curentDate.getDate())
    //следующий месяц
    let followingMonth = new CurrentMonth(curentDate).renderFollowing()
    let followingGrid = new DaysGrid(curentDate).renderFollowing()
}

cprt.render = function () {
    let calendarEl = document.createElement("div")
    calendarEl.className = this.CLASS_NAME
    container.appendChild(calendarEl)
    /*let calendarEl = document.createElement("div")
    calendarEl.className = this.CLASS_NAME
    container.appendChild(calendarEl)*/

    let navigatorEl = new Navigator(curentDate, calendarEl, this.previousGrid, this.followingGrid).render()
    let gridEl = new Grid(curentDate, weekCount, daysCount, calendarEl).render()
}



cprt = null