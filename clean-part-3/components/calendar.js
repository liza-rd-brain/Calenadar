function Calendar() { }
let cprt = Calendar.prototype
cprt.CLASS_NAME = "calendar"

// как понять, какие переменные определять внутри render-а?!
//от startDate или curentDate нужно//можно избавиться?!?!?
/*var startDate = new Date()
var curentDate = new Date(startDate.getFullYear(), startDate.getMonth()-1, startDate.getDate())*/
var curentDate = new Date()

var daysCount = 7;
var weekCount = 6;

cprt.previousGrid = function () {
    document.getElementsByClassName("navigator")[0].removeChild(document.getElementsByClassName("currentMonth")[0])
    document.getElementsByClassName("grid")[0].removeChild(document.getElementsByClassName("daysGrid")[0])

    curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() - 1, curentDate.getDate())
    //предыдущий месяц
    let previosMonth = new CurrentMonth(curentDate, this.previousGrid, this.followingGrid).render()
    /*let previousGrid= new DaysGrid(curentDate).render()*/
    let previousGrid = new DaysGrid(curentDate, weekCount, daysCount, ).render()

}

cprt.followingGrid = function () {
    document.getElementsByClassName("navigator")[0].removeChild(document.getElementsByClassName("currentMonth")[0])
    document.getElementsByClassName("grid")[0].removeChild(document.getElementsByClassName("daysGrid")[0])

    curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() + 1, curentDate.getDate())
    //следующий месяц
    let followingMonth = new CurrentMonth(curentDate, this.previousGrid, this.followingGrid).render()
    let followingGrid = new DaysGrid(curentDate).render()
}

cprt.render = function () {
    let calendarEl = document.createElement("div")
    calendarEl.className = this.CLASS_NAME
    container.appendChild(calendarEl)
    let navigatorEl = new Navigator(curentDate, calendarEl, this.previousGrid, this.followingGrid).render()
    let gridEl = new Grid(curentDate, weekCount, daysCount, calendarEl).render()
}

cprt = null