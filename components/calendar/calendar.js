function Calendar(container) {
    this.container = container
    this.navigatorEl = null
    this.calendarEl = null
    this.gridEl = null
    this.updateCalendar = this.updateCalendar.bind(this)
    this.updateSystemDate = this.updateSystemDate.bind(this)
    this.timer = setInterval(this.updateSystemDate, 10000)
    //curentDate - текущий день
    this.curentDate = new Date()
    //updateDate- обновляемая дата, для листания стелок навигатора
    this.updateDate = new Date()
    this.daysCount = 7
    this.weekCount = 6
}
let cprt = Calendar.prototype
cprt.CLASS_NAME = "calendar"

cprt.render = function () {
    this.calendarEl = document.createElement("div")
    this.calendarEl.className = this.CLASS_NAME
    this.container.appendChild(this.calendarEl)
    this.makeCalendarChild(this.curentDate)
}

//makeCalendarChild -перерисовка дочерних компонент
cprt.makeCalendarChild = function (changeDate) {
    //changeDate - изменяема дата от которой reRender и будет строить новые компоненты
    this.navigatorEl = new Navigator(changeDate, this.updateCalendar).render()
    this.gridEl = new Grid(changeDate, this.weekCount, this.daysCount).render()
    this.calendarEl.appendChild(this.navigatorEl)
    this.calendarEl.appendChild(this.gridEl)
}
//removeCalendarChild - удаление дочерних компонент календаря
cprt.removeCalendarChild = function () {
    this.calendarEl.removeChild(this.navigatorEl)
    this.calendarEl.removeChild(this.gridEl)
}
cprt.updateSystemDate = function () {
    if (new Date().getHours() == 0 && new Date().getMinutes() == 0) {
        this.curentDate = new Date()
        this.removeCalendarChild()
        this.makeCalendarChild(this.curentDate)
    }
}
cprt.updateCalendar = function (event) {
    const year = this.updateDate.getFullYear()
    let month = this.updateDate.getMonth()
    const date = this.updateDate.getDate()

    if (event.target.data == Navigator.prototype.RIGHT) {
        month += 1
    }
    else {
        month -= 1
    }
    this.updateDate = new Date(year, month, date)
    this.removeCalendarChild()
    this.makeCalendarChild(this.updateDate)
}

cprt = null



