function Calendar() { }
let cprt = Calendar.prototype
cprt.CLASS_NAME = "calendar"
//объект Date - системно обновляемый!! следовательно systemDate будет автоматически обновляться
//именно в твоем часовом поясе

// как понять, какие переменные определять внутри render-а?!
//от startDate или curentDate нужно//можно избавиться?!?!?
var startDate = new Date()
var curentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())

var daysCount = 7;
var weekCount = 6;
//var nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
cprt.render = function () {
    let calendarEl = document.createElement("div")
    calendarEl.className = this.CLASS_NAME
    container.appendChild(calendarEl)

    let navigatorEl = new Navigator(curentDate, calendarEl).render()
    let gridEl = new Grid(startDate, weekCount, daysCount, calendarEl).render()
}


cprt = null