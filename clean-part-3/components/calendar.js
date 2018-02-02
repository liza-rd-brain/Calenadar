function Calendar(container) {
    this.container = container
    this.navigatorEl = null
    this.calendarEl = null
    this.gridEl = null
    this.updateCalendar = this.updateCalendar.bind(this)
    this.updateSystemDate = this.updateSystemDate.bind(this)
    this.timer = setInterval(this.updateSystemDate.bind(this), 10000)

}
let cprt = Calendar.prototype
cprt.CLASS_NAME = "calendar"

//curentDate - текущий день
let curentDate = new Date()
//updateDate- обновляемая дата, для листания стелок навигатора
let updateDate = new Date()
//systemDate - текущий день отмечаемый зеленым
let systemDate = new Date()
var daysCount = 7;
var weekCount = 6;



cprt.updateSystemDate = function () {

    if (new Date().getHours() == 0 && new Date().getMinutes() == 0) {
       
        this.calendarEl.removeChild(this.navigatorEl)
        this.calendarEl.removeChild(this.gridEl)
        curentDate = new Date()
        systemDate = new Date()
        this.navigatorEl = new Navigator(curentDate, this.calendarEl, this.updateCalendar).render()
        this.gridEl = new Grid(curentDate, systemDate, weekCount, daysCount, this.calendarEl).render()
    }
}

cprt.render = function () {
    this.calendarEl = document.createElement("div")
    this.calendarEl.className = this.CLASS_NAME
    this.container.appendChild(this.calendarEl)

    this.navigatorEl = new Navigator(curentDate, this.calendarEl, this.updateCalendar).render()
    this.gridEl = new Grid(curentDate, systemDate, weekCount, daysCount, this.calendarEl).render()
}

cprt.updateCalendar = function (event) {
    this.calendarEl.removeChild(this.navigatorEl)
    this.calendarEl.removeChild(this.gridEl)

    if (event.target.data == "right") {
        updateDate = new Date(updateDate.getFullYear(), updateDate.getMonth() + 1, updateDate.getDate())
    }
    else {
        updateDate = new Date(updateDate.getFullYear(), updateDate.getMonth() - 1, updateDate.getDate())
    }
    this.navigatorEl = new Navigator(updateDate, this.calendarEl, this.updateCalendar).render()
    this.gridEl = new Grid(updateDate, systemDate, weekCount, daysCount, this.calendarEl).render()
}

cprt = null