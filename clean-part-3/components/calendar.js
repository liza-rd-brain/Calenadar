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
    //systemDate - текущий день отмечаемый зеленым
    this.systemDate = new Date()
    this.daysCount = 7
    this.weekCount = 6
}
let cprt = Calendar.prototype
cprt.CLASS_NAME = "calendar"



//reRender -перерисовка дочерних компонент
cprt.reRender = function (changeDate) {
    //changeDate - изменяема дата от которой reRender и будет строить новые компоненты
    this.calendarEl.removeChild(this.navigatorEl)
    this.calendarEl.removeChild(this.gridEl)
    this.navigatorEl = new Navigator(changeDate, this.calendarEl, this.updateCalendar).render()
    this.gridEl = new Grid(changeDate, this.systemDate, this.weekCount, this.daysCount, this.calendarEl).render()

}
cprt.updateSystemDate = function () {
    if (new Date().getHours() == 0 && new Date().getMinutes() == 0) {
        this.curentDate = new Date()
        this.systemDate = new Date()
        this.reRender(this.curentDate)
    }
}

cprt.render = function () {
    this.calendarEl = document.createElement("div")
    this.calendarEl.className = this.CLASS_NAME
    this.container.appendChild(this.calendarEl)

    this.navigatorEl = new Navigator(this.curentDate, this.calendarEl, this.updateCalendar).render()
    this.gridEl = new Grid(this.curentDate, this.systemDate, this.weekCount, this.daysCount, this.calendarEl).render()
}

cprt.updateCalendar = function (event) {
    if (event.target.data == "right") {
        this.updateDate = new Date(this.updateDate.getFullYear(), this.updateDate.getMonth() + 1, this.updateDate.getDate())
    }
    else {
        this.updateDate = new Date(this.updateDate.getFullYear(), this.updateDate.getMonth() - 1, this.updateDate.getDate())
    }
    this.reRender(this.updateDate)
}

cprt = null